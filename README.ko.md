# dev-stats

[English](./README.md) | [한국어](./README.ko.md)

프로젝트마다 사용한 개발 도구/언어를 기록하는 카운터 보드 — 항목 추가하고 숫자 증감.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/DB-PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

## 기능

- 이름으로 항목 추가
- 카운트 증감
- 항목 삭제

## 기술 스택

- **Next.js** — App Router, Server Actions (별도 REST API 없음)
- **TypeScript**
- **Tailwind CSS**
- **Prisma** — `@prisma/adapter-pg` 드라이버 어댑터 사용
- **PostgreSQL**
- **Docker Compose** — app + db

## 시작하기

### 필요한 것

- Docker Desktop

### 실행

```bash
git clone https://github.com/dev1f965x/dev-stats.git
cd dev-stats
docker compose up --build
```

앱은 `http://localhost:3000`, Postgres는 `5432`에서 실행됩니다.

### DB 스키마 적용

```bash
docker compose exec app npx prisma migrate dev
```

## 데이터 모델

```prisma
model Item {
  id        String   @id @default(cuid())
  name      String
  count     Int      @default(0)
  createdAt DateTime @default(now())
}
```

## 로드맵

Walking skeleton 단계 — 완성작이 아니라 계속 진화시킬 예정:

- [ ] shadcn/ui 컴포넌트
- [ ] 카테고리/그룹핑
- [ ] Electron 데스크톱 빌드

## 라이선스

[MIT](./LICENSE)
