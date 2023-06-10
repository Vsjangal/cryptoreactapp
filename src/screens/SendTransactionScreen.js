import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import walletStore from '../stores/WalletStore';

const SendTransactionScreen = () => {
  const [receiverAddress, setReceiverAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleSendTransaction = () => {
    walletStore.sendTransaction(receiverAddress, amount);
  };

  return (
    <View>
      <TextInput
        placeholder="Receiver Address"
        value={receiverAddress}
        onChangeText={setReceiverAddress}
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Send Transaction" onPress={handleSendTransaction} />
    </View>
  );
};

export default SendTransactionScreen;
