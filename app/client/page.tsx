/** @format */

import React from "react";
import CreateClient from "./components/CreateForm";

function page() {
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
          <div className='mt-8 flex flex-col justify-end mr-8  px-4 py-4'>
            <button className='block self-end  px-8 py-2 rounded-xl text-center cursor-pointer border border-blue-600 w-48'>
              Create <span className='font-bold text-lg'>+</span>
            </button>
            <CreateClient />
          </div>
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
                <tr className='border-gray-400 border-b'>
                  <td className='py-2'>Adebayo</td>
                  <td className='py-2'>Ghana</td>
                  <td className='py-2'>FOB</td>
                  <td>
                    <div className='flex gap-2'>
                      <button className='px-3 py-1 border border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white rounded cursor-pointer'>
                        EDIT
                      </button>
                      <button className='px-3 py-1 border border-red-300 text-red-600 hover:text-white hover:bg-red-600 rounded cursor-pointer'>
                        DELETE
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className='border-gray-400 border-b'>
                  <td className='py-2'>Adebayo</td>
                  <td className='py-2'>Ghana</td>
                  <td className='py-2'>FOB</td>
                  <td>
                    <div className='flex gap-2'>
                      <button className='px-3 py-1 border border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white rounded cursor-pointer'>
                        EDIT
                      </button>
                      <button className='px-3 py-1 border border-red-300 text-red-600 hover:text-white hover:bg-red-600 rounded cursor-pointer'>
                        DELETE
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className='border-gray-400 border-b'>
                  <td className='py-2'>Adebayo</td>
                  <td className='py-2'>Ghana</td>
                  <td className='py-2'>FOB</td>
                  <td>
                    <div className='flex gap-2'>
                      <button className='px-3 py-1 border border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white rounded cursor-pointer'>
                        EDIT
                      </button>
                      <button className='px-3 py-1 border border-red-300 text-red-600 hover:text-white hover:bg-red-600 rounded cursor-pointer'>
                        DELETE
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className='border-gray-400 border-b'>
                  <td className='py-2'>Adebayo</td>
                  <td className='py-2'>Ghana</td>
                  <td className='py-2'>FOB</td>
                  <td>
                    <div className='flex gap-2'>
                      <button className='px-3 py-1 border border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white rounded cursor-pointer'>
                        EDIT
                      </button>
                      <button className='px-3 py-1 border border-red-300 text-red-600 hover:text-white hover:bg-red-600 rounded cursor-pointer'>
                        DELETE
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className='border-gray-400 border-b'>
                  <td className='py-2'>Adebayo</td>
                  <td className='py-2'>Ghana</td>
                  <td className='py-2'>FOB</td>
                  <td>
                    <div className='flex gap-2'>
                      <button className='px-3 py-1 border border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white rounded cursor-pointer'>
                        EDIT
                      </button>
                      <button className='px-3 py-1 border border-red-300 text-red-600 hover:text-white hover:bg-red-600 rounded cursor-pointer'>
                        DELETE
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
