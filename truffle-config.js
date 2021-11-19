const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");



const private_keys = [
  'a4289fd8907941430917cbf71bcc1a1e131e1834283d8b664f6cbf421f38cc76',
  '31008a30e7a13793759f9e49c574517ec454d62c6db6eaf91653ace5fded994f'
]

module.exports = {
  networks: {
   rinkeby: {
       provider: () => new HDWalletProvider( private_keys,"https://rinkeby.infura.io/v3/6b55152c69494054a15fed38367122d7"),
       network_id: 4,
       gas: 4500000,
       confirmations: 2 ,
       timeoutBlocks: 200,
       skipDryRun: true
   },
  },
  
   
  //Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0"  
 }
  }

};
