/** @format */

"use server";

import prisma from "@/app/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";
export const createClient = async (prevState: any, formData: FormData) => {
  const schema = z.object({
    contract: z.string().nonempty(),
    country: z.string().nonempty(),
    name: z.string().nonempty(),
  });

  try {
    const data = schema.parse({
      contract: formData.get("contract"),
      country: formData.get("country"),
      name: formData.get("name"),
    });
    // db action
    await prisma.client.create({ data });
    revalidatePath("/client");

    return { message: { success: `Added client ${data.name}` } };
  } catch (e) {
    return { message: { error: "Failed to create client" } };
  }
};

export const editClient = async ({formData,id }:{formData: FormData,id:number}) => {
  const schema = z.object({
    contract: z.string().nonempty(),
    country: z.string().nonempty(),
    name: z.string().nonempty(),
  });

  try {
    const data = schema.parse({
      contract: formData.get("contract"),
      country: formData.get("country"),
      name: formData.get("name"),
    });
     // db action
    await prisma.client.updateMany({where: { id}, data });
    revalidatePath("/client");
    return { message: { success: `Added client ${data.name}` } };
  } catch (e) {
    return { message: { error: "Failed to update client" } };
  }
};

export const deleteClient = async (id:number) => {
  try {
    await prisma.client.delete({ where: { id } })
     revalidatePath("/client");
  } catch (error) {
    return { message: { error: "Failed to delete client" } };
  }
}