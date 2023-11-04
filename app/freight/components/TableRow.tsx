/** @format */
"use client";

import Modal from "@/app/components/Modal";
import React, { useState } from "react";
import EditFreight from "./EditForm";
import { Freight } from "@prisma/client";
import { deleteFreight } from "./actions";
import { redirect } from "next/navigation";

function TableRow({ freight }: { freight: Freight }) {
      const [show, setShow] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  return (
    <tr className='border-gray-200 border-b'>
      <td className='py-2'>{freight.name}</td>
      <td className='py-2'>{freight.destination}</td>
      <td className='py-2'>{freight.weight}</td>
      <td className='py-2'>{freight.price}</td>
          <td>
        {showDeleteModal && <DeleteModal id={freight.id} closeModal={() => setShowDeleteModal(false)} isOpen={ showDeleteModal} />}
        {showEditModal && <EditModal freight={freight}  closeModal={() => setShowEditModal(false)} isOpen={ showEditModal}/>}
   
        <div className="flex">
      { !show && <svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 gap-2 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
          </svg> } 
        { show && <div className="flex cursor-pointer p-1 rounded-lg items-center  border border-gray-300 ">
          <svg onClick={() => setShowEditModal(!showEditModal)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2 text-blue-600 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          <svg onClick={() => setShowDeleteModal(!showDeleteModal)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 cursor-pointer text-red-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
            <svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

          </div>  }
        </div>
       

      </td>
    </tr>
  );
}

export default TableRow;

const EditModal = ({ freight,closeModal,isOpen }: { freight: Freight,closeModal: () => void, isOpen: boolean }) => {

  return (
    <div>
  
      <Modal closeModal={closeModal} isOpen={isOpen}>
        <EditFreight freight={freight} />
      </Modal>
    </div>
  );
};

const DeleteModal = ({id,closeModal,isOpen}:{id:number,closeModal: () => void, isOpen: boolean}) => {

  return (
    <div>
   
      <Modal closeModal={closeModal} isOpen={isOpen}>
        <div>
          <p className='mt-4 font-bold text-gray-800 mb-1 text-lg'>
            Delete Freight
          </p>
          <p className='mb-2'>The action cannot be undone</p>
          <div className='flex gap-4 mt-4'>
            <button className='bg-gray-100 border border-gray-300  text-black px-4 py-2 rounded'>
              Cancel
            </button>
            <button onClick={async () => {
              try {
                 await deleteFreight(id)
                 redirect('/freight')
              } catch (error) {
                console.log({error})
              }
             
            }} className='bg-red-600 text-white px-4 py-2 rounded'>
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
