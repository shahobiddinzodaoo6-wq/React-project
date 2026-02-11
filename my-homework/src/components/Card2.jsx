import React from 'react'
import strelka from '../assets/Group 1492.svg'



const Card2 = () => {
  return (
    <div className='w-[400px] h-[430px] bg-[#F6F6F7]'>
        <div className='w-[370px] ml-[30px]'>
            <h1 className='text-[26px] mt-[30px] text-[#494B44]'>Водитель лесовоза</h1>
            <h1 className='text-[#0E9E2F] mt-[23px] text-[23px]'>З.п. от 50 000 ₽</h1>
            <p className='mt-[25px] text-[#92938F] '>Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции, которая поставляется в 8 регионов России и 14 стран мира. </p>
            <div className='mt-[50px] flex gap-[200px]'>
                <h1 className='text-[#0E9E2F] text-[20px]'>Подробнее</h1>
                <img src={strelka} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Card2