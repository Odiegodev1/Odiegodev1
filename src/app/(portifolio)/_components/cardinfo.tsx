import { Card, CardContent, } from "@/components/ui/card";
import {  Github, Globe, Linkedin, Locate, Mail } from "lucide-react";

import Link from "next/link";


export function Cardinfo() {
    return (
        <Card className="md:w-96 w-90  shadow-xl  ">
           
            <CardContent >
              <div className="flex flex-col gap-5" >

                <Link href="https://github.com/odiegodev1">
               <h1 className="flex gap-4 text-lg font-semibold items-center text-zinc-300">
                <Locate className="text-white size-7" /> Brasil</h1>
                </Link>

                <Link href={"https://linkedin.com/in/odiegodev1"}>
               <h1 className="flex gap-4 text-lg font-semibold items-center text-zinc-300">
                <Linkedin className="text-white size-7" /> odiegodev1</h1>
                </Link>

                <Link href="https://github.com/odiegodev1">
                 <h1 className="flex gap-4 text-lg font-semibold items-center text-zinc-300">
                <Github className="text-white size-7" /> odiegodev1</h1>
                </Link>
              
               <Link href="https:diegodev.dev">
               <h1 className="flex gap-4 text-lg font-semibold items-center text-zinc-300">
                <Globe className="text-white size-7" /> https:diegodev.dev</h1>
                </Link>

               <a href="mailto:odiegodev10@gmail.com">
  <h1 className="flex gap-4 text-lg font-semibold items-center text-zinc-300">
    <Mail className="text-white size-7" />
    odiegodev10@gmail.com
  </h1>
</a>
              
              </div>
            </CardContent>
        </Card>
    );
}