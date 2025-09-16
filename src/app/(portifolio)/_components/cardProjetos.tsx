"use client";

import { Card,CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays,  Folder, } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  description: string;
  language: string;
  created_at: string;
  updated_at: string;
  html_url: string;
  image: string;
};

export function CardProjeto() {
      const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("/api/github/repos")
      .then((res) => res.json())
      .then(setRepos);
  }, []);
  
    return (
        <>
         {repos.map((repo) => (
            <Link className="w-full shadow-xl  md:flex hidden  "  href={repo.html_url} target="_blank" key={repo.id}>
            <Card className="w-full shadow-xl  md:flex hidden  " key={repo.id}>
                <CardHeader className="flex flex-col items-start ">
                    <CardTitle className="text-xl flex items-center gap-2"><Folder className="size-7" />{repo.name}</CardTitle>
                    <CardDescription>{repo.description}</CardDescription>
                   <div className="flex justify-between items-center w-full">
                    <CardDescription className="flex text-xs items-center gap-2"><CalendarDays className="size-4" />{repo.created_at}</CardDescription>
                     <CardDescription className="flex items-center justify-end gap-1"><span className="size-3 rounded-full bg-amber-300 border-2"/>{repo.language}</CardDescription>
                   </div>
                </CardHeader>
            </Card>
            </Link>
        ))}
        </>
    );
}