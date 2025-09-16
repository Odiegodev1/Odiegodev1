import { NextResponse } from "next/server";

export async function GET() {
  const username = "Odiegodev1"; // Seu usuário GitHub
  const token = process.env.GITHUB_TOKEN;

  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Erro ao buscar repositórios" },
      { status: res.status }
    );
  }

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  created_at: string;
  updated_at: string;
  html_url: string;
}

const data: GithubRepo[] = await res.json();

const repos = data.map((repo) => ({
  id: repo.id,
  name: repo.name,
  description: repo.description,
  language: repo.language,
  created_at: repo.created_at,
  updated_at: repo.updated_at,
  html_url: repo.html_url,
  image: `https://opengraph.githubassets.com/1/${username}/${repo.name}`,
}));


  // Retornando apenas os 2 primeiros
  return NextResponse.json(repos.slice(0, 2));
}
