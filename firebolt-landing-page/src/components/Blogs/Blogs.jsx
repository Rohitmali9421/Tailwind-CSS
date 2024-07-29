import React from 'react'
import Card from './Card';
import CardScrollLayout from '../CardScrollLayout';
function Blogs() {

    return (
        <div className='w-full pt-10 border-t'>
            <h1 className='font-bold text-2xl text-center '>Fire-Boltt Blogs  </h1>
            <p className='text-center pt-2 text-sm'>Guidance and motivation to ignite the fire in you</p>
            <CardScrollLayout>
                <Card imageURL="https://www.fireboltt.com/cdn/shop/articles/Artboard_1_1_720x.jpg?v=1721629074" Description="Things You Can Do With Fire-Boltt Dapper Smartwatch" />
                <Card imageURL="https://www.fireboltt.com/cdn/shop/articles/Artboard_1_1_720x.jpg?v=1721629074" Description="Things You Can Do With Fire-Boltt Dapper Smartwatch" />
                <Card imageURL="https://www.fireboltt.com/cdn/shop/articles/Artboard_1_1_720x.jpg?v=1721629074" Description="Things You Can Do With Fire-Boltt Dapper Smartwatch" />
                <Card imageURL="https://www.fireboltt.com/cdn/shop/articles/Artboard_1_1_720x.jpg?v=1721629074" Description="Things You Can Do With Fire-Boltt Dapper Smartwatch" />
                
            </CardScrollLayout>

        </div>
    )
}

export default Blogs
