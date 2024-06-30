#!/bin/bash

# Instalar Solana
sh -c "$(curl -sSfL https://release.solana.com/v1.18.17/install)"

# Añadir Solana CLI al PATH
export PATH="/root/.local/share/solana/install/active_release/bin:$PATH"

# Verificar la instalación
solana --version
spl-token --version
