/** @format */

"use server";

import prisma from "@/app/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";
export const createFreight = async (prevState: any, formData: FormData) => {
  const schema = z.object({
    weight: z.number(),
    price: z.number(),
    destination: z.string().nonempty(),
    name: z.string().nonempty(),
  });

  try {
    const weightInput = formData.get("weight")
    const priceInput = formData.get("price")
    const data = schema.parse({
      destination: formData.get("destination"),
      price: priceInput ? +priceInput : priceInput,
      weight: weightInput ? +weightInput : weightInput,
      name: formData.get("name"),
    });
    // db action
    await prisma.freight.create({ data });
    revalidatePath("/freight");

    return { message: { success: `Added freight ${data.name}` } };
  } catch (e) {
    return { message: { error: "Failed to create freight" } };
  }
};

export const editFreight = async ({formData,id }:{formData: FormData,id:number}) => {
  const schema = z.object({
    destination: z.string().nonempty(),
    price: z.number(),
    weight: z.number(),
    name: z.string().nonempty(),
  });

  try {
    const weightInput = formData.get("weight")
    const priceInput = formData.get("price")
    const data = schema.parse({
      destination: formData.get("destination"),
      price: priceInput ? +priceInput : priceInput,
      weight: weightInput ? +weightInput : weightInput,
      name: formData.get("name"),
    });
     // db action
    await prisma.freight.updateMany({where: { id}, data });
    revalidatePath("/freight");
    return { message: { success: `Added client ${data.name}` } };
  } catch (e) {
    return { message: { error: "Failed to update freight" } };
  }
};

export const deleteFreight = async (id:number) => {
  try {
    await prisma.freight.delete({ where: { id } })
     revalidatePath("/freight");
  } catch (error) {
    return { message: { error: "Failed to delete freight" } };
  }
}