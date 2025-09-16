"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUser } from "lucide-react";
import Image from "next/image";


export function CardProfile() {
    function handledDownloadCv() {
        const cvUrl = "/cv.png";


        const link = document.createElement("a");
        link.href = cvUrl;
        link.download = "curriculo.png";
        link.click();
        
        
    }
    return (
        <Card className="md:w-96 w-80  md:mt-0 mt-4 shadow-xl  ">
            <CardHeader className="flex flex-col items-center">
             
                <Image src="https://github.com/odiegodev1.png" alt="profile" 
                width={100} 
                height={100}
                quality={100}
                className="rounded-full" />
               
            </CardHeader>
            <CardContent className="text-center space-y-1">
                 <CardTitle className="text-2xl">Diego Santos</CardTitle>
                <CardDescription>Front end developer</CardDescription>
                <Button onClick={handledDownloadCv} className="w-full cursor-pointer mt-2"><FileUser />Baixar cv</Button>
            </CardContent>
        </Card>
    );
}