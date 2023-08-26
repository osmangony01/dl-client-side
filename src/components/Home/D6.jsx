import { FaSearch } from "react-icons/fa";
import NavLogo from "../Header/Navbar/NavLogo";
import UserMenu from "../Header/Navbar/UserMenu";


import moment from "moment";
import { useEffect, useRef, useState } from "react";


const D6 = () => {

    const refOne = useRef(null);

    const today = moment().format('YYYY-MM-DD');

    // const [checkin, setCheckIn] = useState("");

    const handleDate = (e) => {
        const date = e.target.value;
        console.log(date);
    }
    const [showPopUPNav, setShowPopUPNav] = useState(false);


    const [location, setLocation] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guest, setGuest] = useState(0);

    const [fillColor, setFillColor] = useState(false)
    const [fillLocation, setFillLocation] = useState(false);
    const [fillCheckIn, setFillCheckIN] = useState(false);
    const [fillCheckOut, setFillCheckOut] = useState(false);
    const [fillGuest, setFillGuest] = useState(false);
    const [inputFill, setInputFill] = useState(false);
    const [inputType, setInputType] = useState('text');

    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    const handleCheckInDate = (e) => {

    }
    const handleCheckOutDate = (e) => {

    }

    const handleFillLocationColor = () => {
        setInputType('text');
        setFillColor(true);
        setFillLocation(true);
        setInputFill(true);

        setFillCheckIN(false);
        setFillCheckOut(false);
        setFillGuest(false);

    }
    const handleFillCheckInColor = () => {
        setInputType('date');
        setFillColor(true);
        setInputFill(true);
        setFillCheckIN(true);

        setFillCheckOut(false);
        setFillGuest(false);
        setFillLocation(false);

    }
    const handleFillCheckOutColor = () => {
        setInputType('date');
        setFillColor(true);
        setInputFill(true);
        setFillCheckOut(true);

        setFillCheckIN(false);
        setFillGuest(false);
        setFillLocation(false);

    }
    const handleFillGuestColor = () => {
        setInputType('text');
        setFillColor(true)
        setInputFill(true);
        setFillGuest(true);

        setFillCheckIN(false);
        setFillCheckOut(false);
        setFillLocation(false);

    }





    //const refOne = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleHidePopUp, true)
    }, [])
    console.log(location);

    const handleHidePopUp = (e) => {

        if (!refOne.current.contains(e.target)) {

            setFillColor(false)
            setInputFill(false);
            setFillGuest(false);
            setFillCheckIN(false);
            setFillCheckOut(false);
            setFillLocation(false);
            setShowPopUPNav(false);
        }
    }

    return (
        <div>
            <div className='flex justify-between items-center px-10 py-4 border-b border-[#ece9e9]'>
                <NavLogo></NavLogo>
                <div>
                    <div onClick={() => setShowPopUPNav(!showPopUPNav)} className="border-[1px]  py-2.5 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
                        <div className="flex flex-row items-center justify-between">
                            <div className="text-sm font-semibold text-[#4e4e4e] px-4">
                                Anywhere
                            </div>
                            <div className="text-sm font-semibold text-[#4e4e4e] border-x-[1px] px-4 text-center">
                                Any week
                            </div>
                            <div className="text-sm font-semibold text-[#8b8b8b]   px-4 text-center">
                                Add guests...
                            </div>
                            <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                                <div className="hidden sm:block"></div>
                                <div className="p-2  bg-rose-500 rounded-full  text-white">
                                    <FaSearch></FaSearch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <UserMenu></UserMenu>
            </div>

            {/* POP UP Nav */}
            {
                showPopUPNav && <div className="h-screen w-full fixed top-0 left-0 bg-black bg-opacity-20">

                    <div className="w-full bg-white" ref={refOne}>
                        <div className='flex justify-between items-center px-10 py-4'>
                            <NavLogo></NavLogo>
                            <div className='flex justify-center items-center gap-4 text-lg text-[#535353]'>
                                <div className="cursor-pointer text-black font-semibold">Stays</div>
                                <div className="cursor-pointer">Experiences</div>
                                <div className="cursor-pointer">Online Experiences</div>
                            </div>
                            <UserMenu></UserMenu>
                        </div>
                        <div>
                            <div className='w-full md:w-[900px] mx-auto pb-4 '>
                                <div className={`border-[1px] shadow-sm rounded-full transition cursor-pointer ${fillColor && 'bg-[#ebeaea]'}`}>
                                    <div className="flex flex-row items-center justify-between">

                                        <div className={`group flex flex-col   py-1 px-6  rounded-full ${fillLocation == true ? ' bg-white shadow-xl hover:bg-white' : 'hover:bg-[#ebeaea]'}`} onClick={handleFillLocationColor}>
                                            <label className='text-sm font-semibold text-[#4e4e4e]'> Where</label>
                                            <input type='text' name="where" placeholder='Search destinations' className={`w-full  group-hover:bg-[#ebeaea]  border-0 outline-0 placeholder:text-[15px] ${inputFill == false ? 'bg-white' : fillLocation == true ? 'bg-white group-hover:bg-white' : 'bg-[#ebeaea]  group-hover:bg-[#ebeaea]'} `} />
                                        </div>

                                        <label className=' text-slate-400'>|</label>
                                        <div className={`group flex flex-col   py-1 px-6  rounded-full ${fillCheckIn == true ? ' bg-white shadow-xl hover:bg-white' : 'hover:bg-[#ebeaea]'}`} onClick={handleFillCheckInColor}>
                                            <labe className='text-sm font-semibold text-[#4e4e4e]'>Check In</labe>
                                            <input type={inputType} name="CheckIn" onChange={handleDate} placeholder='Add dates' className={`w-full  group-hover:bg-[#ebeaea] border-0 outline-0 placeholder:text-[15px] ${inputFill == false ? 'bg-white' : fillCheckIn == true ? 'bg-white group-hover:bg-white' : 'bg-[#ebeaea]  group-hover:bg-[#ebeaea]'}`} />
                                        </div>

                                        <label className=' text-slate-400'>|</label>

                                        <div className={`group flex flex-col   py-1 px-6  rounded-full ${fillCheckOut == true ? ' bg-white shadow-xl hover:bg-white' : 'hover:bg-[#ebeaea]'}`} onClick={handleFillCheckOutColor}>
                                            <label className='text-sm font-semibold text-[#4e4e4e]'>Check Out</label>
                                            <input type={inputType} name="checkOut" placeholder='Add dates' className={`w-full  group-hover:bg-[#ebeaea] border-0 outline-0 placeholder:text-[15px] ${inputFill == false ? 'bg-white' : fillCheckOut == true ? 'bg-white group-hover:bg-white' : 'bg-[#ebeaea]  group-hover:bg-[#ebeaea]'}`} />
                                        </div>

                                        <label className=' text-slate-400'>|</label>

                                        <div className={`group relative text-gray-600 flex flex-row items-center gap-3 py-1 px-6 rounded-full ${fillGuest == true ? ' bg-white shadow-xl hover:bg-white' : 'hover:bg-[#ebeaea]'}`} onClick={handleFillGuestColor}>

                                            <div className="flex flex-col  px-3">
                                                <label className='text-sm font-semibold'>Who</label>
                                                <input type='text' name='who' placeholder='Add guests' className={`w-full  group-hover:bg-[#ebeaea] border-0 outline-0 placeholder:text-[15px] ${inputFill == false ? 'bg-white' : fillGuest == true ? 'bg-white group-hover:bg-white' : 'bg-[#ebeaea]  group-hover:bg-[#ebeaea]'}`} />
                                            </div>
                                            <div className="absolute right-0 top-16 z-10">
                                                <ul className="menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-box w-[400px]">
                                                    <li><span>User</span></li>
                                                    <li><a>Sign Out</a></li>
                                                </ul>
                                            </div>

                                                <div onClick={() => setShowPopUPNav(!showPopUPNav)} className={`bg-rose-600 rounded-full font-semibold text-white flex items-center justify-center gap-2 ${fillGuest == true ? 'py-2.5 px-2.5' : 'py-3.5 px-4'}`}>
                                                    <FaSearch></FaSearch> {fillColor && <span>Search</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
            }
                </div>
    );
};

            export default D6;


            {/* <div>
<div className='w-full md:w-[900px] mx-auto '>
    <div className="border-[1px]  rounded-full transition cursor-pointer bg-slate-300">
        <div className="flex flex-row items-center justify-between">

            <div className="group flex flex-col   py-2.5 px-6 hover:bg-[#ebeaea] rounded-full focus-within:bg-[#fff]">
                <label className='text-sm font-semibold text-[#4e4e4e]'> Where</label>
                <input type='text' name="where" placeholder='Search destinations' className='w-full group-hover:bg-[#ebeaea] focus:bg-[#fff] outline-0 placeholder:text-[15px]' />
            </div>

            <label className=' text-slate-400'>|</label>
            <div className="group flex flex-col   py-2 px-6 hover:bg-[#ebeaea] rounded-full">
                <labe className='text-sm font-semibold text-[#4e4e4e]'>Check In</labe>
                <input type="date" name="CheckIn" defaultValue={today} onChange={handleDate} placeholder='Add dates' className='w-full group-hover:bg-[#ebeaea] outline-0 placeholder:text-[15px]' />
            </div>

            <label className=' text-slate-400'>|</label>

            <div className="group flex flex-col   py-2 px-6 hover:bg-[#ebeaea] rounded-full">
                <label className='text-sm font-semibold text-[#4e4e4e]'>Check Out</label>
                <input type="date" name="checkOut" placeholder='Add dates' className='w-full group-hover:bg-[#ebeaea] outline-0 placeholder:text-[#6e6e6e] placeholder:text-[15px]' />
            </div>

            <label className=' text-slate-400'>|</label>
            <div className="group  text-gray-600 flex flex-row items-center gap-3 py-2 px-6 hover:bg-[#ebeaea] rounded-full">

                <div className="flex flex-col  px-3">
                    <label className='text-sm font-semibold'>Who</label>
                    <input type='text' name='who' placeholder='Add guests' className='w-full group-hover:bg-[#ebeaea] outline-0 placeholder:text-[15px]' />
                </div>

                <div onClick={() => setShowPopUPNav(!showPopUPNav)} className=" bg-rose-500 rounded-full  text-white flex items-center justify-center py-2.5 px-3 gap-2">
                    <FaSearch></FaSearch><span>Search</span>
                </div>
            </div>
        </div>
    </div>
</div>
</div> */}


            {/* <div className="dropdown dropdown-end">
  <label className="btn m-1">Click</label>
  <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div> */}