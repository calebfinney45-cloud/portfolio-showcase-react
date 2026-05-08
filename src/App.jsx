import { useState } from "react";
import ProjectList from "@/components/ProjectList";
import ProjectCard from "@/components/ProjectCard";

export default function App() {
    const [projects, setProjects] = useState([]);

    function handleAddProject(newProject) {
        const finalProject = {
            ...newProject,
            id: crypto.randomUUID()
        }
        setProjects((prevProjects) => [finalProject, ...prevProjects]);
        }

        return(
            <div>
                <header>

                </header>
                
            </div>
        );
    }




  
}