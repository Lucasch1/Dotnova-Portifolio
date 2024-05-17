"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Next Enterprise Website",
        description: "Enterpreise website for a company in the tech industry",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/DotNova",
        previewUrl: "https://www.dotnova.io/",
    },
    {
        id: 2,
        title: "Hardhat Testing Template",
        description: "A template for testing smart contracts with Hardhat",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/DotNova",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "E-commerce Application",
        description: "E-commerce application with React and Firebase",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/DotNova",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Habits Improvement Application",
        description: "Mobile application for improving habits and productivity",
        image: "/images/projects/4.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/DotNova",
        previewUrl: "https://www.goalsbrasil.com/",
    },
    {
        id: 5,
        title: "React Firebase Template",
        description: "Authentication and CRUD operations",
        image: "/images/projects/5.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/DotNova",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Full-stack Roadmap",
        description: "Roadmap for becoming a full-stack developer",
        image: "/images/projects/6.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/DotNova",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Our Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
