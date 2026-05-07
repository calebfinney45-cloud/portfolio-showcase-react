import { useState } from "react";
import { Input } from "@/components/ui/input";
import ProjectCard from "./ProjectCard";

export default function ProjectList({projects}) {
    const [searchTerm, setSearchTerm] = useState("");

    if(projects.length === 0) {
        return(
            <div className="text-center border-2 py-2 border-dashed border-zinc-200 rounded-2xl">
                <p className="text-zinc-800">Your Portfolio is currently empty.</p>
            </div>
        );
    }
    
    const query = searchTerm.toLowerCase();
    const filteredProjects = projects.filter((project) => {
        return(
            project.name.toLowerCase().includes(query) ||
            project.title.toLowerCase().includes(query)
        );
    });

    return(
        <div>
            <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={"max-w-sm"}
            />
            <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}