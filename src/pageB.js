import React from 'react';
import './pageB.css';
const ethers = require('ethers');

function PageB() {
    const wallet = ethers.Wallet.createRandom()
    
    return (
        <div className='pageB'>
        <h2>Click the above button to generate ethereum keypair</h2>
        <div className='wallet-row'>Wallet Address: {wallet.address}</div>
        <div className='wallet-row'>Mnemonic Phrase: {wallet.mnemonic.phrase}</div>
        <div className='wallet-row'>PrivateKey: {wallet.privateKey}</div>
        </div>
    )
}

export default PageB
