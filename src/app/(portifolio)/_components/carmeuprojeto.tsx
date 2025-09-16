import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";



export function CardMeuProjeto() {
    return (
        <Card className="w-full shadow-xl md:flex hidden  ">
            <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-2xl">Meu Projeto</CardTitle>
                <CardDescription>Ver todos</CardDescription>
            </CardHeader>
        </Card>
    );
}