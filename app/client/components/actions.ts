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

export const editClient = async (prevState: any, formData: FormData) => {
  console.log({ formData: JSON.stringify(formData) });
  const schema = z.object({
    contract: z.string().nonempty(),
    country: z.string().nonempty(),
    name: z.string().nonempty(),
    id: z.number(),
  });

  try {
    const data = schema.parse({
      contract: formData.get("contract"),
      country: formData.get("country"),
      name: formData.get("name"),
      id: formData.get("id"),
    });
    // db action
    await prisma.client.update({ data, where: { id: data.id } });
    revalidatePath("/client");

    return { message: { success: `Added client ${data.name}` } };
  } catch (e) {
    return { message: { error: "Failed to create client" } };
  }
};
