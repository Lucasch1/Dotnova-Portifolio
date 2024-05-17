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
                <Image src="/images/about-image.png" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-base lg:text-lg">
                        We are a dynamic software development company with a
                        passion for crafting innovative solutions across all
                        digital landscapes. Our team of skilled professionals
                        possesses expertise in a wide range of technologies,
                        allowing us to deliver exceptional results in web
                        development, mobile app creation, blockchain
                        integration, and traditional software engineering. From
                        front-end to back-end, we harness the power of
                        JavaScript, React, Angular, Vue.js, Node.js, Python,
                        Java, C++, and more to build interactive and responsive
                        experiences. Our mobile developers are adept in both
                        native (Swift, Kotlin) and cross-platform (React Native,
                        Flutter) frameworks, ensuring your apps reach the widest
                        audience. We are pioneers in the blockchain space,
                        leveraging our knowledge of Ethereum, Solidity,
                        Hyperledger Fabric, and other cutting-edge technologies
                        to create secure and decentralized applications. Our
                        commitment to continuous learning and collaboration
                        drives us to stay ahead of the curve, embracing emerging
                        technologies and industry best practices. We take pride
                        in our ability to work seamlessly with clients,
                        understanding their unique needs and delivering tailored
                        solutions that exceed expectations. If you are looking
                        for a trusted partner to bring your software vision to
                        life, look no further. We are excited to work with you
                        to create amazing applications that push the boundaries
                        of what&apos;s possible.
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
