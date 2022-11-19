import React, {useState} from 'react';
import qr from '../data/btc_address.png'
import Btc from "./Btc";

const Modal = ({visible, onClose}) => {

    const handleOnClose = () => {
        onClose()
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    if(!visible) return null
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[600px] flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={handleOnClose}>X</button>
                <div className="bg-gray-300 bg-gradient-to-r from-blue-200 p-2 rounded">
                    <div className="py-6 px-6 lg:px-8 text-left">
                        <h3 className="mb-4 text-xl text-gray-900 text-center font-bold">
                            After Payment a link will be sent to your email to login and Access full features of our
                            forum
                        </h3>
                        <hr/>
                        <div className="flex justify-center items-center text-sky-700 italic">
                            <ul className="list-disc">
                                <li>The higher you pay the more services and offers you'll access</li>
                                <li>50% bonus on $1000+ deposit</li>
                                <li>Access to CC checkers for Free! on $200+ deposit</li>
                                <li>Your balance will be added to your account after 3 confirmations</li>
                                <li>You can withdraw your funds any time you want</li>
                                <li>Access to all bank logs</li>
                                <li>Full Support from our staff and many more!</li>
                            </ul>
                        </div>
                        <br/>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-200 border border-gray-300 text-gray-800 text-sm rounded-lg
                                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div className="text-center">
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none
                font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"

                                >
                                    Continue to payment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
