/** @format */
"use client";
import { experimental_useFormState as useFormState } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

import Modal from "@/app/components/Modal";
import React, { useEffect, useState } from "react";
import { createClient } from "./actions";

const initialState = {
  message: null,
};

function CreateClient() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(!isOpen);
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(createClient, initialState);

  useEffect(() => {
    setIsOpen(false);
  }, [state?.message?.success]);

  return (
    <div className='mt-8 flex flex-col justify-end mr-8  px-4 py-4'>
      <button
        onClick={() => setIsOpen(true)}
        className='block self-end  px-8 py-2 rounded-xl text-center cursor-pointer border border-blue-600 w-48'>
        Create <span className='font-bold text-lg'>+</span>
      </button>
      <Modal closeModal={closeModal} isOpen={isOpen}>
        <div className='max-w-sm w-full rounded  m-4'>
          {state?.message?.success && (
            <p className='text-center bg-green-600 text-white py-1 rounded mb-2'>
              {state.message.success}
            </p>
          )}
          {state?.message?.error && (
            <p className='text-center text-red-600  border border-red-600 py-1 rounded mb-2'>
              {state?.message?.error}
            </p>
          )}
          <form className='px-3 py-2' action={formAction}>
            <p className='text-2xl mb-4'>Add a Client</p>
            <div className='flex flex-col'>
              <label className='mb-1' htmlFor=''>
                Name
              </label>
              <input
                type='text'
                required
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
                required
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
                required
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
      </Modal>
    </div>
  );
}

export default CreateClient;
