import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Header from './Header';

const About = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            {/* <Link to='/about'> */}
            <div className='mx-[10%] p-5 min-w-screen bg-black min-h-screen text-white text-[20px]'>
                <div className='text-[50px] underline flex justify-center p-5 font-bold font-serif text-orange-600'>
                    <p className='my-20 p-10'>This is a StartUp Lead by Code-Dum</p>
                </div>
                <div className='text-[25px] h-full p-5 flex flex-col justify-center font-bold font-serif border-y-2 '>
                    <div className='flex '>
                        <h1 className='opacity-50'>We aim to provide a full suite of Agricultural Mobility Solutions that meet the evolving needs of Modern Agriculture</h1>

                    </div>
                    <div className='flex w-full  m-10 p-5'>
                        <div className=' p-5 flex flex-1 flex-col justify-center items-center'>
                            <h1 className='text-red-500 p-5 text-[50px]'>Mission</h1>
                            <p className='p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda ad alias sed recusandae excepturi quos.</p>
                            <p className='p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda ad alias sed recusandae excepturi quos.</p>
                            <p className='p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda ad alias sed recusandae excepturi quos.</p>
                            <p className='p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda ad alias sed recusandae excepturi quos.</p>
                        </div>
                        <div className=' flex flex-col flex-1 justify-center items-center'>
                            <h1 className='text-green-500 p-5 text-[50px]'>Vision</h1>
                            <p className='p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda ad alias sed recusandae excepturi quos.</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-20'>
                    Our Team
                </div>
                <div className='flex m-20 justify-center items-center gap-x-36'>
                    <div className='flex flex-col  border-2 w-96 h-full p-5 m-5'>
                        <img src="https://i.pinimg.com/736x/91/8b/20/918b20dc0aa716e09fd0a58f9dd8e720.jpg" alt="" />
                        <h1 className='flex justify-center m-5'>Raj Chincholkar</h1>
                        <div className='flex mt-auto items-center justify-between gap-5 '>

                            <a target="_blank" href="https://www.linkedin.com/in/raj-chincholkar-a45206201/">
                                <img className='w-[50px] h-[50px]' src="https://i.pinimg.com/736x/22/3a/c9/223ac991e51c66c446d1c7590193419a.jpg" alt="" />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/raj-chincholkar-a45206201/">
                                <img className='w-[50px] h-[50px]' src="https://i.pinimg.com/736x/b2/f8/28/b2f828513f21444829a619ce563d4d4e.jpg" alt="" />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/raj-chincholkar-a45206201/">
                                <img className='w-[50px] h-[50px]' src="https://i.pinimg.com/736x/91/8b/20/918b20dc0aa716e09fd0a58f9dd8e720.jpg" alt="" />
                            </a>

                        </div>
                    </div>
                    <div className='flex flex-col  border-2 w-96 h-96 p-5'>
                        <img src="https://i.pinimg.com/736x/91/8b/20/918b20dc0aa716e09fd0a58f9dd8e720.jpg" alt="" />
                        <h1 className='flex justify-center m-5'>Gaurav Chincholkar</h1>
                        <div className='flex mt-auto items-center justify-between gap-5 '>

                            <a target="_blank" href="https://www.linkedin.com/in/raj-chincholkar-a45206201/">
                                <img className='w-[50px] h-[50px]' src="https://i.pinimg.com/736x/22/3a/c9/223ac991e51c66c446d1c7590193419a.jpg" alt="" />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/raj-chincholkar-a45206201/">
                                <img className='w-[50px] h-[50px]' src="https://i.pinimg.com/736x/b2/f8/28/b2f828513f21444829a619ce563d4d4e.jpg" alt="" />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/raj-chincholkar-a45206201/">
                                <img className='w-[50px] h-[50px]' src="https://i.pinimg.com/736x/91/8b/20/918b20dc0aa716e09fd0a58f9dd8e720.jpg" alt="" />
                            </a>

                        </div>
                    </div>
                </div>

                <div>

                </div>

            </div>
            {/* </Link> */}
            {/* <Outlet /> */}
        </>

    )
}

export default About
