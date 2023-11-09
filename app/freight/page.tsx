/** @format */

import React from "react";
import CreateFreight from "./components/CreateForm";
import TableRow from "./components/TableRow";
import prisma from "../db";

export const dynamic = "force-dynamic";

async function page() {
  const freights = await prisma.freight.findMany();
  return (
    <div className=' flex flex-col   items-center max-w-5xl w-full '>
      <div className=' flex  flex-col justify-center w-full'>
        <div className=' h-screen flex flex-col '>
          <CreateFreight />
          <div className='flex ml-4  mt-2'>
            <table className='max-w-3xl  w-full text-sm '>
              <thead>
                <tr className=' border-b border-gray-400 text-gray-500 s'>
                  <th className='text-left '>Name</th>
                  <th className='text-left '>Destination</th>
                  <th className='text-left '>Weight</th>
                  <th className='text-left '>Price</th>
                  <th className='  w-40  text-left'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {freights.map((freight) => (
                  <TableRow key={freight.id} freight={freight} />
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
