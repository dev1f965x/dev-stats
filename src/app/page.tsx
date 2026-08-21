import { Minus, Plus, Trash2 } from "lucide-react";

import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TechIcon } from "@/lib/tech-icons";
import { addItem, incrementItem, decrementItem, deleteItem } from "./actions";

export const dynamic = "force-dynamic";

export default async function Home() {
  const items = await prisma.item.findMany({ orderBy: { createdAt: "asc" } });

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Dev Stats</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          프로젝트에서 사용한 언어·도구를 추가하고 횟수를 기록하세요.
        </p>
      </div>

      <Card className="mb-8">
        <CardContent>
          <form action={addItem} className="flex gap-2">
            <Input type="text" name="name" placeholder="예: Python, Docker, ..." required />
            <Button type="submit">
              <Plus />
              추가
            </Button>
          </form>
        </CardContent>
      </Card>

      {items.length === 0 ? (
        <div className="rounded-xl border border-dashed py-16 text-center text-sm text-muted-foreground">
          아직 추가된 항목이 없습니다.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <TechIcon name={item.name} />
                    <p className="truncate text-sm font-medium">{item.name}</p>
                  </div>
                  <p className="text-2xl font-semibold tabular-nums">{item.count}</p>
                </div>

                <div className="flex items-center gap-1">
                  <form action={decrementItem.bind(null, item.id)}>
                    <Button type="submit" variant="outline" size="icon-sm">
                      <Minus />
                    </Button>
                  </form>

                  <form action={incrementItem.bind(null, item.id)}>
                    <Button type="submit" variant="outline" size="icon-sm">
                      <Plus />
                    </Button>
                  </form>

                  <form action={deleteItem.bind(null, item.id)}>
                    <Button
                      type="submit"
                      variant="ghost"
                      size="icon-sm"
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
