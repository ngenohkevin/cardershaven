import React, {useState} from 'react';
import BitcoinPayment from "./BitcoinPayment";
import Modal from "./Modal";



const Payment = () => {
    const [showModal, setShowModal] = useState(false)

    const handleOnClose = () => setShowModal(false)

    return (
        <div className="flex flex-wrap justify-center
    bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-50 rounded-xl w-full" >
            <div className="p-10 text-center">
                <h1 className="text-green-600 text-3xl font-bold mt-10">
                    Cannot Access this page due to Insufficient balance! Add Funds
                </h1>
                <button className="text-white focus:outline-none
                font-medium text-sm rounded-lg  text-center mr-3"
                        // onClick={() =>setShowModal(true)}
                >
                    <BitcoinPayment/>
                </button>
            </div>
            <Modal onClose={handleOnClose} visible={showModal}/>
        </div>
    );


};

export default Payment;
