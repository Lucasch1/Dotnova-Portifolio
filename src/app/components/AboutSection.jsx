"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Next.js</li>
                <li>Solidity</li>
                <li>PostgreSQL</li>
                <li>Tailwind</li>
                <li>JavaScript</li>
                <li>Node.js</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>
                    Ethereum and Solidity: The complete Developer’s Guide, Udemy
                </li>
                <li>
                    JavaScript and TypeScript Course from Basic to Advanced,
                    Udemy
                </li>
                <li>Federal University of ABC, São Paulo</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>AWS Cloud Practitioner</li>
                <li>Google Professional Cloud Developer</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
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
                        We are a software development company with expertise in
                        web development, mobile app creation, blockchain
                        integration, and traditional software engineering. We
                        use a wide range of technologies to build interactive
                        and responsive experiences. Our mobile developers are
                        skilled in both native and cross-platform frameworks. We
                        are pioneers in the blockchain space, leveraging our
                        knowledge to create secure and decentralized
                        applications. We are committed to continuous learning
                        and collaboration, working seamlessly with clients to
                        deliver tailored solutions that exceed expectations.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
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
