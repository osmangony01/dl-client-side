import React from 'react';
import Navbar from './Navbar/Navbar';
import PopUpNavbar from './PopUpNabvar/PopUpNavbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <PopUpNavbar></PopUpNavbar>
            </div>
        // <div className='flex justify-between items-center px-10 py-4 border-b border-[#ece9e9]'>
        //     <div className='flex items-center justify-center'>
        //         <img src={logo} alt='navbar-logo' className='h-[32px] md:hidden' />
        //         <img src={logo2} alt='navbar-logo' className='h-[32px] hidden md:block' />
        //     </div>
        //     <div className="border-[1px]  py-2.5 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
        //         <div className="flex flex-row items-center justify-between">
                    
        //             <div className="text-sm font-semibold text-[#4e4e4e] px-4">
        //                 Anywhere
        //             </div>

        //             <div className="text-sm font-semibold text-[#4e4e4e] border-x-[1px] px-4 text-center">
        //                 Any week
        //             </div>
        //             <div className="text-sm font-semibold text-[#8b8b8b]   px-4 text-center">
        //                 Add guests...
        //             </div>

        //             <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
        //                 <div className="hidden sm:block"></div>
        //                 <div className="p-2  bg-rose-500 rounded-full  text-white">
        //                     {/* <BiSearch className='font-bold'></BiSearch> */}
        //                     <FaSearch></FaSearch>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className='hidden md:block'>
        //         <div className="flex flex-row items-center gap-3 ">
        //             <div className=' text-[15px] text-[#4e4e4e] font-semibold py-2.5 px-4 rounded-[32px] hover:bg-[#f7f7f7] cursor-pointer transition'>
        //                 Airbnb your home
        //             </div>
        //             <div className='flex items-center flex-row gap-3 border-[1px] border-[#d6d4d4] p-4 md:py-1 md:px-2 rounded-full  hover:shadow-md cursor-pointer transition'>
        //                 <AiOutlineMenu />
        //                 <div >
        //                     <img src={avatar} className="rounded-full h-[30px] w-[30px]" alt='avatar' />
        //                 </div>

        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Header;
