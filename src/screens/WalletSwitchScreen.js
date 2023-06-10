import React from 'react';
import { View, Button } from 'react-native';
import walletStore from '../stores/WalletStore';

const WalletSwitchScreen = () => {
  const handleSwitchNetwork = (network) => {
    walletStore.switchNetwork(network);
  };

  return (
    <View>
      <Button title="Bitcoin" onPress={() => handleSwitchNetwork('bitcoin')} />
      <Button title="Polygon" onPress={() => handleSwitchNetwork('polygon')} />
    </View>
  );
};

export default WalletSwitchScreen;
