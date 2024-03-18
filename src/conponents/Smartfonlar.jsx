import React from "react";
import { FaRegComment } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Smartfonlar = () => {
    return (
        // mb-[1100px]
        <div className="text-center text-black bg-slate-200  p-2">
            <section className="h-screen w-screen  p-8">
                <div className="grid justify-between  md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
                    {/* 111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111*/}

                    <NavLink to="/sm_1">
                        <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden hover:opacity-95">
                            <img
                                className="h-56 lg:h-60 w-full object-cover "
                                title="Womans..."
                                src="https://images.unsplash.com/photo-1523289217630-0dd16184af8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                alt=""
                            />
                            <h3 className="font-semibold  text-xl leading-6 text-gray-700 my-2 cursor-pointer hover:text-blue-600 ">
                                International Women's Day 2022: Date, history,
                                significance, theme this year
                            </h3>

                            <div className="p-3">
                                <p className=" text-gray-900 font-semibold">
                                    Happy Women's Day 2022: Read on to know all
                                    about the history and significance Lorem
                                    ipsum dolor sit amet consectetur adipisicing
                                    elit. Voluptatem, dolor....
                                </p>

                                <div className="flex justify-between mx-8">
                                    <span className="text-sm text-gray-500 font-semibold">
                                        Mart 18, 2024
                                    </span>

                                    <FaRegComment className="text-gray-500 w-10 h-6 cursor-pointer hover:text-blue-600" />
                                </div>
                            </div>
                        </div>
                    </NavLink>

                    {/* 111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111*/}
                </div>
            </section>
        </div>
    );
};

export default Smartfonlar;
