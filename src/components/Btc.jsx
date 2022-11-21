import React from 'react';

const Btc = () => {
    return (
        <div className="flex justify-center items-center">
            <form
                method="POST"
                action="https://mainnet.demo.btcpayserver.org/api/v1/invoices"
                className="btcpay-form btcpay-form--block"
            >
                <input
                    type="hidden"
                    name="storeId"
                    defaultValue="FwFqsycPYcVD6bcNsc7wzo1n7rARFcVMYZQLKCZC1jxn"
                />
                <input
                    type="hidden"
                    name="browserRedirect"
                    defaultValue="https://cardershaven.cc/"
                />
                <input type="hidden" name="currency" defaultValue="USD" />
                <input
                    type="image"
                    className="submit"
                    name="submit"
                    src="https://cdn.iconscout.com/icon/free/png-512/bitcoin-390-920575.png"
                    style={{ width: 146 }}
                    alt=" Payment Processor"
                />
            </form>

        </div>
    );
};

export default Btc;
