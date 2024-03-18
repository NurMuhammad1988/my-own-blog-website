import React from "react";

const Modal = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed top-0 left-0  w-full h-full flex items-center justify-center ${
                isOpen ? "" : "hidden"
            }`}
        >
            <div className="modal-container">
                <div className="bg-slate-700 text-center  h-96 lg:w-[500px] rounded shadow-md opacity-85 ">
                    {/* modal content */}
                    <h2 className="text-xl font-semibold p-2 mb- mt-6 uppercase">
                        Please Login Here!
                    </h2>
                    <form className="px-4 ">
                        {/* email */}
                        <div className="mb-4">
                            <input
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6b7280] outline-none focus:border-[#6a64f1] focus:shadow-md"
                                type="email"
                                // name="email"
                                // id="email"
                                placeholder="example@gmail.com"
                            />
                        </div>

                        <div className="mb-5">
                            <input
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6b7280] outline-none focus:border-[#6a64f1] focus:shadow-md"
                                type="current-password"
                                // name="password"
                                // id="password"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div>
                            <button className="hover:shadow-md rounded-md bg-slate-500 hover:bg-orange-600 py-3 w-40 px-8 text-base font-semibold text-white outline-none">
                                Login
                            </button>
                            {/* modal close btn */}
                            <button
                                onClick={onClose}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 mx-4 font-semibold py-3 px-8 w-40 rounded inline-flex items-center mt-5"
                            >
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
