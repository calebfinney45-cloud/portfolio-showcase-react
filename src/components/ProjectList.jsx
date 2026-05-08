import { useState } from "react";
import { Input } from "@/components/ui/input";
import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects, onDeleteProject }) {
  const [searchTerm, setSearchTerm] = useState("");

  const query = searchTerm.toLowerCase();
  const filteredProjects = projects.filter((project) => {
    return (
      project.title.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query)
    );
  });

  return (
    <div className="space-y-6">
      <Input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={"max-w-sm border-2 border-black rounded-2xl"}
      />
      {/* 2. Your original Empty Container logic, now moved inside the return */}
      {projects.length === 0 ? (
        <div className="text-center border-2 py-2 border-dashed border-zinc-200 rounded-2xl">
          <p className="text-zinc-800 py-10 text-xl font-semibold">
            Your Portfolio is currently empty.
          </p>
        </div>
      ) : (
        /* 3. The Grid renders if there are projects */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDelete={() => onDeleteProject(project.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
