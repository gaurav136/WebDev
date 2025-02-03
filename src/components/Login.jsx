import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className='min-h-screen  flex justify-center bg-black items-center'>
                <div className='flex  items-center  justify-center  w-[500px] h-full m-5 bg-black border-2 border-white rounded-lg'>
                    <div className=' flex  justify-center items-center m-10'>
                        <form className=' w-[400px]' action="">
                            <h1 className='flex justify-center text-white text-[20px] font-bold '>Sign in to your account</h1>
                            <label className='flex text-white font-semibold' htmlFor="email" >Email</label>
                            <input className='p-3 w-full  mt-2 border-2 border-black rounded-full' type="text" />
                            <label className='flex text-white font-semibold mt-5' htmlFor="">Password</label>
                            <input className='p-3 w-full   mt-2 border-2 border-black rounded-full' type="text" />

                            <button className='item-center mt-7 justify-center flex text-white border-2 p-3 w-full font-bold rounded-md bg-indigo-600'>
                                Login
                            </button>
                            <div className='flex items-center justify-between'>
                                <p className='inline text-white mt-5'>Not register?</p>
                                <Link to="/register">
                                    <p className='inline   text-white mt-5'>Create Account</p>
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Login
