import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'



const Navbar = ({navigation}) => {

  const [searchFocus, setSearchFocus] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const {pathname} = useLocation();

  useEffect(() => {
   setDropdown(true);
  }, [pathname])

  return (
    <>
    <nav className={` sticky top-0 py-1 shadow-md bg-white ${searchFocus ? 'z-[51]':'z-[10]' } `}>
      <nav className='flex  mx-auto screenSize items-center'>
        <div className='basis-1/12'>
          <Link to="/">
          <h1  
            className='text-2xl mr-5 text-red-700 headingQuora cursor-pointer'>Quora</h1>
          </Link>
        </div>
        {/* navbar items */}
        <div id="icons" className="basis-11/12 flex justify-evenly items-center">

          
          <Link to="/" 
           className={`text-2xl text-gray-500 ${navigation === 'home' && 'activeClass'} text-center w-[35px]  transition duration-500  cursor-pointer`}>
              <ion-icon name="home"></ion-icon>
          </Link>

          
          <Link to="/following" 
           className={`text-2xl text-gray-500 ${navigation === 'following' && 'activeClass'} text-center  transition duration-500  cursor-pointer w-[35px]`}>
            <ion-icon name="newspaper-outline"></ion-icon>
          </Link>

          <Link to="/questions" 
           className={`text-2xl text-gray-500 ${navigation === 'answer' && 'activeClass'} text-center  transition duration-500  cursor-pointer w-[35px]`}>
            <ion-icon name="create-outline"></ion-icon>
          </Link>

          <span 
           className={`text-2xl text-gray-500 ${navigation === 'spaces' && 'activeClass'} text-center  transition duration-500  cursor-pointer w-[35px]`}>
            <ion-icon name="people-outline"></ion-icon>
          </span>

          <span 
           className={`text-2xl text-gray-500 ${navigation === 'notification' && 'activeClass'} transition duration-500 cursor-pointer text-center w-[35px]`}>
            <ion-icon name="notifications-outline"></ion-icon>
          </span>

          
          <form className="flex">   
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input 
                    type="search" 
                    id="default-search" 
                    onFocus={()=>setSearchFocus(true)}
                    onBlur= {()=>setSearchFocus(false)}
                    className={`${ searchFocus ? 'w-[600px]': 'search-item'} p-2 pl-10 flex-shrink  text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:border-white active:border-white `} 
                    placeholder="Search Quora" 
                    required/>
                </div>
            </form>

            <span className={`${searchFocus ? 'hidden' : 'flex'} `}>
              <button className='bg-gray-100 py-1 border-2 border-gray-300 shrink-0  px-3 rounded-full text-sm text-gray-500'>Try Quora +</button>
            </span>

            <span onClick={()=>setDropdown(!dropdown)} className={` ${searchFocus ? 'hidden' : 'flex'} text-2xl text-gray-500 text-center w-[35px] `}>
              <div className="relative ">
                <span className='cursor-pointer rounded-full '>
                  <ion-icon name="person-outline"></ion-icon>
                </span>
                    {/* dropdown */}
                <div onMouseEnter={()=>setDropdown(false)} onMouseLeave={()=>setDropdown(true)} className={`${dropdown?'hidden': 'absolute top-9 -right-[100px] -left-[100px] shadow-2xl'} `}>
                    <div className=" z-10 w-64 bg-white rounded divide-y divide-gray-100 shadow">

                        <div className="py-3 px-4 text-sm text-gray-900 ">
                          <Link to='/profile' onClick={()=>setDropdown(false)} className='cursor-pointer'>
                          <div className="">
                            <img src="https://www.xtrafondos.com/thumbs/1_6841.jpg" alt="" className='h-10 rounded-full w-10' />
                            <div className="flex justify-between items-center">
                              <h1 className='text-xl font-bold mt-2'>Joshua Clifford</h1>
                              <span className='text-xl font-bold flex items-center mt-2'>
                              <ion-icon name="chevron-forward-outline"></ion-icon>
                              </span>
                            </div>
                          </div>
                          </Link>
                        </div>

                        <ul className="py-1 text-sm text-gray-700 " aria-labelledby="dropdownUserAvatarButton">

                          <li className='dropdownItems'>
                            <span className='flex mr-3'>
                            <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                            </span>
                            <span>
                              Messages
                            </span>
                          </li>

                          <li className='dropdownItems'>
                            <span className='flex mr-3'>
                            <ion-icon name="megaphone-outline"></ion-icon>
                            </span>
                            <span>
                              Create Ad
                            </span>
                          </li>

                          <li className='dropdownItems'>
                            <span className='flex mr-3'>
                            <ion-icon name="cash-outline"></ion-icon>
                            </span>
                            <span>
                              Monetization
                            </span>
                          </li>

                          <li className='dropdownItems'>
                            <span className='flex mr-3'>
                            <ion-icon name="stats-chart-outline"></ion-icon>
                            </span>
                            <span>
                              Your content & stats
                            </span>
                          </li>

                          <li className='dropdownItems'>
                            <span className='flex mr-3'>
                            <ion-icon name="bookmarks-outline"></ion-icon>
                            </span>
                            <span>
                              Bookmarks
                            </span>
                          </li>

                          <li className='dropdownItems'>
                            <span className='flex mr-3'>
                            <ion-icon name="clipboard-outline"></ion-icon>
                            </span>
                            <span>
                              Drafts
                            </span>
                          </li>

                          <li className='dropdownItems'>
                            <span className='flex mr-3'>
                            <ion-icon name="add-outline"></ion-icon>
                            </span>
                            <span>
                              Try Quora +
                            </span>
                          </li>

                          
                        </ul>

                        <div className="py-1">
                        <ul className="py-1 text-sm font-medium">
                          <li className='dropdownSmall'>
                              Settings
                          </li>
                          <li className='dropdownSmall'>
                              Languages
                          </li>
                          <li className='dropdownSmall'>
                              Help
                          </li>
                          <li className='dropdownSmall'>
                              Logout
                          </li>
                        </ul>
                        </div>
                        <div className="bg-gray-100   border">
                        <div className="linkSection mt-2">
                            <span className='linkItem'>About</span> .  <span className='linkItem'>Careers</span> .  <span className='linkItem'>Terms</span> .  <span className='linkItem'>Privacy</span> .  <span className='linkItem'>Acceptable Use</span> .  <span className='linkItem'>Business</span> .  <span className='linkItem'>Press</span> .  <span className='linkItem'>Your Ad Choices</span> 
                        </div>
                        </div>
                    </div>
                    {/* dropdown */}
                  
                </div>
              </div>
              {/* </Link> */}
            </span>

          <span className={`text-2xl text-gray-500 text-center w-[35px] ${searchFocus ? 'hidden' : 'flex'}`} >
            <Link to="/login"><ion-icon name="globe-outline"></ion-icon></Link>
          </span>

          <span className='shrink-0'>
            <button className='py-1 px-5 rounded-full bg-red-800  text-white flex justify-between items-center'>
              <span className='text-sm'>
              Add question 
              </span>
            </button>
          </span>

        </div>
      </nav>
    </nav>
      <div id="defaultModal" tabindex="-1" aria-hidden="true" data-modal-show="true" className={`${!searchFocus ? 'hidden': ''} bg-slate-900 bg-opacity-90 flex justify-center items-center transition-all ease-in-out top-0 right-0 bottom-0 left-0 z-50 h-screen fixed`}></div>
    </>
  )
}

export default Navbar 