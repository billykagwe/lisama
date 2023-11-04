/** @format */

import React from "react";
import CreateBox from "./components/CreateForm";
import TableRow from "./components/TableRow";
import prisma from "../db";

async function page() {
  const boxes = await prisma.box.findMany();
  return (
    <div className=' flex flex-col   items-center max-w-5xl w-full'>
      <div className=' flex  flex-col justify-center  w-full '>
        
        <div className=' h-screen flex flex-col '>
          <CreateBox />
          <div className='flex ml-4 mt-2'>
            <table className='max-w-3xl  w-full text-sm'>
              <thead>
                <tr className=' border-b border-gray-200 text-gray-500 '>
                  <th className='text-left '>Name</th>
                  <th className='text-left '>Price</th>
                  <th className='  w-40  text-left'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {boxes.map((box) => (
                  <TableRow key={box.id} box={box} />
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
