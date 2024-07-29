import React from 'react'

import CardScrollLayout from '../CardScrollLayout';
import Card from '../Card';
function NewLaunches() {
  
  return (
    <div className='w-full pt-10'>
      <div className='flex w-full justify-center'>
        <h1 className='font-bold text-2xl md:text-4xl '>New</h1>
        <h1 className='font-bold text-2xl md:text-4xl pl-2 text-orange-600'>Launches</h1>
      </div>
      <div className='mx-auto border border-black mt-2 rounded-full bg-gray-500 w-40 '></div>
      <div className=' w-full flex justify-center gap-3  mt-3'>
        <h1 className='md:text-xl text-sm pb-1 '>Recently Launched</h1>
        <h1 className='md:text-xl text-sm  pb-1   text-gray-600'>Upcoming Launches</h1>
      </div>
      <div className=' overflow-x-clip mt-8 mx-4 '>
        <CardScrollLayout>
          <Card imageURL="https://www.fireboltt.com/cdn/shop/files/Black_01_53a058b5-640b-450b-af00-901dff5815e6_540x.png?v=1720530551" name="Maverick" />
          <Card imageURL="https://www.fireboltt.com/cdn/shop/files/Black_01_53a058b5-640b-450b-af00-901dff5815e6_540x.png?v=1720530551" name="Maverick" />
          <Card imageURL="https://www.fireboltt.com/cdn/shop/files/Black_01_53a058b5-640b-450b-af00-901dff5815e6_540x.png?v=1720530551" name="Maverick" />
          <Card imageURL="https://www.fireboltt.com/cdn/shop/files/Black_01_53a058b5-640b-450b-af00-901dff5815e6_540x.png?v=1720530551" name="Maverick" />
        </CardScrollLayout>
        
      </div>
    </div>
  )
}

export default NewLaunches
