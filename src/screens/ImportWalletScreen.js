import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import walletStore from '../stores/WalletStore';

const ImportWalletScreen = () => {
  const [privateKey, setPrivateKey] = useState('');

  const handleImport = () => {
    walletStore.importWallet(privateKey);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Private Key"
        value={privateKey}
        onChangeText={setPrivateKey}
      />
      <Button title="Import Wallet" onPress={handleImport} />
    </View>
  );
};

export default ImportWalletScreen;
