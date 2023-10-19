/** @format */
"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Client } from "@prisma/client";
import React, { useState } from "react";
import { editClient } from "./actions";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

function EditClient({ client }: { client: Client }) {
  const [formData, setFormData] = useState(client)

  return (
    <div className='max-w-sm w-full rounded '>
      <form action={async (formData) => {
        const res = await editClient({ formData, id: client.id })
        redirect('/client')
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
            Country
          </label>
          <input
            type='text'
            className='border border-black rounded p-2'
            name='country'
            id=''
             value={formData.country}
            onChange={(e) => setFormData({...formData,country: e.target.value})}
          />
        </div>
        <div className='flex flex-col mt-2'>
          <label className='mb-1' htmlFor=''>
            Contract
          </label>
          <input
            type='text'
            className='border border-black rounded p-2'
            name='contract'
            id=''
             value={formData.contract}
            onChange={(e) => setFormData({...formData,contract: e.target.value})}
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
