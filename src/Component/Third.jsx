import React from 'react'
import third from "../images/third.png"
function Third() {
  return (
    <div className='2xl:py-10'>
      <div className='w-full flex justify-center '>
        <h1 className='2xl:text-8xl text-yellow-500 2xl:font-black text-4xl lg:text-4xl xl:text-8xl  font-black p-10 text-center'>PROJECT VISION</h1>
      </div>
   
    <div className='bg-yellow-500 '>
      <div className='2xl:pt-20 px-5 2xl:px-20  flex justify-center '>
        <img src={third} className=' 2xl:w-3/4 w-full' />
        </div>
        <div className='block'>
        <h3 className='font-bold text-xl w-11/22 p-5 pb-15 2xl:text-4xl text-center 2xl:pb-20' >Our mission is to honor the heritage of the Alabay by creating a vibrant,loyalty
         and powerful community.Just as the Alabay protects its flocks,we aim to build a pack that 
          stands strong together.
         </h3>
         </div>
         </div>
    </div>
  )
}

export default Third
