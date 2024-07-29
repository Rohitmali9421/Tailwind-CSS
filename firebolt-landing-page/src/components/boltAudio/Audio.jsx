import React from 'react'
import Card from '../Card';
import CardScrollLayout from '../CardScrollLayout';
function Deals() {

    return (
        <div className='w-full border-t'>
            <div className='w-full pt-10'>
                <div className='flex w-full justify-center'>
                    <h1 className='font-bold text-2xl md:text-4xl '>Audio </h1>
                </div>

            </div>
            <CardScrollLayout>
                <Card imageURL="https://www.fireboltt.com/cdn/shop/files/Black_01_53a058b5-640b-450b-af00-901dff5815e6_540x.png?v=1720530551" name="Maverick" />
                <Card imageURL="https://www.fireboltt.com/cdn/shop/files/Black_01_53a058b5-640b-450b-af00-901dff5815e6_540x.png?v=1720530551" name="Maverick" />
                <Card imageURL="https://www.fireboltt.com/cdn/shop/files/Black_01_53a058b5-640b-450b-af00-901dff5815e6_540x.png?v=1720530551" name="Maverick" />
                <Card imageURL="https://www.fireboltt.com/cdn/shop/files/Black_01_53a058b5-640b-450b-af00-901dff5815e6_540x.png?v=1720530551" name="Maverick" />
            </CardScrollLayout>

        </div>
    )
}

export default Deals
