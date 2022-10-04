require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remind concert grace slam foster spatial'; 
let testAccounts = [
"0xa931d05e075c68c0aa66bd50324ab9e74a66a8946eaf5a4892ae4383469b241b",
"0x16cfdb9f1dc55b5d08b2c383f7da003ed014784e706d1467f44680d374cb9606",
"0xaef6396e358ce556f42b8984a17e79149008f7e6e52d4108eebebe74b1ceb731",
"0x531021641d066a80fa931bfbd360774ebea7f4d323954378294921ade069511f",
"0xc57f8e3150fa9b875d9dd92a48bc6c8d136f1a00bcb4b85b211ff1d1dfc701eb",
"0x79bfe5ac9b3b26f494ec6cf60d39062aea9fdbc62f7833cbd0414006b355c450",
"0x8fc3d439727054a0008b3bb84c4664d343d98856908dfcc6c3cf69bbe1368436",
"0xb84b3a51732a1dfe19a7d4931c1267d6385da478b93e39b9dcc83050b5b2e097",
"0x561e37e2e559f783b429e905349525dbf9ab5a4811a2cd068ccc1e172507bb0a",
"0x7e6fff0f1067246452aef3067a409ec26ef3e4b1005d3d798ba94701d13f5489"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

