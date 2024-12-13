import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

function countChars(str, char) {
    const revStr = str.split('').reverse().join('');
    let i = 0;
    while (revStr[i] === '8' && i < revStr.length) { i++ }

    return i;
}

let longestSeriesAddress = "";
let longestSeriesLength = 0;

let pkey;
let mnemonic;

while (true) {
    const wallet = ethers.Wallet.createRandom();
    pkey = wallet.privateKey;
    mnemonic = wallet.mnemonic;
    const walletAddress = wallet.address;

    const potentialContractAddress = ethers.getCreateAddress({ from: walletAddress, nonce: 0 });

    const count = countChars(potentialContractAddress, '8');

    if (longestSeriesLength < count) {
        longestSeriesLength = count;

        console.log("===============================")

        console.log("🚀 ~ pkey:                     ", pkey)
        console.log("🚀 ~ mnemonic:                     ", mnemonic)
        console.log("🚀 ~Wallet Address:            ", walletAddress);
        console.log("🚀 ~Potential Contract Address:", potentialContractAddress);
        console.log("🚀 ~ longestSeriesLength:      ", longestSeriesLength)
    }

}