import { NavLink } from "react-router-dom";
import React from "react";

const NavItems = [
    { path: "/smartfonlar", link: "Smartfonlar" },
    { path: "/noutbuklar", link: "Noutbuklar" },
    { path: "/suniy_intellekt", link: "Sun'iy intellekt " },
    { path: "/p_computer", link: "P.Computer" },
    { path: "/games", link: "O'yinlar" },
    // { path: "/smartfonlar_2", link: "Smartfonlar_2" },
    // { path: "/smartfonlar_3", link: "Smartfonlar_3" },
    // { path: "/smartfonlar_4", link: "Smartfonlar_4" },
    // { path: "/smartfonlar_5", link: "Smartfonlar_5" },




];

const BlogsCategorys = () => {
    return (
        <div className="bg-slate-700 h-20 flex items-center justify-center ">
            {/* navItems for lg devices */}
            <ul className="md:flex gap-24 justify-center text-lg  ">
                {NavItems.map(({ path, link }) => (
                    <li
                        key={path}
                        className="text-orange-400 hover:text-orange-500"
                    >
                        <NavLink
                            className={({ isActive, isPending }) =>
                                isActive ? "active" : isPending ? "pending" : ""
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
