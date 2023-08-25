
import { FaSearch } from "react-icons/fa";

import moment from "moment";
import { useState } from "react";

const PopUpSearchMenu = () => {

    const today = moment().format('YYYY-MM-DD');

    const [checkin, setCheckIn] = useState("");

    const handleDate = (e) => {
        const date = e.target.value;
        console.log(date);
    }
    
    return (
        <div className='w-full md:w-[900px] mx-auto'>
            <div className="border-[1px]  rounded-full transition cursor-pointer">
                <div className="flex flex-row items-center justify-between">

                    <div className="group flex flex-col   py-2.5 px-6 hover:bg-[#ebeaea] rounded-full focus-within:bg-[#fff]">
                        <label className='text-sm font-semibold text-[#4e4e4e]'> Where</label>
                        <input type='text' name="where"  placeholder='Search destinations' className='w-full group-hover:bg-[#ebeaea] focus:bg-[#fff] outline-0 placeholder:text-[15px]'/>
                    </div>

                    <label className=' text-slate-400'>|</label>
                    <div className="group flex flex-col   py-2.5 px-6 hover:bg-[#ebeaea] rounded-full">
                        <labe className='text-sm font-semibold text-[#4e4e4e]'>Check In</labe>
                        <input type="date" name="CheckIn" defaultValue={today} onChange={handleDate}  placeholder='Add dates' className='w-full group-hover:bg-[#ebeaea] outline-0 placeholder:text-[15px]'/>
                    </div>

                    <label className=' text-slate-400'>|</label>

                    <div className="group flex flex-col   py-2.5 px-6 hover:bg-[#ebeaea] rounded-full">
                        <label className='text-sm font-semibold text-[#4e4e4e]'>Check Out</label>
                        <input type="date" name="checkOut" placeholder='Add dates' className='w-full group-hover:bg-[#ebeaea] outline-0 placeholder:text-[#6e6e6e] placeholder:text-[15px]'/>
                    </div>
                    
                    <label className=' text-slate-400'>|</label>
                    <div className="group  text-gray-600 flex flex-row items-center gap-3 py-2.5 px-6 hover:bg-[#ebeaea] rounded-full">
                        
                        <div className="flex flex-col  px-3">
                            <label className='text-sm font-semibold'>Who</label>
                            <input type='text' name='who' placeholder='Add guests' className='w-full group-hover:bg-[#ebeaea] outline-0 placeholder:text-[15px]'/>
                        </div>

                        <div className=" bg-rose-500 rounded-full  text-white flex items-center justify-center py-2.5 px-3 gap-2">
                            <FaSearch></FaSearch><span>Search</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUpSearchMenu;