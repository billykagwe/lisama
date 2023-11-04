/** @format */
"use client";
import { Freight } from "@prisma/client";
import React, { useState } from "react";
import { editFreight } from "./actions";
import { redirect } from "next/navigation";

function EditClient({ freight }: { freight: Freight }) {
  const [formData, setFormData] = useState(freight)

  return (
    <div className='max-w-sm w-full rounded '>
      <form action={async (formData) => {
        const res = await editFreight({ formData, id: freight.id })
        redirect('/freight')
      }} className='px-3 py-2' >
        <p className='text-2xl mb-4'>Edit Freight</p>
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
        <div className='flex flex-col'>
          <label className='mb-1' htmlFor=''>
            Destination
          </label>
          <input
            type='text'
            className='border border-black rounded p-2'
            name='destination'
            value={formData.destination}
            onChange={(e) => setFormData({...formData,destination: e.target.value})}
            id=''
          />
        </div>
        <div className='flex flex-col'>
          <label className='mb-1' htmlFor=''>
            Weight
          </label>
          <input
            type='text'
            className='border border-black rounded p-2'
            name='weight'
            value={formData.weight}
            onChange={(e) => setFormData({...formData,weight: +e.target.value})}
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

export default EditClient;
