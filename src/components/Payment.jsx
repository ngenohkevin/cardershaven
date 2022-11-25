import React, {useState} from 'react';
// import Btc from "./Btc";
import Modal from "./Modal";



const Payment = () => {
    const [showModal, setShowModal] = useState(false)

    const handleOnClose = () => setShowModal(false)

    return (
        <div className="flex flex-wrap justify-center
    bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-50 rounded-xl w-full" >
            <div className="p-10 text-center">
                <h1 className="text-green-600 text-3xl font-bold mt-10">
                    Cannot Access this page due to Insufficient balance! Add $60 to proceed
                </h1>
                <button
                        onClick={() =>setShowModal(true)}
                >
                    <input
                        type="image"
                        className="submit"
                        name="submit"
                        src="https://cdn.iconscout.com/icon/free/png-512/bitcoin-390-920575.png"
                        style={{ width: 146 }}
                        alt="Pay with BTCPay Server, a Self-Hosted Bitcoin Payment Processor"
                    />
                </button>
            </div>
            <Modal onClose={handleOnClose} visible={showModal}/>
        </div>
    );


};

export default Payment;
