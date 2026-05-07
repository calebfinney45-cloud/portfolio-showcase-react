import { useState } from "react";
import ProjectCard from "@components/ProjectCard";

export default function ProjectList({projects}) {
    if(projects.length === 0) {
        return(
            <div className="text-center border-2 py-2 border-dashed border-zinc-200 rounded-2xl">
                <p className="text-zinc-800">Your Portfolio is currently empty.</p>
            </div>
        );
    }

    return(
        <div className="grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}