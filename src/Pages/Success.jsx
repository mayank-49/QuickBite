import React, { useEffect, useState } from 'react'
import { PropagateLoader } from "react-spinners";
const Success = () => {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },3000)
  },[])
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
    {loading ? <PropagateLoader color='#DC2626'/> : <div>
        <h2 className='text-3xl font-semibold mb-4 text-center text-red-600'>Order Successfull!</h2>
        <p className='text-lg text-center'>Your order has been succesfully placed</p>
      </div>}
      
    </div>
  )
}

export default Success
