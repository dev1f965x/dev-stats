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
import type { ReactElement } from "react";

const ICON_CLASS = "shrink-0 text-muted-foreground";

/** Logos keyed by lowercase item name. Rendered once, since every icon uses the same props. */
const ICONS: Record<string, ReactElement> = {
  go: <SiGo size={18} className={ICON_CLASS} />,
  sqlite: <SiSqlite size={18} className={ICON_CLASS} />,
  "next.js": <SiNextdotjs size={18} className={ICON_CLASS} />,
  shadcn: <SiShadcnui size={18} className={ICON_CLASS} />,
  "tailwind css": <SiTailwindcss size={18} className={ICON_CLASS} />,
  prisma: <SiPrisma size={18} className={ICON_CLASS} />,
  postgresql: <SiPostgresql size={18} className={ICON_CLASS} />,
  docker: <SiDocker size={18} className={ICON_CLASS} />,
  "docker compose": <SiDocker size={18} className={ICON_CLASS} />,
  git: <SiGit size={18} className={ICON_CLASS} />,
  github: <SiGithub size={18} className={ICON_CLASS} />,
  "conventional commits": <SiConventionalcommits size={18} className={ICON_CLASS} />,
  "claude code": <SiClaudecode size={18} className={ICON_CLASS} />,
};

/** The item's logo if the name is known, otherwise its first letter in a circle. */
export function TechIcon({ name }: { name: string }) {
  const trimmed = name.trim();

  return (
    ICONS[trimmed.toLowerCase()] ?? (
      <div className="flex size-[18px] shrink-0 items-center justify-center rounded-full bg-muted text-[10px] font-medium text-muted-foreground">
        {trimmed.charAt(0).toUpperCase()}
      </div>
    )
  );
}
