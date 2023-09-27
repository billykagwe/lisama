/** @format */
"use client";
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

export default function Home() {
  const clients = [
    { name: "Ben", Country: "Belgium", contract: "FOB", id: 1 },
    { name: "Allan", Country: "Spain", contract: "CNF", id: 2 },
    { name: "Paul", Country: "Netherlands", contract: "FOB", id: 3 },
  ];
  const rawmaterials = [
    {
      name: "Chives",
      price: 30,
      id: 1,
    },
    {
      name: "Mint",
      price: 40,
      id: 2,
    },
    {
      name: "Oregano",
      price: 30,
      id: 3,
    },
  ];

  const boxes = [
    {
      name: "box1",
      price: 10,
      id: 1,
    },
    {
      name: "box2",
      price: 40,
      id: 2,
    },

    {
      name: "box3",
      price: 50,
      id: 3,
    },
  ];

  const freights = [
    {
      name: "KQ 500kgs",
      destination: "SPAIN",
      id: 1,
    },
    {
      name: "KQ 1000kgs",
      destination: "BELGIUM",
      id: 2,
    },

    {
      name: "KQ 500kgs",
      destination: "NETHERLANDS",
      id: 3,
    },
  ];

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
    costingData.orderSize / (costingData.packCount * costingData.packKg);
  const outerBoxPrice = numberOfOuterBoxes * costingData.outerBoxPrice;
  const innerBoxPrice = selectedBox
    ? (costingData.orderSize / costingData.packKg) * selectedBox?.price
    : 0;
  return (
    <div className='flex justify-between items-center   flex-col'>
      <div className='max-w-5xl w-full px-3  py-4 flex justify-center  items-center  flex-col'>
        {/* header */}
        <div className='flex justify-between items-center w-full'>
          <div>
            <p>Product Costing</p>
          </div>
          <div className='flex gap-2'>
            <p>costing</p>
            <p>clients</p>
            <p>quotes</p>
            <p>price list</p>
          </div>
        </div>
        {/* body */}
        <div className='flex gap-4 w-full px-8 my-16 max-w-5xl  '>
          <div className='mb-8 px-8 max-w-sm w-full'>
            <p className='mb-3'>Fill-out the form</p>
            <div className='gap-y-2 flex flex-col mb-4'>
              <div className='flex flex-col'>
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
                  <option value=''></option>
                  {clients.map((client) => (
                    <option key={client.id} value={client.id}>
                      {client.name}
                    </option>
                  ))}
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
                  className='border rounded px-4 p-1 w-48'
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
                  <option value=''></option>
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
                  <option value=''></option>
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
              <div className='flex flex-col'>
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
              <div className='flex flex-col'>
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
              <div className='flex flex-col'>
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
            </div>
            <div>
              <button className=' w-full block text-white bg-green-600 text-center py-2 rounded '>
                CALCULATE
              </button>
            </div>
          </div>
          <div className='w-full px-4 py-3 rounded shadow flex-2 '>
            <div className='flex justify-between py-4 border-b mb-4'>
              <p>
                SRP: <span className='text-2xl'>780.00</span>
              </p>
              <p>
                SRP per yield: <span className='text-2xl'>130.00</span>
              </p>
            </div>
            <div className=' px-2'>
              <div className='flex flex-col py-3 border-b'>
                <p className='mb-3 font-bold'>Raw Material Cost (RMC)</p>
                <div className='flex gap-3 text-center'>
                  <div className='w-36 text-center bg-gray-100 rounded py-1'>
                    <p>{selectedRawmaterial?.price} (RM)</p>
                  </div>
                  <div>x</div>
                  <div className='w-36 text-center bg-gray-100 rounded py-1'>
                    {costingData.orderSize}
                  </div>
                  <div>=</div>
                  <div className='w-36 text-center bg-gray-100 rounded py-1'>
                    {selectedRawmaterial
                      ? selectedRawmaterial?.price * costingData?.orderSize
                      : 0}
                    (RMC)
                  </div>
                </div>
              </div>
              <div className='flex flex-col mt-4 pb-8 border-b'>
                <p className='mb-3 font-bold'>Packaging Cost (PC)</p>
                <div className=' flex flex-col space-y-3'>
                  <div>
                    <p>Outer Box</p>

                    <div className='flex gap-3 text-center'>
                      <div className='w-36 text-center  rounded py-1'>
                        <input
                          type='number'
                          className='w-36 text-center bg-gray-100 p-1'
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
                      <div>x</div>
                      <div className='w-36 text-center bg-gray-100 rounded py-1'>
                        {numberOfOuterBoxes?.toFixed(2)}
                      </div>
                      <div>=</div>
                      <div className='w-36 text-center bg-gray-100 rounded py-1'>
                        {outerBoxPrice?.toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>Inner Box</p>

                    <div className='flex gap-3 text-center'>
                      <div className='w-36 text-center bg-gray-100 rounded py-1'>
                        <p>{selectedBox?.price}</p>
                      </div>
                      <div>x</div>
                      <div className='w-36 text-center bg-gray-100 rounded py-1'>
                        {costingData.orderSize / costingData.packCount}
                      </div>
                      <div>=</div>
                      <div className='w-36 text-center bg-gray-100 rounded py-1'>
                        {innerBoxPrice}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>Total Packaging Cost</p>
                    <div className='flex gap-3 text-center'>
                      <div className='w-36 text-center bg-gray-100 rounded py-1'>
                        <p>{outerBoxPrice?.toFixed(2)}</p>
                      </div>
                      <div>+</div>
                      <div className='w-36 text-center bg-gray-100 rounded py-1'>
                        {innerBoxPrice?.toFixed(2)}
                      </div>
                      <div>=</div>
                      <div className='w-36 text-center bg-gray-100 rounded py-1'>
                        {(outerBoxPrice + innerBoxPrice)?.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-between py-3 border-b'>
                <div className='flex flex-col mt-4'>
                  <p className='mb-2 font-bold'>Transport Cost (TC)</p>
                  <div className='w-36 text-center bg-gray-100 rounded py-1'>
                    {costingData.transport}
                  </div>
                </div>
                <div className='flex flex-col mt-4'>
                  <p className='mb-2 font-bold'>Labor Cost(LC)</p>
                  <div className='w-36 text-center bg-gray-100 rounded py-1'>
                    {costingData.laborCost}
                  </div>
                </div>
                <div className='flex flex-col mt-4 '>
                  <p className='mb-2 font-bold'>Packhouse Cost (PC)</p>
                  <div className='w-36 text-center bg-gray-100 rounded py-1'>
                    {costingData.packhouse}
                  </div>
                </div>
              </div>

              <div className='flex justify-between py-3 border-b'>
                <div className='flex flex-col mt-4'>
                  <p className='mb-2 font-bold'>Documentation Cost (DC)</p>
                  <div className='w-36 text-center bg-gray-100 rounded py-1'>
                    {costingData.documentation}
                  </div>
                </div>
                <div className='flex flex-col mt-4'>
                  <p className='mb-2 font-bold'>Coldroom Cost (CC)</p>
                  <div className='w-36 text-center bg-gray-100 rounded py-1'>
                    {costingData.coldroom}
                  </div>
                </div>
                <div className='w-36'></div>
              </div>
              <div className='mt-4'>
                <p className='mb-2 font-bold'>Freight Cost (FC)</p>
                <div className='flex flex-col justify-between py-3 border-b  gap-3'>
                  <div className='flex flex-col '>
                    <p className='mb-2'>Choose Freight</p>
                    <div className='w-36 text-center bg-gray-100 rounded py-1'>
                      <select
                        className='text-black p-1 rounded border'
                        name=''
                        id=''>
                        <option value=''></option>
                        {freights.map((freight) => (
                          <option key={freight.id} value={freight.id}>
                            {freight.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className='flex flex-col mt-4'>
                    <div className='flex gap-3 text-center'>
                      <div className='w-36 text-center bg-gray-100 rounded py-1'>
                        <p>30.00</p>
                      </div>
                      <div>x</div>
                      <div className='w-36 text-center bg-gray-100 rounded py-1'>
                        50
                      </div>
                      <div>=</div>
                      <div className='w-36 text-center bg-gray-100 rounded py-1'>
                        1500
                      </div>
                    </div>
                  </div>
                  <div className='w-36'></div>
                </div>
              </div>

              <div className='flex flex-col mt-4 '>
                <p className='font-bold mb-4'>Factory Cost</p>
                <div className='flex items-center'>
                  <div className='px-4 text-center bg-gray-100 rounded py-1'>
                    RMC
                  </div>
                  <div className='mx-1'>+</div>
                  <div className='px-4 text-center bg-gray-100 rounded py-1'>
                    BC
                  </div>
                  <div className='mx-1'>+</div>
                  <div className='px-4 text-center bg-gray-100 rounded py-1'>
                    LC
                  </div>
                  <div className='mx-1'>+</div>
                  <div className='px-4 text-center bg-gray-100 rounded py-1'>
                    PC
                  </div>
                  <div className='mx-1'>+</div>
                  <div className='px-4 text-center bg-gray-100 rounded py-1'>
                    DC
                  </div>
                  <div className='mx-1'>+</div>
                  <div className='px-4 text-center bg-gray-100 rounded py-1'>
                    TC
                  </div>
                  <div className='mx-1'>+</div>
                  <div className='px-4 text-center bg-gray-100 rounded py-1'>
                    FC
                  </div>
                  <div className='mx-1'>=</div>
                  <div className='px-2 text-center bg-black text-white rounded py-1'>
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
    </div>
  );
}
