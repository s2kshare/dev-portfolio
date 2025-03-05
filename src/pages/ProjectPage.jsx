import React from "react";
import { FaPython, FaJs, FaDocker, FaReact, FaJava } from "react-icons/fa"; // Import necessary icons
import { DiMongodb, DiCss3, DiHtml5, DiJqueryLogo } from "react-icons/di"; // Additional icons for HTML, CSS, etc.

import projects from "../data/projects";

function ProjectPage() {
    // Calculate how many columns we should have based on the number of projects
    const projectCount = Object.keys(projects).length;
    let columns = "grid-cols-1"; // Default to 1 column

    if (projectCount === 2) {
        columns = "grid-cols-2"; // 2 projects = 2 columns
    } else if (projectCount === 3) {
        columns = "grid-cols-2 grid-rows-2"; // 3 projects = 2 columns, 2 rows
    } else if (projectCount === 4) {
        columns = "grid-cols-2 grid-rows-2"; // 4 projects = 2 columns, 2 rows
    } else if (projectCount === 5) {
        columns = "grid-cols-1 grid-rows-5"; // 5 projects = 1 column stacked vertically
    }

    // Map of language to icon
    const languageIcons = {
        Python: <FaPython />,
        JavaScript: <FaJs />,
        React: <FaReact />,
        JSX: <FaJs />,
        "C#": <FaJava />, // For C#
        Docker: <FaDocker />,
        HTML: <DiHtml5 />,
        CSS: <DiCss3 />,
        MIDI: <FaJs />, // You could use a custom icon for MIDI or choose another appropriate one
        MongoDB: <DiMongodb />,
        jQuery: <DiJqueryLogo />,
    };

    return (
        <div className="p-5">
            <h1 className="mb-6 text-3xl text-center">Recent Projects</h1>
            <hr className=" border-[--col-base-300] mt-4 mb-10 opacity-40" />
            <div className={`w-full grid gap-6 ${columns} h-full`}>
                {Object.entries(projects).map(([key, project]) => (
                    <div className="project-item w-full h-full" key={key}>
                        <img
                            src={project.image}
                            className="w-full h-auto rounded-t-xl"
                            alt={project.title}
                        />
                        <div
                            id={project.title}
                            className="bg-gray-300 px-6 py-6 rounded-b-xl bg-[--col-text-base] shadow-xl"
                        >
                            <h2>{project.title}</h2>
                            <p className="text-sm line-clamp-4 mt-3">
                                {project.desc}
                            </p>
                            <div className="flex gap-3 mt-3">
                                {project.source && (
                                    <a
                                        href={project.source}
                                        target="_blank"
                                        className="text-base"
                                        rel="noopener noreferrer"
                                    >
                                        Source
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="text-base"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>
                                )}
                            </div>
                            <div className="w-full text-base flex pointer-events-none items-center justify-start mt-3 gap-3">
                                {/* Render icons for each language */}
                                {project.languages.map((lang) => (
                                    <span
                                        key={lang}
                                        className="flex items-center"
                                    >
                                        {languageIcons[lang] && (
                                            <span className="mr-2">
                                                {languageIcons[lang]}
                                            </span>
                                        )}
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectPage;
