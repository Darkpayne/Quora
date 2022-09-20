import React from 'react'

const MainSpaces = () => {
  return (
    <>
        <section className="border border-gray-300 bg-white">
            <div className="border-gray-300 py-2 pl-4">
                <h1 className=' font-medium '>Welcome to Spaces!</h1>
                <p className='text-sm text-gray-500'>Follow Spaces to explore your intrest on Quora.</p>
            </div>
            <div className="py-2 my-2 pl-4 flex space-x-3">
                <button className='text-sm text-blue-500 font-medium py-1 px-3 rounded-full border-blue-500 flex items-center border'>
                    <span className='flex mr-1 h-4 items-center w-4 rounded-full border-2 border-blue-500'><ion-icon name="add-outline"></ion-icon></span>
                    <span>Create a Space</span>
                </button>
                <button className='text-sm text-blue-500 font-medium py-1 px-3 rounded-full border-blue-500 flex items-center border'>
                    <span className='flex mr-1 h-4 items-center w-4 rounded-full border-2 border-blue-500'><ion-icon name="compass"></ion-icon></span>
                    <span>Discover Spaces</span>
                </button>
            </div>
        </section>

        <h1 className='text-2xl font-bold my-5'>Discover Spaces</h1>

        <p className='font-medium my-5'>Spaces you might like</p>

        <section>
            <div className="grid grid-cols-4 gap-2">

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_10502.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_10207.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Personal Growth</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_502.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_10297.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Good Flowers</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_442.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_207.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>X-Box Games</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_503.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1029.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Traveling</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_1502.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1027.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Music</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_902.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_10197.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Bruno Mars</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_10533.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1307.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>S.M.T.P</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_112.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1697.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>REACT APP</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-5 hover:bg-gray-200 cursor-pointer">
                <span className='my-1 mr-2'>View more </span>
                <span className='flex'><ion-icon name="chevron-down-outline"></ion-icon></span>
            </div>
        </section>

        <p className='font-medium my-5'>Future of Technology</p>

        <section>
            <div className="grid grid-cols-4 gap-2">

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_10502.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_10207.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Personal Growth</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_502.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_10297.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Good Flowers</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_442.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_207.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>X-Box Games</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_503.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1029.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Traveling</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_1502.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1027.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Music</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_902.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_10197.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Bruno Mars</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_10533.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1307.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>S.M.T.P</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_112.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1697.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>REACT APP</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-5 hover:bg-gray-200 cursor-pointer">
                <span className='my-1 mr-2'>View more </span>
                <span className='flex'><ion-icon name="chevron-down-outline"></ion-icon></span>
            </div>
        </section>

        

        <p className='font-medium my-5'>Spaces you might like</p>

        <section>
            <div className="grid grid-cols-4 gap-2">

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_10502.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_10207.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Personal Growth</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_502.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_10297.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Good Flowers</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_442.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_207.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>X-Box Games</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_503.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1029.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Traveling</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_1502.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1027.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Music</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_902.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_10197.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Bruno Mars</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_10533.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1307.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>S.M.T.P</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_112.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1697.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>REACT APP</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-5 hover:bg-gray-200 cursor-pointer">
                <span className='my-1 mr-2'>View more </span>
                <span className='flex'><ion-icon name="chevron-down-outline"></ion-icon></span>
            </div>
        </section>

        <p className='font-medium my-5'>Future of Technology</p>

        <section>
            <div className="grid grid-cols-4 gap-2">

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_10502.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_10207.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Personal Growth</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_502.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_10297.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Good Flowers</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_442.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_207.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>X-Box Games</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_503.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1029.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Traveling</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_1502.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1027.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Music</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_902.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_10197.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Bruno Mars</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_10533.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1307.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>S.M.T.P</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_112.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1697.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>REACT APP</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-5 hover:bg-gray-200 cursor-pointer">
                <span className='my-1 mr-2'>View more </span>
                <span className='flex'><ion-icon name="chevron-down-outline"></ion-icon></span>
            </div>
        </section>


        <p className='font-medium my-5'>Spaces you might like</p>

        <section>
            <div className="grid grid-cols-4 gap-2">

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_10502.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_10207.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Personal Growth</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_502.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_10297.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Good Flowers</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_442.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_207.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>X-Box Games</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_503.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1029.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Traveling</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_1502.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1027.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Music</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_902.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_10197.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Bruno Mars</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_10533.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1307.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>S.M.T.P</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_112.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1697.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>REACT APP</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-5 hover:bg-gray-200 cursor-pointer">
                <span className='my-1 mr-2'>View more </span>
                <span className='flex'><ion-icon name="chevron-down-outline"></ion-icon></span>
            </div>
        </section>

        <p className='font-medium my-5'>Future of Technology</p>

        <section>
            <div className="grid grid-cols-4 gap-2">

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_10502.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_10207.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Personal Growth</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_502.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_10297.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Good Flowers</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_442.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_207.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>X-Box Games</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_503.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1029.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Traveling</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_1502.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1027.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Music</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_902.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_10197.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>Bruno Mars</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_10533.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1307.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>S.M.T.P</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>

                <div className="relative bg-white hover:shadow-xl shadow cursor-pointer rounded-xl">
                    <img src="https://www.xtrafondos.com/thumbs/1_112.jpg" alt="" className='rounded-t-xl h-16 w-full border'/>
                    <div className=" absolute inset-x-16 top-10 shadow-lg bg-white rounded-lg w-10 h-10 flex justify-center items-center p-1">
                        <img src="https://www.xtrafondos.com/thumbs/1_1697.jpg" alt="" className='h-[100%] rounded-lg'/>
                    </div>
                    <div className="  h-44">
                        <h1 className='mt-5 text-center font-medium'>REACT APP</h1>
                        <p className='text-sm text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi provident </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-5 hover:bg-gray-200 cursor-pointer">
                <span className='my-1 mr-2'>View more </span>
                <span className='flex'><ion-icon name="chevron-down-outline"></ion-icon></span>
            </div>
        </section>


    </>
  )
}

export default MainSpaces