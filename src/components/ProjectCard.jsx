import { Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";

export default function ProjectCard({project}) {
    return(
        <div className="py-8">
            <Card className={"bg-white border-zinc-200"} >
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle>
                            {project.name}
                        </CardTitle>
                        <span className="text-[10px] font-bold uppercase bg-zinc-100 px-2 py rounded text-zinc-600">
                            {project.title}
                        </span>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-zinc-500">{project.description}</p>
                </CardContent>
            </Card>
        </div>
    );
}