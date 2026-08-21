import {
  SiClaudecode,
  SiConventionalcommits,
  SiDocker,
  SiGit,
  SiGithub,
  SiGo,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiShadcnui,
  SiSqlite,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";

const iconMap: Record<string, typeof SiGo> = {
  go: SiGo,
  sqlite: SiSqlite,
  "next.js": SiNextdotjs,
  shadcn: SiShadcnui,
  "tailwind css": SiTailwindcss,
  prisma: SiPrisma,
  postgresql: SiPostgresql,
  docker: SiDocker,
  "docker compose": SiDocker,
  git: SiGit,
  github: SiGithub,
  "conventional commits": SiConventionalcommits,
  "claude code": SiClaudecode,
};

export function getTechIcon(name: string): typeof SiGo | undefined {
  return iconMap[name.trim().toLowerCase()];
}

export function TechIcon({ name }: { name: string }) {
  const Icon = getTechIcon(name);

  if (Icon) {
    return <Icon size={18} className="shrink-0 text-muted-foreground" />;
  }

  return (
    <div className="flex size-[18px] shrink-0 items-center justify-center rounded-full bg-muted text-[10px] font-medium text-muted-foreground">
      {name.trim().charAt(0).toUpperCase()}
    </div>
  );
}
