import React from 'react'
import Button from './Button'

const Card = (prop) => {
    return (
        <div className='bg-[#535353] rounded-tr-[60px] text-[white] pl-[20px] pt-[20px] '>
            <img src={prop.image} alt="" />
            <h1 className='text-[20px] mt-[10px] ml-[30px]'>{prop.textH}</h1>
            <p className='mt-[8px] mb-[30px] text-[#D2D2D2] pl-[30px] pr-[30px]'>{prop.textp}</p>
            <Button text='Подробнее о товаре' bg='#0E9E2F' />
        </div>
    )
}

export default Card