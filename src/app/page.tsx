import { prisma } from "@/lib/prisma";
import { addItem, incrementItem, decrementItem, deleteItem } from "./actions";

export const dynamic = "force-dynamic";

export default async function Home() {
  const items = await prisma.item.findMany({ orderBy: { createdAt: "asc" } });

  return (
    <div className="flex flex-1 justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-2xl px-6 py-16">
        <h1 className="mb-8 text-2xl font-semibold text-black dark:text-zinc-50">
          Dev Stats
        </h1>

        <form action={addItem} className="mb-8 flex gap-2">
          <input
            type="text"
            name="name"
            placeholder="예: Python, Docker, ..."
            required
            className="flex-1 rounded border border-black/10 bg-white px-3 py-2 text-black dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-50"
          />
          <button
            type="submit"
            className="rounded bg-foreground px-4 py-2 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            추가
          </button>
        </form>

        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between rounded border border-black/10 bg-white px-4 py-3 dark:border-white/15 dark:bg-zinc-900"
            >
              <span className="text-black dark:text-zinc-50">{item.name}</span>

              <div className="flex items-center gap-3">
                <form action={decrementItem.bind(null, item.id)}>
                  <button
                    type="submit"
                    className="h-8 w-8 rounded border border-black/10 text-black transition-colors hover:bg-black/[.04] dark:border-white/15 dark:text-zinc-50 dark:hover:bg-white/[.08]"
                  >
                    −
                  </button>
                </form>

                <span className="w-8 text-center font-mono text-black dark:text-zinc-50">
                  {item.count}
                </span>

                <form action={incrementItem.bind(null, item.id)}>
                  <button
                    type="submit"
                    className="h-8 w-8 rounded border border-black/10 text-black transition-colors hover:bg-black/[.04] dark:border-white/15 dark:text-zinc-50 dark:hover:bg-white/[.08]"
                  >
                    +
                  </button>
                </form>

                <form action={deleteItem.bind(null, item.id)}>
                  <button
                    type="submit"
                    className="text-sm text-zinc-400 transition-colors hover:text-red-500"
                  >
                    삭제
                  </button>
                </form>
              </div>
            </li>
          ))}

          {items.length === 0 && (
            <li className="text-sm text-zinc-500 dark:text-zinc-400">
              아직 추가된 항목이 없습니다.
            </li>
          )}
        </ul>
      </main>
    </div>
  );
}
