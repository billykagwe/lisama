/** @format */
"use client";
import { Rawmaterial } from "@prisma/client";
import React, { useState } from "react";
import { editRawmaterial } from "./actions";
import { redirect } from "next/navigation";

function EditRawmaterial({ rm }: { rm: Rawmaterial }) {
  const [formData, setFormData] = useState(rm)

  return (
    <div className='max-w-sm w-full rounded '>
      <form action={async (formData) => {
        const res = await editRawmaterial({ formData, id: rm.id })
        redirect('/rawmaterial')
      }} className='px-3 py-2' >
        <p className='text-2xl mb-4'>Edit Client</p>
        <div className='flex flex-col'>
          <label className='mb-1' htmlFor=''>
            Name
          </label>
          <input
            type='text'
            className='border border-black rounded p-2'
            name='name'
            value={formData.name}
            onChange={(e) => setFormData({...formData,name: e.target.value})}
            id=''
          />
        </div>
        <div className='flex flex-col mt-2'>
          <label className='mb-1' htmlFor=''>
            Price
          </label>
          <input
            type='text'
            className='border border-black rounded p-2'
            name='price'
            id=''
             value={formData.price}
            onChange={(e) => setFormData({...formData,price: +e.target.value})}
          />
        </div>
    
        <button
          className='w-full px-4 py-2 text-center bg-teal-700 text-white mt-4'
          type='submit'
          aria-disabled={false}>
          {false ? "loading..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
}

export default EditRawmaterial;
