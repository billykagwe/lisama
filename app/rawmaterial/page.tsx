/** @format */

import React from "react";
import CreateRawmaterial from "./components/CreateForm";
import TableRow from "./components/TableRow";
import prisma from "../db";

async function page() {
  const rms = await prisma.rawmaterial.findMany();
  return (
    <div className=' flex flex-col   items-center w-full'>
      <div className=' flex  flex-col justify-center  w-full'>
      
        <div className=' h-screen flex flex-col  px-4'>
          <CreateRawmaterial />
          <div className='flex  mt-2'>
            <table className='max-w-3xl  w-full'>
              <thead>
                <tr className=' border-b border-gray-200'>
                  <th className='text-left  text-gray-500 text-sm'>Name</th>
                  <th className='text-left  text-gray-500 text-sm'>Price</th>
                  
                  <th className=' p-1 w-40  text-left text-gray-500 text-sm'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rms.map((rm) => (
                  <TableRow key={rm.id} rm={rm} />
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
