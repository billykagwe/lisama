/** @format */
"use client";
import { Box, Client, Freight, Rawmaterial } from "@prisma/client";
import { useState } from "react";

interface ICostingData {
  packhouse: number;
  coldroom: number;
  documentation: number;
  transport: number;
  totalRawmaterial: number;
  totalPackaging: number;
  totalFreight: number;
  clientId: undefined | number;
  orderSize: number;
  rawmaterialId: undefined | number;
  boxId: undefined | number;
  packKg: number;
  packCount: number;
  laborCost: number;
  outerBoxPrice: number;
}

export default function CostingForm({clients,freights,rawmaterials,boxes}: {clients: Client[],freights: Freight[], rawmaterials: Rawmaterial[], boxes: Box[]}) {


  const [costingData, setCostingData] = useState<ICostingData>({
    packhouse: 0,
    coldroom: 0,
    documentation: 0,
    transport: 0,
    totalRawmaterial: 0,
    totalPackaging: 0,
    totalFreight: 0,
    clientId: undefined,
    orderSize: 0,
    rawmaterialId: undefined,
    boxId: undefined,
    packKg: 0,
    packCount: 0,
    laborCost: 0,
    outerBoxPrice: 0,
  });

  const selectedRawmaterial = rawmaterials.find(
    (rm) => rm.id === costingData.rawmaterialId
  );

  const selectedBox = boxes.find((box) => box.id === costingData.boxId);
  const numberOfOuterBoxes =
    (costingData.orderSize / (costingData.packCount * costingData.packKg)) || 0;
  const outerBoxPrice = (numberOfOuterBoxes * costingData.outerBoxPrice) || 0;
  const innerBoxPrice = selectedBox
    ? (costingData.orderSize / costingData.packKg) * selectedBox?.price
    : 0;
  return (
      <div className='flex justify-between items-center   flex-col   text-sm'>
        <p className="text-black font-bold mt-2 text-2xl self-start pl-6   " >Costing</p>
          
      <div className='w-full  flex justify-center   pb-4 '>
       
        <div className='flex flex-col gap-4 w-64  pt-4'>
          <div className=' px-4 max-w-sm w-full'>
            <p className='mb-3 text-orange-700'>Fill-out the form</p>
            <div className='gap-y-3 flex flex-col mb-4'>
              <div className='flex flex-col mb-2'>
                <label className='block' htmlFor='product name'>
                  Client
                </label>
                <select
                  onChange={(e) => {
                    setCostingData((data) => ({
                      ...costingData,
                      clientId: +e.target.value,
                    }));
                  }}
                  value={costingData.clientId}
                  name='client'
                  className='text-black p-1 rounded border'
                  id=''>
                  <option value=''>-- select --</option>
                  {clients.map((client) => (
                    <option key={client.id} value={client.id}>
                      {client.name}
                    </option>
                  ))}
                  Select Client
                </select>
              
              </div>
              <div className='flex flex-col'>
                <label className='block' htmlFor='product name'>

                  Order Size (KG)
                </label>
                <input
                  name='orderSize'
                  value={costingData.orderSize}
                  onChange={(e) => {
                    setCostingData((data) => ({
                      ...costingData,
                      orderSize: +e.target.value,
                    }));
                  }}
                  type='number'
                  className='border rounded px-4 p-1 w-full'
                />
              </div>
              <div className='flex flex-col '>
                <label className='block' htmlFor='product name'>
                  Rawmaterial (RM)
                </label>
                <select
                  value={costingData.rawmaterialId}
                  onChange={(e) => {
                    setCostingData((data) => ({
                      ...costingData,
                      rawmaterialId: +e.target.value,
                    }));
                  }}
                  className='text-black p-1 rounded border'
                  name=''
                  id=''>
                   <option value=''>-- select --</option>
                  {rawmaterials.map((rm) => (
                    <option key={rm.id} value={rm.id}>
                      {rm.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className='flex flex-col'>
                <label className='block' htmlFor='product name'>
                  Box Type
                </label>
                <select
                  value={costingData.boxId}
                  onChange={(e) => {
                    setCostingData((data) => ({
                      ...costingData,
                      boxId: +e.target.value,
                    }));
                  }}
                  className='text-black p-1 rounded border'
                  name=''
                  id=''>
                   <option value=''>-- select --</option>
                  {boxes.map((box) => (
                    <option key={box.id} value={box.id}>
                      {box.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p>Pack Size</p>
                <div className='flex gap-2 items-center'>
                  <div>
                    <input
                      type='number'
                      name='packKg'
                      value={costingData.packKg}
                      onChange={(e) => {
                        setCostingData((data) => ({
                          ...data,
                          packKg: +e.target.value,
                        }));
                      }}
                      className='border rounded px-4 w-24 py-1'
                    />
                  </div>
                  <div>
                    <p>X</p>
                  </div>
                  <div>
                    <input
                      type='number'
                      name='packCount'
                      onChange={(e) => {
                        setCostingData((data) => ({
                          ...data,
                          packCount: +e.target.value,
                        }));
                      }}
                      value={costingData.packCount}
                      className='border rounded px-4 w-24 py-1'
                    />
                  </div>
                </div>
              </div>
              <div className='flex flex-col'>
                <label className='block' htmlFor='product name'>
                  Labour Cost (LC)
                </label>
                <input
                  value={costingData.laborCost}
                  onChange={(e) => {
                    setCostingData((data) => ({
                      ...data,
                      laborCost: +e.target.value,
                    }));
                  }}
                  type='number'
                  className='border rounded px-4 py-1 '
                />
              </div>
              <div className='flex flex-col'>
                <label className='block' htmlFor='product name'>
                  Packhouse Cost (PC)
                </label>
                <input
                  value={costingData.packhouse}
                  onChange={(e) => {
                    setCostingData((data) => ({
                      ...data,
                      packhouse: +e.target.value,
                    }));
                  }}
                  type='number'
                  className='border rounded px-4 py-1'
                />

                </div>
        
              </div>
            

              <div className='flex flex-col mt-2'>
                <label className='block' htmlFor='product name'>

                  Transport Cost (TC)
                </label>
                <input
                  value={costingData.transport}
                  onChange={(e) => {
                    setCostingData((data) => ({
                      ...data,
                      transport: +e.target.value,
                    }));
                  }}
                  type='number'
                  className='border rounded px-4  py-1'
                />
              </div>
              <div className='flex flex-col mt-2'>
                <label className='block' htmlFor='product name'>
                  Documentation Cost (DC)
                </label>
                <input
                  value={costingData.documentation}
                  onChange={(e) => {
                    setCostingData((data) => ({
                      ...data,
                      documentation: +e.target.value,
                    }));
                  }}
                  type='number'
                  className='border rounded px-4 py-1'
                />
              </div>
              <div className='flex flex-col mt-2'>
                <label className='block' htmlFor='product name'>
                  Coldroom Cost (CC)
                </label>
                <input
                  value={costingData.coldroom}
                  onChange={(e) => {
                    setCostingData((data) => ({
                      ...data,
                      coldroom: +e.target.value,
                    }));
                  }}
                  type='number'
                  className='border rounded px-4 py-1'
                  />
            
              </div>

                      <div className='w-full  rounded py-1 mt-2'>
                            <label className='block mb-1' htmlFor='product name'>
                  Outerbox Cost
                </label>
                        <input
                          type='number'
                          className='w-full border border-gray-100   p-1 px-4 '
                          name=''
                          id=''
                          value={costingData.outerBoxPrice?.toFixed(2)}
                          onChange={(e) => {
                            setCostingData((data) => ({
                              ...data,
                              outerBoxPrice: +e.target.value,
                            }));
                          }}
                        />
                      </div>
                  <div className='flex flex-col mt-2 '>
                    <p className=''>Choose Freight</p>
                    <div className='w-full  rounded py-1'>
                      <select
                        className='text-black p-1 rounded border w-full'
                        name=''
                        id=''>
                         <option value=''>-- select --</option>
                        {freights.map((freight) => (
                          <option key={freight.id} value={freight.id}>
                            {freight.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
            </div>
            <div className="px-4">
              <button className=' w-full block text-white bg-orange-600 text-center py-2 rounded '>
                CALCULATE
              </button>
            </div>
          </div>
              <div className='w-full  rounded shadow flex-2  px-2 pb-4 b-white '>
                  
            <div className='flex justify-between pb-4 border-b mb-4 '>
              <p>
                SRP: <span className='text-2xl  text-orange-600'>780.00</span>
              </p>
              <p>
                SRP per yield: <span className='text-2xl text-orange-600'>130.00</span>
              </p>
            </div>
            <div className=' px-2'>
              <div className='flex flex-col py-3 border-b'>
                <p className='mb-3 font-semibold'>Raw Material Cost (RMC)</p>
                <div className='flex gap-3 text-center'>
                  <div className='w-36 text-center bg-orange-50 rounded py-1'>
                    <p>{selectedRawmaterial?.price} (RM)</p>
                  </div>
                  <div>x</div>
                  <div className='w-36 text-center bg-orange-50 rounded py-1'>
                    {costingData.orderSize}
                  </div>
                  <div>=</div>
                  <div className='w-36 text-center bg-orange-50 rounded py-1'>
                    {selectedRawmaterial
                      ? selectedRawmaterial?.price * costingData?.orderSize
                      : 0}
                    (RMC)
                  </div>
                </div>
              </div>
              <div className='flex flex-col mt-4  border-b'>
                <p className='mb-3 font-semibold'>Packaging Cost (PC)</p>
                <div className=' flex flex-col space-y-3'>
                  <div>
                    <p>Outer Box *</p>

                    <div className='flex gap-3 text-center'>
                    <div className='w-36 text-center bg-orange-50 rounded py-1'>
                                          <p>{~~costingData.outerBoxPrice}</p>
                  </div>
                      <div>x</div>
                      <div className='w-36 text-center bg-orange-50 rounded py-1'>
                        { isFinite(numberOfOuterBoxes) ? numberOfOuterBoxes?.toFixed(2) : 0.00}
                      </div>
                      <div>=</div>
                      <div className='w-36 text-center bg-orange-50 rounded py-1'>
                        { isFinite(outerBoxPrice) ? outerBoxPrice?.toFixed(2) : 0.00}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>Inner Box</p>

                    <div className='flex gap-3 text-center'>
                      <div className='w-36 text-center bg-orange-50 rounded py-1'>
                        <p>{selectedBox?.price}</p>
                      </div>
                      <div>x</div>
                      <div className='w-36 text-center bg-orange-50 rounded py-1'>
                        {isFinite(costingData.orderSize / costingData.packCount) ?? 0}
                      </div>
                      <div>=</div>
                      <div className='w-36 text-center bg-orange-50 rounded py-1'>
                        {innerBoxPrice}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>Total Packaging Cost</p>
                    <div className='flex gap-3 text-center pb-2'>
                      <div className='w-36 text-center bg-orange-50 rounded py-1'>
                        <p>{outerBoxPrice?.toFixed(2)}</p>
                      </div>
                      <div>+</div>
                      <div className='w-36 text-center bg-orange-50 rounded py-1'>
                        {innerBoxPrice?.toFixed(2)}
                      </div>
                      <div>=</div>
                      <div className='w-36 text-center bg-orange-50 rounded py-1'>
                        {isFinite(outerBoxPrice + innerBoxPrice) ?  (outerBoxPrice + innerBoxPrice).toFixed(2) : 0.00}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex  py-3 border-b gap-x-6'>
                <div className='flex flex-col mt-4'>
                  <p className='mb-2 font-semibold '>Transport Cost (TC)</p>
                  <div className='w-36 text-center bg-orange-50 rounded py-1'>
                    {costingData.transport}
                  </div>
                </div>
                <div className='flex flex-col mt-4'>
                  <p className='mb-2 font-semibold'>Labor Cost(LC)</p>
                  <div className='w-36 text-center bg-orange-50 rounded py-1'>
                    {costingData.laborCost}
                  </div>
                </div>
                <div className='flex flex-col mt-4 '>
                  <p className='mb-2 font-semibold'>Packhouse Cost (PC)</p>
                  <div className='w-36 text-center bg-orange-50 rounded py-1'>
                    {costingData.packhouse}
                  </div>
                </div>
              </div>

              <div className='flex justify-between pb-2 border-b'>
                <div className='flex flex-col mt-4'>
                  <p className='mb-2 font-semibold'>Documentation Cost (DC)</p>
                  <div className='w-36 text-center bg-orange-50 rounded py-1'>
                    {costingData.documentation}
                  </div>
                </div>
                <div className='flex flex-col mt-4'>
                  <p className='mb-2 font-semibold'>Coldroom Cost (CC)</p>
                  <div className='w-36 text-center bg-orange-50 rounded py-1'>
                    {costingData.coldroom}
                  </div>
                </div>
                <div className='w-36'></div>
              </div>
              <div className='mt-4'>
                <p className='mb-2 font-semibold'>Freight Cost (FC)</p>
                <div className='flex flex-col justify-between border-b  gap-3'>
                 
                  <div className='flex flex-col mt-4'>
                    <div className='flex gap-3 text-center'>
                      <div className='w-36 text-center bg-orange-50 rounded py-1'>
                        <p>30.00</p>
                      </div>
                      <div>x</div>
                      <div className='w-36 text-center bg-orange-50 rounded py-1'>
                        50
                      </div>
                      <div>=</div>
                      <div className='w-36 text-center bg-orange-50 rounded py-1'>
                        1500
                      </div>
                    </div>
                  </div>
                  <div className='w-36'></div>
                </div>
              </div>

              <div className='flex flex-col mt-2 '>
                <p className='font-semibold '>Factory Cost</p>
                <div className='flex items-center'>
                  <div className='px-4 text-center bg-orange-50 rounded py-1'>
                    RMC
                  </div>
                  <div className='mx-1'>+</div>
                  <div className='px-4 text-center bg-orange-50 rounded py-1'>
                    BC
                  </div>
                  <div className='mx-1'>+</div>
                  <div className='px-4 text-center bg-orange-50 rounded py-1'>
                    LC
                  </div>
                  <div className='mx-1'>+</div>
                  <div className='px-4 text-center bg-orange-50 rounded py-1'>
                    PC
                  </div>
                  <div className='mx-1'>+</div>
                  <div className='px-4 text-center bg-orange-50 rounded py-1'>
                    DC
                  </div>
                  <div className='mx-1'>+</div>
                  <div className='px-4 text-center bg-orange-50 rounded py-1'>
                    TC
                  </div>
                  <div className='mx-1'>+</div>
                  <div className='px-4 text-center bg-orange-50 rounded py-1'>
                    FC
                  </div>
                  <div className='mx-1'>=</div>
                  <div className='px-4 text-center text-orange-600  font-bold text-lg rounded py-4'>
                    10800
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className='flex justify-between border-t w-full pt-4'>
          <p>Created By Billy</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
  )
}

// build a crud dashboard -
// table for display
// form for edit and create
// delete icons at the end of the column
//
