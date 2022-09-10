import React from 'react'
import { Link } from 'react-router-dom'

const HomeBtn = ({base}) => {
  return (
    <div className='absolute inset-x-0 bottom-0 h-16 mt-16 md:mt-2'>
    <Link to={`/${base}`} >
        <div className=' bg-white mx-64 p-4 rounded-2xl '>
        <p className=' text-center font-bold'>Kembali</p>
        </div>
    </Link>  
    </div>
  )
}

export default HomeBtn