import { observable, action, runInAction } from 'mobx';
import axios from 'axios';
import endpoints from '../../api';
import { MaticPOSClient } from '@polygonproject/maticjs';

class WalletStore {
  @observable
  currentNetwork = 'bitcoin';

  @observable
  bitcoinWallet = '';

  @observable
  polygonWallet = '';

  @observable
  livePrices = {};

  @observable
  transactionHistory = [];

  @action
  importBitcoinWallet = async (privateKey) => {
    try {
      const response = await axios.post(endpoints.bitcoinWalletImport, { privateKey });
      runInAction(() => {
        this.bitcoinWallet = response.data.wallet;
      });
    } catch (error) {
      console.error('Failed to import Bitcoin wallet:', error);
    }
  };

  @action
  importPolygonWallet = async (privateKey) => {
    try {
      const response = await axios.post(endpoints.polygonWalletImport, { privateKey });
      runInAction(() => {
        this.polygonWallet = response.data.wallet;
      });
    } catch (error) {
      console.error('Failed to import Polygon wallet:', error);
    }
  };

  @action
  switchNetwork = (network) => {
    this.currentNetwork = network;
  };

  @action
  fetchLivePrices = async () => {
    try {
      const response = await axios.get(endpoints.livePrices);
      runInAction(() => {
        this.livePrices = response.data;
      });
    } catch (error) {
      console.error('Failed to fetch live prices:', error);
    }
  };

  @action
  sendTransaction = async (receiverAddress, amount) => {
    // Send transaction logic
  };

  @action
  fetchTransactionHistory = async () => {
    try {
      const response = await axios.get(endpoints.transactionHistory);
      runInAction(() => {
        this.transactionHistory = response.data;
      });
    } catch (error) {
      console.error('Failed to fetch transaction history:', error);
    }
  };
}

const walletStore = new WalletStore();
export default walletStore;
