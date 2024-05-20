"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaBars } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!isOpen) {
                const currentScrollPos = window.pageYOffset;
                const scrollingUp = currentScrollPos < prevScrollPos;

                setVisible(scrollingUp || currentScrollPos < 10);
                setPrevScrollPos(currentScrollPos);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, isOpen]);

    return (
        <motion.nav
            className="fixed mx-auto border-b border-[#33353F] top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100 rounded-b-2xl"
            initial={false}
            animate={{ y: visible ? 0 : "-100%" }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={"/"} className="">
                    <Image
                        src="/images/logoEstendida.png"
                        className=""
                        width={180}
                        height={50}
                        alt="Image"
                    />
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <FaBars className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <HiXMark className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </motion.nav>
    );
};

export default Navbar;
