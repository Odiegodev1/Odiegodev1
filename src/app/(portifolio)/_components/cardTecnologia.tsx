import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card";



export function CardTecnologias() {
    const tecnologias = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind",
        "Prisma",
        "GitHub",
        "Figma",
    ];
    return (
        <Card className="md:w-96 w-90  shadow-xl  md:flex hidden  ">
            <CardHeader>
                <CardTitle className="text-2xl">Tecnologias</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 gap-3">
                    {tecnologias.map((tecnologia) => (
                        
                        <article key={tecnologia} className="flex items-center gap-2">
                            <div className="p-4 rounded-md py-2 bg-zinc-800">{tecnologia}</div>
                        </article>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}