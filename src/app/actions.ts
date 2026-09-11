"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";

export async function addItem(formData: FormData) {
  const name = formData.get("name");
  if (typeof name !== "string" || name.trim() === "") return;

  await prisma.item.create({ data: { name: name.trim() } });
  revalidatePath("/");
}

export async function incrementItem(id: string) {
  await prisma.item.update({
    where: { id },
    data: { count: { increment: 1 } },
  });
  revalidatePath("/");
}

export async function decrementItem(id: string) {
  // Filtering on count keeps a double click from going below zero.
  await prisma.item.updateMany({
    where: { id, count: { gt: 0 } },
    data: { count: { decrement: 1 } },
  });
  revalidatePath("/");
}

export async function deleteItem(id: string) {
  await prisma.item.delete({ where: { id } });
  revalidatePath("/");
}
