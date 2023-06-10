import React from 'react';
import { observer } from 'mobx-react-lite';
import { View, Text } from 'react-native';
import walletStore from '../stores/WalletStore';

const HomeScreen = observer(() => {
  const { network, priceBitcoin, priceUSDT } = walletStore;

  return (
    <View>
      <Text>Network: {network}</Text>
      <Text>Bitcoin Price: ${priceBitcoin}</Text>
      <Text>USDT Price: ${priceUSDT}</Text>
      {/* Implement other UI components */}
    </View>
  );
});

export default HomeScreen;
