# dev-stats

[English](./README.md) | [한국어](./README.ko.md)

Minimal counter board for tracking dev tools/languages used across projects — add an item, bump its count up or down.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/DB-PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

- Add an item by name
- Increment / decrement its count
- Delete an item

## Tech Stack

- **Next.js** — App Router, Server Actions (no separate REST API)
- **TypeScript**
- **Tailwind CSS**
- **Prisma** — with `@prisma/adapter-pg` driver adapter
- **PostgreSQL**
- **Docker Compose** — app + db

## Getting Started

### Prerequisites

- Docker Desktop

### Run

```bash
git clone https://github.com/dev1f965x/dev-stats.git
cd dev-stats
docker compose up --build
```

App runs on `http://localhost:3000`, Postgres on `5432`.

### Apply the database schema

```bash
docker compose exec app npx prisma migrate dev
```

## Data Model

```prisma
model Item {
  id        String   @id @default(cuid())
  name      String
  count     Int      @default(0)
  createdAt DateTime @default(now())
}
```

## Roadmap

This is a walking skeleton — the plan is to keep evolving it rather than treat it as finished:

- [ ] shadcn/ui components
- [ ] Categories/grouping
- [ ] Electron desktop build

## License

[MIT](./LICENSE)
