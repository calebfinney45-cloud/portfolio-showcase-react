import { useState } from "react";
import ProjectList from "@/components/ProjectList";
import AddForm from "@/components/AddForm";

export default function App() {
  const [projects, setProjects] = useState([
    {
      id: "1",
      title: "ProjectVault Dashboard",
      category: "React",
      description:
        "A secure personal portfolio manager built with React, Tailwind CSS, and WSL. Features real-time search, dynamic filtering, and a toggleable interface for clean data visualization.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "2",
      title: "Weather Alert System",
      category: "JavaScript",
      description:
        "Integrated with the National Weather Service API to fetch live alerts. Uses DOM manipulation and the Fetch API to provide real-time updates based on geographic locations.",
      image:
        "https://images.stockcake.com/public/6/c/f/6cf08209-47d4-4b2e-9b70-14217c6f8d09_large/stormy-beach-view-stockcake.jpg",
    },
    {
      id: "3",
      title: "Expense Tracker",
      category: "Full-stack",
      description:
        "A financial management tool featuring search filtering, form handling, and state-driven item deletion. Built to practice complex React hooks and state management.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    },
  ]);

  function handleAddProject(newProject) {
    const finalProject = {
      ...newProject,
      id: crypto.randomUUID(),
    };
    setProjects((prevProjects) => [finalProject, ...prevProjects]);
  }

  function deleteProject(id) {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
  }

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans">
      <header className="bg-indigo-950 text-indigo-50 py-5 px-6 shadow-lg border-b border-indigo-900">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center shadow-inner">
              <span className="text-white font-black text-xs">PV</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">ProjectVault</h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-8 grow w-full space-y-16">
        {/* Form Section */}
        <section className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm">
          <AddForm onAddProject={handleAddProject} />
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
              Your Contributions
            </h2>
            <div className="h-px] bg-zinc-200 grow" />
          </div>
          <ProjectList projects={projects} onDeleteProject={deleteProject} />
        </section>
      </main>

      <footer className="bg-indigo-950 text-indigo-300/60 py-10 border-t border-indigo-900">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs uppercase tracking-widest">
            &copy; 2026 Portfolio Dashboard: *Caleb Finney*
          </p>
          <div className="flex gap-6 text-[10px] font-bold uppercase">
            <span>React</span>
            <span>Tailwind</span>
            <span>WSL</span>
            <span>Shadcnui</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
