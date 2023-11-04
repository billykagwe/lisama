/** @format */

"use server";

import prisma from "@/app/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";
export const createBox = async (prevState: any, formData: FormData) => {
  const schema = z.object({
    price: z.number(),
    name: z.string().nonempty(),
  });

  try {
    const priceInput = formData.get("price") 
    const data = schema.parse({
      price: priceInput ? +priceInput : priceInput,
      name: formData.get("name"),
    });
    // db action
    await prisma.box.create({ data });
    revalidatePath("/box");

    return { message: { success: `Added box ${data.name}` } };
  } catch (e) {
    return { message: { error: "Failed to create box" } };
  }
};

export const editBox = async ({ formData, id }: { formData: FormData, id: number }) => {
  const priceInput = formData.get("price") 
  const schema = z.object({
    name: z.string().nonempty(),
    price: z.number(),
  });

  try {
    const data = schema.parse({
      name: formData.get("name"),
      price: priceInput ? +priceInput : priceInput
    });
     // db action
    await prisma.box.update({where: { id}, data });
    revalidatePath("/box");
    return { message: { success: `Edit box ${data.name} successful` } };
  } catch (e) {
    return { message: { error: "Failed to update box" } };
  }
};

export const deleteBox = async (id:number) => {
  try {
    await prisma.box.delete({ where: { id } })
     revalidatePath("/box");
  } catch (error) {
    return { message: { error: "Failed to delete box" } };
  }
}