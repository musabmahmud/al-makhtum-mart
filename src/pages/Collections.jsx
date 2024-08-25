import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';

const Collections = () => {

  const { products } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Option */}
      <div className="min-w-60">
        <a onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center gap-2 cursor-pointer'>FILTERS
          <img className={`h-3 sm:hidden  transition ease-in-out duration-200 ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </a>
        {/* Category Filter  */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' name="" id="" value={'Men'} /> Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' name="" id="" value={'Women'} /> Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' name="" id="" value={'Kids'} /> Kids
            </p>
          </div>
        </div>

        {/* Sub Category Filter  */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' name="" id="" value={'Topwear'} /> Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' name="" id="" value={'Bottomwear'} /> Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' name="" id="" value={'Winterwear'} /> Winterwear
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collections