import { useState } from "react";
import ProjectList from "@/components/ProjectList";
import AddForm from "@/components/AddForm";


export default function App() {
  const [projects, setProjects] = useState([]);

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
          <div className="hidden md:block text-[10px] font-mono text-indigo-300 uppercase tracking-[0.2em]">
            Status: Ready
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
            &copy; 2026 Portfolio Dashboard
          </p>
          <div className="flex gap-6 text-[10px] font-bold uppercase">
            <span>React</span>
            <span>Tailwind</span>
            <span>WSL</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
