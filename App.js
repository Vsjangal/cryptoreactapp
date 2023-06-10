import React from 'react';
import { Provider } from 'mobx-react';
import AppNavigator from './AppNavigator';
import walletStore from './src/stores/WalletStore';

export default function App() {
  console.log("lord");
  return (
    <Provider walletStore={walletStore}>
      <AppNavigator />
    </Provider>
  );
}
