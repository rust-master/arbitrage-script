const HDWalletProvider = require("@truffle/hdwallet-provider");

const secrets = require("./secrets.json");
const private_key = secrets.PRIVATE_KEY;
const infura_url = secrets.INFURA_URL;

module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(private_key, infura_url),
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
};
