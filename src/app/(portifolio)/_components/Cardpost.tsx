

import { Card,CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DialogTitle } from "@radix-ui/react-dialog";
import { CalendarDays,  } from "lucide-react";
import Image from "next/image";


import { Editor_post } from "../actions_post/Editor_post";
import {  ArvoreHuffmanContent, codigoC, initialContentBig } from "../actions_post/post_content";


export function CardPost() {
const projetos = [
  {
    image: "https://github.com/github.png",
    label: "Árvores de Huffman",
    description: "Entenda a estrutura e aplicação da árvore de Huffman para compressão de dados.",
    languages: ["#algoritmos", "#compressão", "#estrutura-de-dados"],
    days: "1 Semana atrás",
    content: ArvoreHuffmanContent,
  },

  {
    image: "https://github.com/github.png",
    label: "Big O - Complexidade de Algoritmos",
    description: "Introdução à notação Big O, com exemplos práticos para análise de algoritmos.",
    languages: ["#algoritmos", "#complexidade", "#teoria-da-computação"],
    days: "1 atrás",
    content: initialContentBig,
  },
   {
 image: "https://github.com/github.png",
  label: "Recursão e Repetição no Cálculo de Fatorial",
  description: "Análise explicativa sobre duas abordagens para o cálculo de fatorial: iterativa e recursiva.",
  languages: ["#algoritmos", "#lógica-de-programação", "#recursividade"],
  days: "1 atrás",
  content: codigoC,
   }
];
  

    return (
        <>
         {projetos.map((projeto) => (
     
           <Dialog key={projeto.label} >
            <DialogTrigger className="w-full hover:scale-95 transition-all duration-300 cursor-pointer hover:shadow-2xl shadow-zinc-400/10">
                 <Card className="w-full  shadow-xl  md:flex hidden   " key={projeto.label}>
              <CardHeader className="flex w-full items-start gap-7 ">
                       
                <Image src={projeto.image} alt="profile" 
                width={90} 
                height={100}
                className="rounded-full" />
                <div className="flex items-start justify-between w-full">
               <div>
                 <CardTitle className="text-3xl flex items-center gap-2">{projeto.label}</CardTitle>
                <CardDescription className="text-xl ">{projeto.description}</CardDescription>    
                <CardDescription className="flex text-xs items-center gap-2 ">{projeto.languages}</CardDescription>
               </div>
               <CardDescription className="flex text-xs items-center gap-2"><CalendarDays className="size-4" />{projeto.days}</CardDescription>
                </div>
            </CardHeader>
            </Card>
            </DialogTrigger>
<DialogContent className="md:max-w-7xl border-4 border-zinc-900 shadow-2xl shadow-zinc-400/30 bg-zinc-100 max-w-sm md:h-auto h-screen md:my-20 my-0 md:mx-auto mx-0 md:p-10 p-4 rounded-lg shadow-2xl">
  <DialogTitle className="text-3xl text-neutral-800 font-bold">{projeto.label}</DialogTitle>
  <DialogDescription className="text-lg text-neutral-900">{projeto.description}</DialogDescription>
  <ScrollArea className="h-96  w-full   mt-6 p-4">
    <div className="space-y-4 prose-lg prose prose-code: prose-neutral max-w-full">
     <Editor_post content={projeto.content ?? ""}/>
    </div>
  </ScrollArea>
</DialogContent>


           </Dialog>
        ))}
        </>
    );
}