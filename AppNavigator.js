import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ImportWalletScreen from './src/screens/ImportWalletScreen';
import SendTransactionScreen from './src/screens/SendTransactionScreen';
import WalletSwitchScreen from './src/screens/WalletSwitchScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    ImportWallet: ImportWalletScreen,
    SendTransaction: SendTransactionScreen,
    WalletSwitch: WalletSwitchScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
