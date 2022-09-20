import React from 'react'
import { Link } from 'react-router-dom'

const Error = ({height,btnText,mainText,link}) => {
  return (
    <>
        <div className="mt-10">
            <div className="group mb-3 h-72 w-[100%]">
                <div className="items-center justify-center flex ">
                    <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png" alt="" className={`h-${height} mt-5`} />
                </div>
                <div className="text-center">
                    <h1 className='font-medium my-4'>
                        {mainText}
                        </h1>
                        {
                            btnText &&
                        <Link to={link} className="text-blue-500 bg-blue-100 border-blue-300 border rounded-full py-2 px-3">
                    {btnText}
                </Link>
                        }
                </div>
            </div>
         </div>
    </>
  )
}

export default Error