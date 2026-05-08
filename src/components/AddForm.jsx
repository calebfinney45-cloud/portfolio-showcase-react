import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const initialState = {
    title: "",
    category: "",
    description: ""
};

export default function AddForm({onAddProject}) {
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData((prevData) => ({ ...prevData, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProject(formData)
        setFormData(initialState);
    }

    return(
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-6 ">Add a New Project</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="grid gap-1.5">
                    <label 
                    htmlFor="project-title" className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 ml-1">
                        Title
                    </label>
                    <Input
                      id="project-title"
                      name="title"
                      placeholder="Title"
                      value={formData.title}
                      onChange={handleChange}
                      className={"border-zinc-200 focus-visible: ring-zinc-900 focus-visible: ring-2"}
                      required
                    />
                </div>
                <div className="grid gap-1.5">
                    <label 
                    htmlFor="project-category" className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 ml-1">
                        Category
                    </label>
                    <Input
                      id="project-category"
                      name="category"
                      placeholder="Category"
                      value={formData.category}
                      onChange={handleChange}
                      className={"border-zinc-200 focus-visible: ring-zinc-900 focus-visible: ring-2"}
                      required
                    />
                </div>
                <div className="grid gap-1.5">
                    <label htmlFor="project-description" 
                    className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 ml-1">
                        Description
                    </label>
                    <Textarea
                      id="project-description"
                      name="description"
                      placeholder=""
                      value={formData.description}
                      onChange={handleChange}
                      className={"min-h-25 resize-none border-zinc-200 focus-visible:ring-zinc-900"}
                    />
                </div>
                <Button 
                  type="submit"
                  className={"bg-zinc-900 hover:bg-zinc-800 text-white"}
                >
                  Add Project
                </Button>
            </form>
        </div>
    );
}