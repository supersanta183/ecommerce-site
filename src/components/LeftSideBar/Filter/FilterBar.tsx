import React from 'react'

import Filter from './Filter'

const FilterBar = () => {
  return (
    <div className='h-full w-full'>
      <div className=' fixed w-2/12'><Filter/></div>
    </div>
  )
}

export default FilterBar