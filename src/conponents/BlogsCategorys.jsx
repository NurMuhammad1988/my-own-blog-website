import { NavLink } from "react-router-dom";
import React from "react";


const NavItems = [
    { path: "/smartfonlar", link: "Smartfonlar" },
    { path: "/noutbuklar", link: "Noutbuklar" },
    { path: "/suniy_intellekt", link: "Sun'iy intellekt " },
    { path: "/p_computer", link: "P.Computer" },
    { path: "/games", link: "O'yinlar" },
];



const BlogsCategorys = () => {
    return (
        <div>
            {/* <div className="bg-black flex justify-center gap-6 md:gap-x-44 flex-wrap mx-auto  py-5  uppercase ">
                <h2 className="text-white font-medium cursor-pointer hover:text-orange-500">Smartfonlar </h2>
                <h2 className="text-white font-medium cursor-pointer hover:text-orange-500">Noutboklar</h2>
                <h2 className="text-white font-medium cursor-pointer hover:text-orange-500">Suniy Intelect</h2>
                <h2 className="text-white font-medium cursor-pointer hover:text-orange-500">P.  Computer</h2>
                <h2 className="text-white font-medium cursor-pointer hover:text-orange-500">O'yinlar</h2>
               
            </div> */}

            <hr className="h-px  bg-gray-200 border-1  dark:bg-gray-700" />


                {/* navItems for lg devices */}
                <ul className="md:flex gap-24 justify-center text-lg hidden">
                    {NavItems.map(({ path, link }) => (
                        <li key={path} className="text-base hover:text-orange-500">
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                        ? "pending"
                                        : ""
                                }
                                to={path}
                            >
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>



                {/* menu items only for mobile */}
            {/* <div>
                <ul
                    className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
                        isMenuOpen
                            ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
                            : "hidden"
                    }`}
                >
                
                    {NavItems.map(({ path, link }) => (
                        <li key={path} className="text-black">
                            <NavLink onClick={toggleMenu} to={path}>
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div> */}



        </div>

    );
};

export default BlogsCategorys;
