import { Card,  CardHeader, CardTitle } from "@/components/ui/card";



export function CardRecente() {
    return (
        <Card className="w-full shadow-xl  md:flex hidden  ">
            <CardHeader className="flex items-center">
                <CardTitle className="text-2xl">Recente Post</CardTitle>
                
            </CardHeader>
        </Card>
    );
}