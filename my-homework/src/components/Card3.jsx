import React from 'react'

const Card3 = (prop) => {
    return (
        <div className='w-[360px] '>
            <img src={prop.image} alt="" />
            <h1 className='text-[22px] text-[#494B44] mt-[20px]'>{prop.text}</h1>
            <p className='mt-[20px] text-[#92938F]'>Оборудование предприятия поставляется
                от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции</p>
            <p className='mt-[20px] text-[#0E9E2F]'>25.12.2021</p>
        </div>
    )
}

export default Card3    