import React, { useState, useCallback, useEffect } from 'react';
import { Button, TextField, Box, Typography, Snackbar, Alert, CircularProgress } from '@mui/material';
import { useWallet, ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import axios from 'axios';
import '@solana/wallet-adapter-react-ui/styles.css';

const EnviarToken = () => {
    const { publicKey, connect, connected, disconnect } = useWallet();
    const [recipient, setRecipient] = useState('');
    const [message, setMessage] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (publicKey) {
            setRecipient(publicKey.toBase58());
        }
    }, [publicKey]);

    const handleConnectAndSend = useCallback(async () => {
        if (!connected) {
            try {
                await connect();
                setMessage('Billetera conectada con éxito');
                setSnackbarOpen(true);
            } catch (error) {
                console.error('Error al conectar la billetera:', error);
                setMessage('Error al conectar la billetera');
                setSnackbarOpen(true);
                return;
            }
        }

        if (!publicKey) {
            setMessage('Por favor, conecta tu billetera primero');
            setSnackbarOpen(true);
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post('/api/transfer-token', { recipient });
            setMessage(`Transacción exitosa: ${response.data.message}`);
            setSuccess(true);  // Mostrar animación de éxito
            setSnackbarOpen(true);
        } catch (error) {
            console.error('Error durante la transacción:', error);
            if (error.response && error.response.data.message.includes('insufficient funds')) {
                setMessage('Fondos insuficientes para completar la transacción');
            } else {
                setMessage(`Error durante la transacción: ${error.message}`);
            }
            setSnackbarOpen(true);
        } finally {
            setLoading(false);
            setTimeout(() => setSuccess(false), 3000);  // Ocultar animación de éxito después de 3 segundos
        }
    }, [connect, connected, publicKey, recipient]);

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Box className="flex flex-col items-center justify-center p-4 text-white bg-gray-800">
            <WalletMultiButton />
            <Typography variant="h6" gutterBottom>
                Enviar SPL Token
            </Typography>
            <TextField
                label="Dirección del receptor"
                variant="outlined"
                fullWidth
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleConnectAndSend}
                disabled={loading || !recipient}
                sx={{ marginTop: 2 }}
            >
                {loading ? <CircularProgress size={24} /> : 'Enviar Token'}
            </Button>
            {success && (
                <div style={{ color: '#4caf50', fontSize: '48px', marginTop: '20px', animation: 'successAnimation 1s ease-in-out' }}>
                    ✓
                </div>
            )}
            <style jsx>{`
                @keyframes successAnimation {
                    0% {
                        opacity: 0;
                        transform: scale(0.5);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.1);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={success ? "success" : "error"} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

const EnviarTokenPage = () => {
    const endpoint = 'https://silent-palpable-vineyard.solana-mainnet.quiknode.pro/f1167cb94d7a775a454bbba313ba69e9222ee3e7'; // O reemplazar con tu endpoint de QuickNode

    const wallets = [new PhantomWalletAdapter()];

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <EnviarToken />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default EnviarTokenPage;
