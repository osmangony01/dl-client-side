import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { HiMinusSmall } from "react-icons/hi2";
import UserMenu from './UserMenu';
import NavLogo from './NavLogo';
import { ContextAPI } from '../../Layout';
import axiosInstance from '../../hooks/axiosInstance';

const Header = () => {

    const [searchResult, setSearchResult] = useContext(ContextAPI);
    const refOne = useRef(null);
   // const [filterResult, setFilterResult] = useContext(ContextAPI)
    const [showPopUPNav, setShowPopUPNav] = useState(false);

    //const today = moment().format('YYYY-MM-DD');


    /* -------------------input field color handling------------------------*/

    const [fillColor, setFillColor] = useState(false)
    const [fillLocation, setFillLocation] = useState(false);
    const [fillCheckIn, setFillCheckIN] = useState(false);
    const [fillCheckOut, setFillCheckOut] = useState(false);
    const [fillGuest, setFillGuest] = useState(false);
    const [inputFill, setInputFill] = useState(false);
    const [inputType, setInputType] = useState('text');

    const handleFillLocationColor = () => {
        setInputType('text');
        setFillColor(true);
        setFillLocation(true);
        setInputFill(true);
        setFillCheckIN(false);
        setFillCheckOut(false);
        setFillGuest(false);
        setGuestPopUp(false);
    }

    const handleFillCheckInColor = () => {
        setInputType('date');
        setFillColor(true);
        setInputFill(true);
        setFillCheckIN(true);
        setFillCheckOut(false);
        setFillGuest(false);
        setFillLocation(false);
        setGuestPopUp(false);
    }

    const handleFillCheckOutColor = () => {
        setInputType('date');
        setFillColor(true);
        setInputFill(true);
        setFillCheckOut(true);
        setFillCheckIN(false);
        setFillGuest(false);
        setFillLocation(false);
        setGuestPopUp(false);
    }

    const handleFillGuestColor = () => {
        setGuestPopUp(true);
        setInputType('text');
        setFillColor(true)
        setInputFill(true);
        setFillGuest(true);
        setFillCheckIN(false);
        setFillCheckOut(false);
        setFillLocation(false);
    }

    /* ------------------------------- End -----------------------------------*/


    /* --------------------- Input Data handling--------------------------- */

    const [location, setLocation] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');

    const handleLocation = (e) => {
        setLocation(e.target.value);
    }
    const handleCheckInDate = (e) => {
        setCheckIn(e.target.value);
    }
    const handleCheckOutDate = (e) => {
        setCheckOut(e.target.value);
    }
 
    /*------------------------ Input guest controlling---------------------- */

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [pets, setPets] = useState(0);
    const [petsWithInfants, setPetsWithInfants] = useState(0);
    const [guest, setGuest] = useState(0)
    const [guestPopUp, setGuestPopUp] = useState(false);

    const increaseChildren = () => { setChildren(children + 1); }
    const decreaseChildren = () => { setChildren(children - 1); }
    const increaseAdults = () => { setAdults(adults + 1); }
    const decreaseAdults = () => { setAdults(adults - 1); }
    const decreaseInfants = () => { setInfants(infants - 1); }
    const decreasePets = () => { setPets(pets - 1) }

    const increaseInfants = () => {
        setPetsWithInfants(1);
        setInfants(infants + 1);
    }
    const increasePets = () => {
        setPetsWithInfants(1);
        setPets(pets + 1)
    }

    /*--------------------------- End ----------------------------------- */



    useEffect(() => {
        document.addEventListener('click', handleHidePopUp, true);
        if (pets == 0 && infants == 0) {
            setPetsWithInfants(0)
        }
        setGuest(adults + children + petsWithInfants)
    }, [adults, children, pets, infants, petsWithInfants])

    const handleHidePopUp = (e) => {
        if (!refOne.current.contains(e.target)) {
            setFillColor(false)
            setInputFill(false);
            setFillGuest(false);
            setFillCheckIN(false);
            setFillCheckOut(false);
            setFillLocation(false);
            setGuestPopUp(false);
            setShowPopUPNav(false);
        }
    }


    /* ------------------------Search data handling--------------------------- */

    const fetchSearchResult = async (queryResult) => {
        try {
            const response = await axiosInstance.get("/api/searchResultData", {
                params: queryResult
            });
            const data = response.data;
            console.log(data);
            setSearchResult(data);
        } catch (error) {
            console.error('Error fetching searching result :', error);
        }
    }

    const handleSubmit = (e) => {
        const searchResult = {
            "location": location,
            "checkIn": checkIn,
            "checkOut": checkOut,
            "guestCapacity": guest,
        };
        fetchSearchResult(searchResult);

        setFillColor(false)
        setInputFill(false);
        setFillGuest(false);
        setFillCheckIN(false);
        setFillCheckOut(false);
        setFillLocation(false);
        setGuestPopUp(false);
        setShowPopUPNav(false)
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
                                {/* <form onSubmit={handleSubmit}> */}
                                <div className={`border-[1px] shadow-sm rounded-full transition cursor-pointer ${fillColor && 'bg-[#ebeaea]'}`}>
                                    <div className="flex flex-row items-center justify-between">

                                        <div className={`group flex flex-col   py-1 px-6  rounded-full ${fillLocation == true ? ' bg-white shadow-xl hover:bg-white' : 'hover:bg-[#ebeaea]'}`} onClick={handleFillLocationColor}>
                                            <label className='text-sm font-semibold text-[#4e4e4e]'> Where</label>
                                            <input type='text' name="whereLocation" onChange={handleLocation} placeholder='Search destinations' className={`w-full  group-hover:bg-[#ebeaea]  border-0 outline-0 placeholder:text-[15px] ${inputFill == false ? 'bg-white' : fillLocation == true ? 'bg-white group-hover:bg-white' : 'bg-[#ebeaea]  group-hover:bg-[#ebeaea]'} `} />
                                        </div>

                                        <label className=' text-slate-400'>|</label>

                                        <div className={`group flex flex-col   py-1 px-6  rounded-full ${fillCheckIn == true ? ' bg-white shadow-xl hover:bg-white' : 'hover:bg-[#ebeaea]'}`} onClick={handleFillCheckInColor}>
                                            <labe className='text-sm font-semibold text-[#4e4e4e]'>Check In</labe>
                                            <input type={inputType} name="checkInDate" onChange={handleCheckInDate} placeholder='Add dates' className={`w-full  group-hover:bg-[#ebeaea] border-0 outline-0 placeholder:text-[15px] ${inputFill == false ? 'bg-white' : fillCheckIn == true ? 'bg-white group-hover:bg-white' : 'bg-[#ebeaea]  group-hover:bg-[#ebeaea]'}`} />
                                        </div>

                                        <label className=' text-slate-400'>|</label>

                                        <div className={`group flex flex-col   py-1 px-6  rounded-full ${fillCheckOut == true ? ' bg-white shadow-xl hover:bg-white' : 'hover:bg-[#ebeaea]'}`} onClick={handleFillCheckOutColor}>
                                            <label className='text-sm font-semibold text-[#4e4e4e]'>Check Out</label>
                                            <input type={inputType} name="checkOutDate" onChange={handleCheckOutDate} placeholder='Add dates' className={`w-full  group-hover:bg-[#ebeaea] border-0 outline-0 placeholder:text-[15px] ${inputFill == false ? 'bg-white' : fillCheckOut == true ? 'bg-white group-hover:bg-white' : 'bg-[#ebeaea]  group-hover:bg-[#ebeaea]'}`} />
                                        </div>

                                        <label className=' text-slate-400'>|</label>

                                        <div className={`group relative text-gray-600 flex flex-row items-center  py-1 pl-6 pr-3 rounded-full ${fillGuest == true ? ' bg-white shadow-xl hover:bg-white' : 'hover:bg-[#ebeaea]'}`} onClick={handleFillGuestColor}>

                                            <div className="flex flex-col  px-1">
                                                <label className='text-sm font-semibold'>Who</label>
                                                <input type='text' value={`${guest > 0 ? guest + 'guest ' : ''}${infants > 0 ? ',' + infants + 'infants ' : ''} ${pets > 0 ? ', ' + pets + 'pets' : ""}`} name='who' placeholder='Add guests' className={`w-full  group-hover:bg-[#ebeaea] border-0 px-0 outline-0 placeholder:text-[15px] ${inputFill == false ? 'bg-white' : fillGuest == true ? 'bg-white group-hover:bg-white' : 'bg-[#ebeaea]  group-hover:bg-[#ebeaea]'}`} readOnly />
                                            </div>
                                            {
                                                guestPopUp && <div className="absolute right-0 top-16 z-10">
                                                    <ul className="menu menu-compact mt-3 p-8 shadow bg-base-100 rounded-box w-[400px]">
                                                        <div className='flex justify-between items-center '>
                                                            <div className='flex flex-col'>
                                                                <span className='text-base text-slate-700 font-semibold'>Adults</span>
                                                                <span className='text-[15px] text-slate-500'>Ages 13 or above</span>
                                                            </div>

                                                            <div>
                                                                <button disabled={adults == 0 ? true : false} onClick={decreaseAdults} className={`py-2 px-2 border  rounded-full ${adults == 0 ? 'cursor-not-allowed' : 'hover:border-slate-500'}`}><HiMinusSmall></HiMinusSmall></button>
                                                                <span className='text-base mx-4'>{adults}</span>
                                                                <button onClick={increaseAdults} disabled={adults == 15 ? true : false} className={`py-2 px-2 border  rounded-full ${adults == 15 ? 'cursor-not-allowed' : 'hover:border-slate-500'}`}><BsPlus></BsPlus> </button>
                                                            </div>
                                                        </div>
                                                        <hr className="my-4" />
                                                        <div className='flex justify-between items-center'>
                                                            <div className='flex flex-col'>
                                                                <span className='text-base text-slate-700 font-semibold'>Children</span>
                                                                <span className='text-[15px] text-slate-500'>Ages 2–12</span>
                                                            </div>
                                                            <div>
                                                                <button onClick={decreaseChildren} disabled={children == 0 ? true : false} className={`py-2 px-2 border  rounded-full ${children == 0 ? 'cursor-not-allowed' : 'hover:border-slate-500'}`}><HiMinusSmall></HiMinusSmall></button>
                                                                <span className='text-base mx-4'>{children}</span>
                                                                <button onClick={increaseChildren} disabled={children == 8 ? true : false} className={`py-2 px-2 border  rounded-full ${children == 8 ? 'cursor-not-allowed' : 'hover:border-slate-500'}`}><BsPlus></BsPlus> </button>
                                                            </div>
                                                        </div>
                                                        <hr className="my-4" />
                                                        <div className='flex justify-between items-center'>
                                                            <div className='flex flex-col'>
                                                                <span className='text-base text-slate-700 font-semibold'>Infants</span>
                                                                <span className='text-[15px] text-slate-500'>Under 2</span>
                                                            </div>
                                                            <div>
                                                                <button onClick={decreaseInfants} disabled={infants == 0 ? true : false} className={`py-2 px-2 border  rounded-full ${infants == 0 ? 'cursor-not-allowed' : 'hover:border-slate-500'}`}><HiMinusSmall></HiMinusSmall></button>
                                                                <span className='text-base mx-4'>{infants}</span>
                                                                <button onClick={increaseInfants} disabled={infants == 6 ? true : false} className={`py-2 px-2 border  rounded-full ${infants == 6 ? 'cursor-not-allowed' : 'hover:border-slate-500'}`}><BsPlus></BsPlus> </button>
                                                            </div>
                                                        </div>
                                                        <hr className="my-4" />
                                                        <div className='flex justify-between items-center'>
                                                            <div className='flex flex-col '>
                                                                <span className='text-base text-slate-700 font-semibold'>Pets</span>
                                                                <span className=' text-[15px] text-slate-500'>Bringing a service animal?</span>
                                                            </div>
                                                            <div>
                                                                <button onClick={decreasePets} disabled={pets == 0 ? true : false} className={`py-2 px-2 border  rounded-full ${pets == 0 ? 'cursor-not-allowed' : 'hover:border-slate-500'}`}><HiMinusSmall></HiMinusSmall></button>
                                                                <span className='text-base mx-4'>{pets}</span>
                                                                <button onClick={increasePets} disabled={pets == 4 ? true : false} className={`py-2 px-2 border  rounded-full ${pets == 4 ? 'cursor-not-allowed' : 'hover:border-slate-500'}`}><BsPlus></BsPlus> </button>
                                                            </div>
                                                        </div>

                                                    </ul>
                                                </div>
                                            }

                                            <div onClick={handleSubmit} className={`bg-rose-600 rounded-full font-semibold text-white flex items-center justify-center gap-2 ${fillGuest == true ? 'py-2.5 px-2.5' : 'py-3.5 px-4'}`}>
                                                <FaSearch></FaSearch> {fillColor && <span>Search</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>

                </div>
            }
        </div>
           
    );
};

export default Header;
