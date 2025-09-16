import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export function CardExperiencias() {
    const experiencias = [
    {label: "Udemy",ano: "2025",  description: "Desenvolvimento de aplicações web em Next.js ",},
    {label: "ApoiaDev", ano: "2025",  description: "Integração com Stripe para permitir doações online",},
    {label: "Ornafinace", ano: "2024",  description: "Desenvolvimento de app de finanças pessoais",},

]    ;
    return (
        <Card className="md:w-96 w-90  shadow-xl  ">
            <CardHeader className="flex flex-col ">
            <CardTitle className="text-2xl">Experiencias</CardTitle>   
               
            </CardHeader>
            <CardContent className="text-center space-y-1">
             <div className="grid grid-cols-1 gap-3">
                {experiencias.map((experiencia) => (
                    <article key={experiencia.label} className="flex items-center gap-2">
                        
                       <div className="flex flex-col items-start ">
                        <li className="text-lg font-bold text-zinc-400">{experiencia.label} - {experiencia.ano}</li>
                        
                        <p className="text-sm text-zinc-500">{experiencia.description}</p>
                       </div>
                        
                    </article>
                ))}
             </div>
            </CardContent>
        </Card>
    );
}