/** @format */

import React from "react";
import CostingForm from "./components/CostingForm";
import prisma from "./db";

export const dynamic = "force-dynamic";

async function page() {
  const clients = await prisma.client.findMany();
  const rawmaterials = await prisma.rawmaterial.findMany();
  const boxes = await prisma.box.findMany();
  const freights = await prisma.freight.findMany();
  return (
    <div>
      <CostingForm
        clients={clients}
        rawmaterials={rawmaterials}
        boxes={boxes}
        freights={freights}
      />
    </div>
  );
}

export default page;
