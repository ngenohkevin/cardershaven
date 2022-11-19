import React from 'react';
import { BitcoinPaymentButton } from 'react-bitcoin-payment-button';

const BitcoinPayment = () => {
    return (
        <div className="App">
            <BitcoinPaymentButton
                uid="b624e5fc734546f2"
                imageURL="https://cdn.iconscout.com/icon/free/png-512/bitcoin-390-920575.png"
                font="Roboto, Helvetica, Arial, sans-serif"
                backgroundColor="#36454F"
                descriptionColor="#fff"
                buttonColor="#428bca"
                hoverColor="#254563"
                hideBlockonomics="true"
                inputHeights="44px"
                progressbarColor="#428bca"
                BTCAmountColor="#428bca"
            />
        </div>
    );
};

export default BitcoinPayment;
