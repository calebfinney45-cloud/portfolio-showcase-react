import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";

export default function ProjectCard({ project, onDelete }) {
  return (
    <div className="py-8">
      <Card className={"bg-white border-zinc-200"}>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>{project.title}</CardTitle>
            <span className="text-[10px] font-bold uppercase bg-zinc-100 px-2 py rounded text-zinc-600">
              {project.category}
            </span>
            <Button 
                variant="ghost"
                size="icon"
                onClick={onDelete}
            >
                <Trash2 size={"16"} />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-zinc-500">{project.description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
