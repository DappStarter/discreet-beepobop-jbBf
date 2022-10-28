require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remain erosion grace lock sudden tattoo'; 
let testAccounts = [
"0x85fda547a8ccd1d113f7b017753a8f02056293046b5b3a88b003570e8530f5ed",
"0x7ee266ee5547daf69647ee9630aabc84e49f0de82f5067129d30ddd5578d05ca",
"0xa7bab971725d9a46b34c1562a1a8c53fa19d6e46b771f641a0e588aed5c744fb",
"0x719b204cc187c8c59b91b079c56c38d9e6bfa7102bbe916afcdab4241de80c38",
"0xb9b0295f855366066e4dbbc2b58d0ba51340be45cc057f26a1b0bb19745c5e01",
"0xe42b93e90fd2b97853ece2071cd1887d5ff6ac09f0ccd37f390df47ab08f5f53",
"0x6022a99ed393be7963001c578773b79213e7998b1bb7f712bb05db24e940369c",
"0xc3aefdb84eecfbe5f2bcf71787c816fe0b5f43fb2e82e6802caf31a44dcc9f43",
"0xc6e5cfb1dec57c47dc4f4581255660fe76c0d4d1b30a5a41517cf8938d04febd",
"0xcdd94b00a885bbc10107d0d83b049c6380946a0bde8e39ed968db993e3243c6f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

