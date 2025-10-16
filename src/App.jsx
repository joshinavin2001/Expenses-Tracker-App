import React from 'react'
import Navbar from './components/Navbar'
import Input from './components/Input'
import Total from './components/Total'
import Output from './components/Output'

const App = () => {
  return (
    <div className='bg-gray-400 h-screen  flex justify-center pt-10'>
        <div className='bg-white  h-fit overflow-x-hidden p-5 rounded-[10px]'>
            <Navbar />
            <Input />
            <Total />
            <Output />
        </div>
    </div>
  )
}

export default App
