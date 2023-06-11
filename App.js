import React, { useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { observer } from 'mobx-react-lite';
import walletStore from '.src/stores/WalletStore';

const ImportBitcoinWalletScreen = () => {
  const [privateKey, setPrivateKey] = React.useState('');

  const handleImport = () => {
    walletStore.importBitcoinWallet(privateKey);
  };

  return (
    <View>
      <Text>Import Bitcoin Wallet</Text>
      <TextInput
        placeholder="Enter private key"
        value={privateKey}
        onChangeText={setPrivateKey}
      />
      <Button title="Import" onPress={handleImport} />
    </View>
  );
};

const ImportPolygonWalletScreen = () => {
  const [privateKey, setPrivateKey] = React.useState('');

  const handleImport = () => {
    walletStore.importPolygonWallet(privateKey);
  };

  return (
    <View>
      <Text>Import Polygon Wallet</Text>
      <TextInput
        placeholder="Enter private key"
        value={privateKey}
        onChangeText={setPrivateKey}
      />
      <Button title="Import" onPress={handleImport} />
    </View>
  );
};

const SwitchNetworkScreen = () => {
  const handleSwitchNetwork = (network) => {
    walletStore.switchNetwork(network);
  };

  return (
    <View>
      <Text>Switch Network</Text>
      <Button title="Bitcoin" onPress={() => handleSwitchNetwork('bitcoin')} />
      <Button title="Polygon" onPress={() => handleSwitchNetwork('polygon')} />
    </View>
  );
};

const LivePricesScreen = () => {
  useEffect(() => {
    walletStore.fetchLivePrices();
  }, []);

  return (
    <View>
      <Text>Live Prices</Text>
      <Text>Bitcoin: {walletStore.livePrices.bitcoin?.usd}</Text>
      <Text>USDT: {walletStore.livePrices.usdt?.usd}</Text>
    </View>
  );
};

const SendTransactionScreen = () => {
  const [receiverAddress, setReceiverAddress] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const handleSendTransaction = () => {
    walletStore.sendTransaction(receiverAddress, amount);
  };

  return (
    <View>
      <Text>Send Transaction</Text>
      <TextInput
        placeholder="Receiver Address"
        value={receiverAddress}
        onChangeText={setReceiverAddress}
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Send" onPress={handleSendTransaction} />
    </View>
  );
};

const TransactionHistoryScreen = () => {
  useEffect(() => {
    walletStore.fetchTransactionHistory();
  }, []);

  return (
    <View>
      <Text>Transaction History</Text>
      {/* Display the transaction history and status */}
    </View>
  );
};

const App = observer(() => {
  useEffect(() => {
    walletStore.fetchLivePrices();
    walletStore.fetchTransactionHistory();
  }, []);

  const renderScreen = () => {
    switch (walletStore.currentNetwork) {
      case 'bitcoin':
        return <ImportBitcoinWalletScreen />;
      case 'polygon':
        return <ImportPolygonWalletScreen />;
      default:
        return null;
    }
  };

  return (
    <View>
      {renderScreen()}
      <SwitchNetworkScreen />
      <LivePricesScreen />
      <SendTransactionScreen />
      <TransactionHistoryScreen />
    </View>
  );
});

export default App;
