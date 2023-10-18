/** @format */
"use client";
import { experimental_useFormState as useFormState } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Client } from "@prisma/client";
import React, { useState } from "react";
import { editClient } from "./actions";

function EditClient({ client }: { client: Client }) {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(editClient, client);
  console.log({ state });
  return (
    <div className='max-w-sm w-full rounded '>
      <form className='px-3 py-2' action={formAction}>
        <p className='text-2xl mb-4'>Edit Client</p>
        <div className='flex flex-col'>
          <label className='mb-1' htmlFor=''>
            Name
          </label>
          <input
            type='text'
            className='border border-black rounded p-2'
            name='name'
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
          />
        </div>
        <button
          className='w-full px-4 py-2 text-center bg-teal-700 text-white mt-4'
          type='submit'
          aria-disabled={pending}>
          {pending ? "loading..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
}

export default EditClient;
