import React from 'react'

function FormHeader({ setHeader, header}) {

  return (
    <div className='bg-pink-100 p-2 flex flex-col'>
        <input value={header} type="text" className='text-2xl focus:border-none focus:outline-none'  onChange={(e)=>setHeader(e.target.value)}/>
        <div className='pb-10'>Form Description</div>
    </div>
  )
}

export default FormHeader