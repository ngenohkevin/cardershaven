import React from 'react';
import {Button, Payment} from "./index";
import {MdOutlineCancel} from "react-icons/md";

const UserProfile = () => {
    return (
        <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
            <div className="flex justify-between items-center">
                <div className="flex gap-3">
                    <p className="font-semibold text-lg dark:text-gray-200">Restricted</p>
                </div>
                <Button icon={<MdOutlineCancel />} color="rgb(153, 171, 180)" bgHoverColor="light-gray" size="2xl" borderRadius="50%" />
            </div>
            <div className="mt-5 ">
                <Payment/>
            </div>
        </div>
    );
};

export default UserProfile;