"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Web Development",
        id: "Web Development",
        content: (
            <ul className="list-disc pl-2">
                <li>Next.js</li>
                <li>React</li>
            </ul>
        ),
    },
    {
        title: "Mobile Development",
        id: "Mobile Development",
        content: (
            <ul className="list-disc pl-2">
                <li>Flutter (dart)</li>
                <li>Firebase</li>
            </ul>
        ),
    },
    {
        title: "Diferentials",
        id: "Diferentials",
        content: (
            <ul className="list-disc pl-2">
                <li>Blockchain</li>
                <li>Artificial Inteligence</li>
            </ul>
        ),
    },
    {
        title: "Software Development",
        id: "Software Development",
        content: (
            <ul className="list-disc pl-2">
                <li>Goalang</li>
                <li>RESTful APIs</li>
                <li>Python</li>
                <li>SQL</li>
                <li>Firebase</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("Web Development");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src="/images/about-image.jpg"
                    className="rounded-3xl"
                    width={500}
                    height={500}
                    alt="Image"
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Us
                    </h2>
                    <p className="text-base lg:text-lg">
                        In a dynamic world where technology evolves every day,
                        many companies find themselves in a dilemma: obsolete
                        and expensive software that can&apos;t keep up with the
                        pace of change. Dotnova was born to solve this problem.
                        We offer innovative and customized software solutions,
                        using the most advanced technologies on the market to
                        meet the needs of each client.
                    </p>
                    <div className="flex flex-row justify-start mt-8 overflow-x-auto">
                        <TabButton
                            selectTab={() => handleTabChange("Diferentials")}
                            active={tab === "Diferentials"}
                        >
                            {" "}
                            Diferentials{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() =>
                                handleTabChange("Software Development")
                            }
                            active={tab === "Software Development"}
                        >
                            {" "}
                            Software Development{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("Web Development")}
                            active={tab === "Web Development"}
                        >
                            {" "}
                            Web Development{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() =>
                                handleTabChange("Mobile Development")
                            }
                            active={tab === "Mobile Development"}
                        >
                            {" "}
                            Mobile Development{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
