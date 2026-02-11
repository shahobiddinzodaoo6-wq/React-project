import React from 'react'

const Page = (prop) => {
    return (
        <>
            <div className='mt-[130px] flex justify-center gap-[50px] max-sm:flex-col-reverse max-sm:items-center'>
                <div className='w-[480px] max-sm:w-[380px]'>
                    <h1 className='hidden max-sm:block max-sm:text-[28px]  max-sm:text-[#494B44]'>Оборудование</h1>
                    <h1 className='text-[23px] text-[#0E9E2F] max-sm:hidden'>{prop.textH}</h1>
                    <p className='text-[#92938F] mt-[30px]'>{prop.textP}</p>
                    <p className='text-[#92938F] mt-[20px]'>{prop.textP2}</p>
                </div>
                <div>
                    <button className='hidden max-sm:block max-sm:w-[420px] max-sm:mb-[40px] max-sm:h-[45px] max-sm:boder-none max-sm:bg-[#0E9E2F] max-sm:text-[white]'>Наше производство</button>
                 <img className='w-[760px] h-[400px] max-sm:w-[420px] max-sm:h-[250px] max-sm:mr-[50px]' src={prop.image} alt="" />
                <img className='hidden max-sm:block  max-sm:w-[420px] max-sm:h-[250px] max-sm:mt-[30px]' src={prop.image4} alt="" />

                </div>

            </div>
            <div className='mt-[60px] flex justify-center gap-[50px] max-sm:hidden'>
                <img className='w-[400px] h-[220px]' src={prop.image2} alt="" />
                <img className='w-[400px] h-[220px]' src={prop.image3} alt="" />
                <img className='w-[400px] h-[220px]' src={prop.image4} alt="" />
            </div>
        </>
    )
}

export default Page