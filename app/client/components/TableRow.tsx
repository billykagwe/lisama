/** @format */
"use client";

import Modal from "@/app/components/Modal";
import React, { useState } from "react";
import EditClient from "./EditForm";
import { Client } from "@prisma/client";
import { deleteClient } from "./actions";
import { redirect } from "next/navigation";

function TableRow({ client }: { client: Client }) {
  console.log("ddfffff",{id: client.id})
  return (
    <tr className='border-gray-400 border-b'>
      <td className='py-2'>{client.name}</td>
      <td className='py-2'>{client.country}</td>
      <td className='py-2'>{client.contract}</td>
      <td>
        <div className='flex gap-2'>
          <EditButton client={client} />
          <DeleteButton id={client.id} />
        </div>
      </td>
    </tr>
  );
}

export default TableRow;

const EditButton = ({ client }: { client: Client }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className='px-3 py-1 border border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white rounded cursor-pointer'>
        EDIT
      </button>
      <Modal closeModal={() => setIsOpen(false)} isOpen={isOpen}>
        <EditClient client={client} />
      </Modal>
    </div>
  );
};

const DeleteButton = ({id}:{id:number}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className='px-3 py-1 border border-red-300 text-red-600 hover:text-white hover:bg-red-600 rounded cursor-pointer'>
        DELETE
      </button>
      <Modal closeModal={() => setIsOpen(false)} isOpen={isOpen}>
        <div>
          <p className='mt-4 font-bold text-gray-800 mb-1 text-lg'>
            Delete Client
          </p>
          <p className='mb-2'>The action cannot be undone</p>
          <div className='flex gap-4 mt-4'>
            <button className='bg-gray-100 border border-gray-300  text-black px-4 py-2 rounded'>
              Cancel
            </button>
            <button onClick={async () => {
              try {
                 await deleteClient(id)
                 redirect('/client')
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
