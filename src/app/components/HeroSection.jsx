"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left md:justify-self-start"
                >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold h-32 md:h-fit">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                            Hello, We are{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Dotnova",
                                1500,
                                "Web Developers",
                                1500,
                                "Mobile Developers",
                                1500,
                                "Engineers",
                                1500,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Innovating the future with technology
                    </p>
                    <div className="place-self-center">
                        <Link
                            href="/#contact"
                            className="px-6 inline-block py-3 w-fit md:w-40 rounded-full mr-4 bg-gradient-to-br from-primary-400 to-secondary-400 hover:bg-slate-200 text-white text-center"
                        >
                            Hire Us
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-[#181818] w-[400px] h-[400px] lg:w-[400px] lg:h-[400px] relative md:mt-0 mt-6">
                        <Image
                            src="/images/hero-image.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
