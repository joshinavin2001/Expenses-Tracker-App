import React from 'react'
import {  useSelector } from 'react-redux'


const Output = () => {
    const allInputs=useSelector((state)=>state.expenses.tasks)
  return (
    <div className='mt-4'>
     {allInputs.map((t)=>{
        return <div key={t.id} className='flex pb-2 px-1 justify-between'>
            <h2 className='capitalize font-semibold break-words w-28'> {t.title} </h2>
            <h2 className='font-semibold text-start break-words w-20'>{t.category} </h2>
            <h2 className='font-semibold '>₹ {t.amount} </h2>
        </div>
     })}
    </div>
  )
}

export default Output
