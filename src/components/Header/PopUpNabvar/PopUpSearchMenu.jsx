import React from 'react';
import { FaSearch } from "react-icons/fa";

import moment from "moment";

const PopUpSearchMenu = () => {

    const today = moment().format('YYYY-MM-DD');
    
    return (
        <div className='flex justify-center items-center'>
            <div className="border-[1px]  py-4 px-2 rounded-full transition cursor-pointer">
                <div className="flex flex-row items-center justify-between">

                    <div className="flex flex-col  px-4">
                        <label className='text-sm font-semibold text-[#4e4e4e]'> Where</label>
                        <input type='text' name="where"  placeholder='Search destinations' className='outline-0 placeholder:text-[15px]'/>
                    </div>

                    <div className="flex flex-col  border-x-[1px] px-4 ">
                        <labe className='text-sm font-semibold text-[#4e4e4e]'>Check In</labe>
                        <input type="date" name="CheckIn" value="" placeholder='Add dates' className='outline-0 placeholder:text-[15px]'/>
                    </div>

                    <div className="flex flex-col  border-x-[1px] px-4 ">
                        <label className='text-sm font-semibold text-[#4e4e4e]'>Check Out</label>
                        <input type="date" name="checkOut" defaultValue={today} placeholder='Add dates' className='outline-0 placeholder:text-[15px]'/>
                    </div>

                    <div className="pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                        
                        <div className="flex flex-col  px-4">
                            <label className='text-sm font-semibold  border-x-[1px]'>Who</label>
                            <input type='text' name='who' placeholder='Add guests' className='outline-0 placeholder:text-[15px]'/>
                        </div>

                        <div className="p-2  bg-rose-500 rounded-full  text-white">
                            <FaSearch></FaSearch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUpSearchMenu;