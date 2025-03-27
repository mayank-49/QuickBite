import React from 'react'
import logo from "../assets/logo.png"
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/searchSlice'

const Navbar = () => {

    const dispatch = useDispatch();

  return (
    <nav className='flex flex-col md:flex-row gap-2 justify-between px-4 bg-red-600 py-3 mb-4 lg:mb-8 items-center'>
        <div className='flex gap-3'>
            <div className='h-15 w-15 lg:h-20 lg:w-20'>
                <img src={logo} alt="" className='h-full w-full'/>
            </div>
            <div>
                <h3 className='text-md lg:text-xl font-bold text-black'>{new Date().toUTCString().slice(0,16)}</h3>
                <h1 className='text-3xl lg:text-5xl font-bold text-white'>QuickBite</h1>
            </div>
        </div>
        <div className='w-full md:w-auto'>
            <input onChange={(e)=>{dispatch(setSearch(e.target.value))}} type="search" name="search" id="" placeholder='Search here' autoComplete='off' className='p-3 border-white border-2 text-sm rounded-lg text-white outline-none w-full lg:w-[25vw]'/>
        </div>
    </nav>
  )
}

export default Navbar
