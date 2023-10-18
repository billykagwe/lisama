/** @format */

import React from "react";
import CreateClient from "./components/CreateForm";
import EditClient from "./components/EditForm";
import TableRow from "./components/TableRow";
import prisma from "../db";

async function page() {
  const clients = await prisma.client.findMany();
  return (
    <div className=' flex flex-col   items-center'>
      <div className=' flex  flex-col justify-center max-w-4xl  w-full'>
        <div className='flex items-centers p-2 mt-8 justify-between'>
          <p>Logo</p>
          <div className='flex gap-2'>
            <p>Home</p>
            <p>Dashboard</p>
            <p>About</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className=' h-screen flex flex-col '>
          <CreateClient />
          <div className='flex justify-center mt-8'>
            <table className='max-w-3xl  w-full'>
              <thead>
                <tr className=' border-b border-gray-400'>
                  <th className='text-left p-1'>Name</th>
                  <th className='text-left p-1'>Country</th>
                  <th className='text-left p-1'>Contract</th>
                  <th className=' p-1 w-40  text-center'>ACTIONS</th>
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
