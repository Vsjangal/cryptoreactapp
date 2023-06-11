import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { View, Text, TextInput, Button } from 'react-native';
import walletStore from './src/stores/WalletStore';

const App = observer(() => {
  useEffect(() => {
    walletStore.fetchLivePrices();
    walletStore.fetchTransactionHistory();
  }, []);

  const handleBitcoinImport = () => {
    const privateKey = '...'; // Replace with the actual private key for Bitcoin wallet import
    walletStore.importBitcoinWallet(privateKey);
  };

  const handlePolygonImport = () => {
    const privateKey = '...'; // Replace with the actual private key for Polygon wallet import
    walletStore.importPolygonWallet(privateKey);
  };

  const handleNetworkSwitch = (network) => {
    walletStore.switchNetwork(network);
  };

  const handleSendTransaction = () => {
    // Handle sending transaction logic
  };

  return (
    <View>
      <Text>Bitcoin Wallet: {walletStore.bitcoinWallet}</Text>
      <Text>Polygon Wallet: {walletStore.polygonWallet}</Text>

      <Button title="Import Bitcoin Wallet" onPress={handleBitcoinImport} />
      <Button title="Import Polygon Wallet" onPress={handlePolygonImport} />

      <Text>Current Network: {walletStore.currentNetwork}</Text>
      <Button title="Switch to Bitcoin Network" onPress={() => handleNetworkSwitch('bitcoin')} />
      <Button title="Switch to Polygon Network" onPress={() => handleNetworkSwitch('polygon')} />

      <Text>Bitcoin Price: {walletStore.livePrices.bitcoin?.usd}</Text>
      {walletStore.currentNetwork === 'polygon' && (
        <Text>USDT Price: {walletStore.livePrices.usdt?.usd}</Text>
      )}

      <TextInput placeholder="Receiver Address" />
      <TextInput placeholder="Amount" />
      <Button title="Send Transaction" onPress={handleSendTransaction} />

      <Text>Transaction History:</Text>
      {walletStore.transactionHistory.map((transaction) => (
        <Text key={transaction.id}>{transaction.status}: {transaction.amount}</Text>
      ))}
    </View>
  );
});

export default App;
