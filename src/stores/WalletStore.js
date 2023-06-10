import { makeAutoObservable } from 'mobx';

const walletStore = {
  network: 'bitcoin',
  priceBitcoin: 0,
  priceUSDT: 0,
  transactionHistory: [],
  isLoading: false,

  async fetchBitcoinPrice() {
    try {
      this.setLoading(true);
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
      const data = await response.json();
      this.setBitcoinPrice(data.bitcoin.usd);
    } catch (error) {
      console.error('Error fetching Bitcoin price:', error);
    } finally {
      this.setLoading(false);
    }
  },

  async fetchUSDTPrice() {
    try {
      this.setLoading(true);
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd');
      const data = await response.json();
      this.setUSDTPrice(data.tether.usd);
    } catch (error) {
      console.error('Error fetching USDT price:', error);
    } finally {
      this.setLoading(false);
    }
  },

  // ... other actions

  setNetwork(network) {
    this.network = network;
  },

  setBitcoinPrice(price) {
    this.priceBitcoin = price;
  },

  setUSDTPrice(price) {
    this.priceUSDT = price;
  },

  setTransactionHistory(history) {
    this.transactionHistory = history;
  },

  setLoading(isLoading) {
    this.isLoading = isLoading;
  },
};

makeAutoObservable(walletStore, {
  fetchBitcoinPrice: async,
  fetchUSDTPrice: async,
});

export default walletStore;
