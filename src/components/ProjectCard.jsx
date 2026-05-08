import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Trash2, CircleChevronUp, CircleChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

//Handles display for a single project card
export default function ProjectCard({ project, onDelete }) {
  //Local state to toggle description
  const [isOpen, setIsopen] = useState(false);

  return (
    <div className="py-8">
      <Card className={"bg-white border-zinc-200 overflow-hidden"}>
        <div className="w-full h-48 bg-zinc-100">
          {/*Image logic: Uses project URL/placeholder. Includes onError to catch broken links which may mess up UI*/}
          <img
            src={
              project.image ||
              "https://placehold.co/600x400?text=No+Image+Available"
            }
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://placehold.co/600x400?text=Invalid+URL";
            }}
          />
        </div>

        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="font-bold text-xl">{project.title}</CardTitle>

            <span className="text-[10px] font-bold uppercase bg-zinc-100 px-2 py rounded text-zinc-600">
              {project.category}
            </span>

            <div className="flex gap-1">
              {/* Toggle logic: Clicking the Chevron icon flips 'isOpen'. Description only renders if isOpen = true */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsopen(!isOpen)}
              >
                {isOpen ? (
                  <CircleChevronUp size={16} />
                ) : (
                  <CircleChevronDown size={16} />
                )}
              </Button>
            </div>

            <Button variant="ghost" size="icon" onClick={onDelete}>
              <Trash2 size={"16"} />
            </Button>
          </div>
        </CardHeader>

        {isOpen && (
          <CardContent>
            <p className="text-sm text-zinc-500">{project.description}</p>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
