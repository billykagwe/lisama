/** @format */

"use server";

import prisma from "@/app/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";
export const createRawmaterial = async (prevState: any, formData: FormData) => {
  const priceInput = formData.get("price")
  const schema = z.object({
    price: z.number(),
    name: z.string().nonempty(),
  });

  try {
    const data = schema.parse({
      price: priceInput ? +priceInput : priceInput,
      name: formData.get("name"),
    });
    // db action
    await prisma.rawmaterial.create({ data });
    revalidatePath("/rawmaterial");

    return { message: { success: `Added rawmaterial ${data.name}` } };
  } catch (e) {
    return { message: { error: "Failed to create rawmaterial" } };
  }
};

export const editRawmaterial = async ({formData,id }:{formData: FormData,id:number}) => {
  const priceInput = formData.get("price")
  const schema = z.object({
    price: z.number(),
    name: z.string().nonempty(),
  });

  try {
     const data = schema.parse({
      price: priceInput ? +priceInput : priceInput,
      name: formData.get("name"),
    });
     // db action
    await prisma.rawmaterial.update({where: {id},data})
    revalidatePath("/rawmaterial");
    return { message: { success: `Updated rawmaterial ${data.name}` } };
  } catch (e) {
    return { message: { error: "Failed to update rawmaterial" } };
  }
};

export const deleteRawmaterial = async (id:number) => {
  try {
    await prisma.rawmaterial.delete({ where: { id } })
     revalidatePath("/rawmaterial");
  } catch (error) {
    return { message: { error: "Failed to delete rawmaterial" } };
  }
}