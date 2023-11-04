/** @format */
"use client";
import { Box, Freight } from "@prisma/client";
import React, { useState } from "react";
import { editBox } from "./actions";
import { redirect } from "next/navigation";

function EditClient({ box }: { box: Box }) {
  const [formData, setFormData] = useState(box)

  return (
    <div className='max-w-sm w-full rounded '>
      <form action={async (formData) => {
        const res = await editBox({ formData, id: box.id })
        redirect('/box')
      }} className='px-3 py-2' >
        <p className='text-2xl mb-4'>Edit Box</p>
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
            type='number'
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

export default EditClient;
