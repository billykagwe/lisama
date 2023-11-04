/** @format */
"use client";
import CreateForm from "./CreateForm";
import Modal from "@/app/components/Modal";
import React, { useState } from "react";

function CreateButton() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(!isOpen);
  return (
    <div className='mt-8 flex flex-col justify-end mr-8  px-4 py-4'>
    <div className="flex flex-col">
        <h2 className="text-2xl mt-3 mb-8 font-bold text-gray-600 ">Freight ui</h2>
          <button
        onClick={() => setIsOpen(true)}
        className=' self-end w-32 text-lg  px-8 py-2 rounded-full  text-center cursor-pointer  border-gray-700 bg-orange-600 text-orange-50 flex items-center justify-center '>
        create <span className='font-bold text-2xl ml-2'>+</span>
      </button>
      </div>
      <Modal closeModal={closeModal} isOpen={isOpen}>
        <CreateForm />
      </Modal>
    </div>
  );  
}

export default CreateButton;
