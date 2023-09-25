/** @format */

export default function Home() {
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
        <div className='flex gap-4 w-full px-8 my-16'>
          <div className='mb-8 px-8'>
            <p className='mb-3'>Fill-out the form</p>
            <div className='gap-y-2 flex flex-col mb-4'>
              <div className='flex flex-col mb-2'>
                <label className='block' htmlFor='product name'>
                  Select Client
                </label>
                <select className='border py-2 rounded ' name='' id=''>
                  <option value=''>James</option>
                  <option value=''>Paul</option>
                  <option value=''>June</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label className='block' htmlFor='product name'>
                  Select Rawmaterial
                </label>
                <select className='border py-2 rounded ' name='' id=''>
                  <option value=''>Mint</option>
                  <option value=''>Chives</option>
                  <option value=''>Basil</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label className='block' htmlFor='product name'>
                  Box Type
                </label>
                <select className='border py-2 rounded ' name='' id=''>
                  <option value=''>Herb6</option>
                  <option value=''>Herb8</option>
                  <option value=''>Herb9</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='block' htmlFor='product name'>
                  Pack Size
                </label>
                <div className='flex justify-between gap-2  items-center'>
                  <input
                    type='number'
                    className='border rounded px-4 block py-2 w-24'
                  />
                  <div>X</div>
                  <input
                    type='number'
                    className='border rounded px-4 block py-2 w-24'
                  />
                </div>
              </div>

              <div className='flex justify-center items-center gap-x-2'>
                <div className='w-full'>
                  <label className='block' htmlFor='product name'>
                    Labor
                  </label>
                  <input
                    type='number'
                    className='border rounded px-4 block py-2 w-24'
                  />
                </div>
                <div className='w-full'>
                  <label className='block' htmlFor='product name'>
                    Transport
                  </label>
                  <input
                    type='number'
                    className='border rounded px-4 block py-2 w-24'
                  />
                </div>
              </div>
              <div className='flex justify-center items-center gap-2'>
                <div className='w-full'>
                  <label className='block' htmlFor='product name'>
                    Packhouse
                  </label>
                  <input
                    type='number'
                    className='border rounded px-4 block py-2 w-24'
                  />
                </div>
                <div className='w-full'>
                  <label className='block' htmlFor='product name'>
                    Coldroom
                  </label>
                  <input
                    type='number'
                    className='border rounded px-4 block py-2 w-24'
                  />
                </div>
              </div>
              <div className='flex flex-col'>
                <label className='block' htmlFor='product name'>
                  Documentation
                </label>
                <input
                  type='number'
                  className='border rounded px-4 w-48 py-2'
                />
              </div>
            </div>
            <div>
              <button className=' w-48 bg-green-600 text-center'>
                CALCULATE
              </button>
            </div>
          </div>
          <div className='w-full max-w-xl px-4 py-3 rounded shadow '>
            <div className='flex justify-between py-4 border-b mb-4'>
              <p>
                SRP: <span>780.00</span>
              </p>
              <p>
                SRP per yield: <span>130.00</span>
              </p>
            </div>
            <div>
              <div className='flex flex-col'>
                <p>Overhead Cost(OH)</p>
                <div className='flex gap-3'>
                  <div>
                    <p>300.00(RM)</p>
                  </div>
                  <div>x</div>
                  <div>4%</div>
                  <div>=</div>
                  <div>1200(OH)</div>
                </div>
              </div>
              <div className='flex flex-col mt-4'>
                <p>Overhead Cost(OH)</p>
                <div className='flex gap-3'>
                  <div>
                    <p>300.00(RM)</p>
                  </div>
                  <div>x</div>
                  <div>4%</div>
                  <div>=</div>
                  <div>1200(OH)</div>
                </div>
              </div>
              <div className='flex flex-col mt-4'>
                <p>Total Cost(TC)</p>
                <div className='flex gap-3'>
                  <div>
                    <p>300.00(RM)</p>
                  </div>
                  <div>+</div>
                  <div>120.00(OH)</div>
                  <div>=</div>
                  <div>42000(TC)</div>
                </div>
              </div>
              <div className='flex flex-col mt-4'>
                <p>Packaging Cost(PC)</p>
                <div className='flex gap-3'>
                  <div>
                    <p>300.00(RM)</p>
                  </div>
                  <div>x</div>
                  <div>5%</div>
                  <div>=</div>
                  <div>2100(PC)</div>
                </div>
              </div>
              <div className='flex flex-col mt-4'>
                <p>Labour Cost(LC)</p>
                <div className='flex gap-3'>
                  <div>
                    <p>300.00(RM)</p>
                  </div>
                  <div>x</div>
                  <div>5%</div>
                  <div>=</div>
                  <div>1500(LC)</div>
                </div>
              </div>
              <div className='flex flex-col mt-4'>
                <p>Total Price (SRP)</p>
                <div className='flex gap-3'>
                  <div>
                    <p>TC</p>
                  </div>
                  <div>+</div>
                  <div>OH</div>
                  <div>+</div>
                  <div>LC</div>
                  <div>=</div>
                  <div>780.00(SRP)</div>
                </div>
              </div>
              <div className='flex flex-col mt-4'>
                <p>Price per Yield (SRP)</p>
                <div className='flex gap-3'>
                  <div>
                    <p>780.00(SRP)</p>
                  </div>
                  <div>/</div>
                  <div>6</div>
                  <div>=</div>
                  <div>150(SRP)</div>
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
