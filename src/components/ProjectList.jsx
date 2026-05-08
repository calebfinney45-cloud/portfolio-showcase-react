import { useState } from "react";
import { Input } from "@/components/ui/input";
import ProjectCard from "./ProjectCard";

// Receives project array and filters based on user search - sort of like an engine for the
export default function ProjectList({ projects, onDeleteProject }) {
  const [searchTerm, setSearchTerm] = useState("");
  
  // DERIVED STATE: We don't need a seperate state for filtered results.
  // We calculate 'on the fly' during every render based on search term.
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
      
      {/* Conditional Rendering: We first check if the list is empty, displaying a state instead of a blank screen. */}
      {projects.length === 0 ? (
        <div className="text-center border-2 py-2 border-dashed border-zinc-200 rounded-2xl">
          <p className="text-zinc-800 py-10 text-xl font-semibold">
            Your Portfolio is currently empty.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map Function: We iterate through 'filteredProjects' and for each object, return a ProjectCard component */}
          {filteredProjects.map((project) => (
            <ProjectCard 
              /* Crucial for React performance as it tells React which list item is which,
               so it does not have to re-render the whole grid if one card is changed */
              key={project.id} 
              project={project} 
               /* Passing Functions: We pass delete logic down to the card,
                so the "Trash" button knows which ID to target */
              onDelete={() => onDeleteProject(project.id)} 
            />
          ))}
        </div>
      )}
    </div>
  );
}
