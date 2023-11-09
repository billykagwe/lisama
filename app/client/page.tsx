/** @format */

import React from "react";
import CreateClient from "./components/CreateForm";
import TableRow from "./components/TableRow";
import prisma from "../db";

export const dynamic = "force-dynamic";

async function page() {
  const clients = await prisma.client.findMany();
  return (
    <div className=' flex flex-col   items-center w-full'>
      <div className=' flex  flex-col justify-center w-full'>
        <div className=' h-screen flex flex-col '>
          <CreateClient />
          <div className='flex ml-4 mt-2'>
            <table className='max-w-3xl  w-full'>
              <thead>
                <tr className=' border-b border-gray-200 text-gray-500 text-sm'>
                  <th className='text-left '>Name</th>
                  <th className='text-left '>Country</th>
                  <th className='text-left '>Contract</th>
                  <th className='  w-40  text-left'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <TableRow key={client.id} client={client} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
