const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'salt few renew census possible physical chef onion awesome earth need axis',
    'https://rinkeby.infura.io/w74HjvrTeX3TKStpIIVZ'
);

const web3 = new Web3(provider);