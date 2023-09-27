/** @format */

import React from "react";

function CreateClient() {
  return (
    <div className='max-w-sm w-full rounded border border-black'>
      <form className='px-3 py-2' action=''>
        <p className='text-2xl mb-4'>Add a Client</p>
        <div className='flex flex-col'>
          <label className='mb-1' htmlFor=''>
            Name
          </label>
          <input
            type='text'
            className='border border-black rounded p-2'
            name=''
            id=''
          />
        </div>
        <div className='flex flex-col mt-2'>
          <label className='mb-1' htmlFor=''>
            Country
          </label>
          <input
            type='text'
            className='border border-black rounded p-2'
            name=''
            id=''
          />
        </div>
        <div className='flex flex-col mt-2'>
          <label className='mb-1' htmlFor=''>
            Contract
          </label>
          <input
            type='text'
            className='border border-black rounded p-2'
            name=''
            id=''
          />
        </div>
        <div className='w-full px-4 py-2 text-center bg-teal-700 text-white mt-4'>
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default CreateClient;
