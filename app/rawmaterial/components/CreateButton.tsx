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
      <button
        onClick={() => setIsOpen(true)}
        className='block self-end  px-8 py-2 rounded-xl text-center cursor-pointer border border-gray-700 w-48'>
        Create <span className='font-bold text-lg'>+</span>
      </button>
      <Modal closeModal={closeModal} isOpen={isOpen}>
        <CreateForm />
      </Modal>
    </div>
  );
}

export default CreateButton;
