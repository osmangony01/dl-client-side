import React, { useEffect, useState } from 'react';
import { BsPlus } from "react-icons/bs";
import { HiMinusSmall } from "react-icons/hi2";
const Test = () => {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [pets, setPets] = useState(0);
    const [petsWithInfants, setPetsWithInfants] = useState(0);
    const [guest, setGuest] = useState(0)
    const increaseChildren = () => {setChildren(children + 1);}
    const decreaseChildren = () => {setChildren(children - 1);}
    const increaseAdults = () => {setAdults(adults + 1);}
    const decreaseAdults = () => {setAdults(adults - 1);}
    const decreaseInfants = () => {setInfants(infants - 1);}
    const decreasePets = () => {setPets(pets - 1)}

    const increaseInfants = () => {
        setPetsWithInfants(1);
        setInfants(infants + 1);
    }
    const increasePets = () => {
        setPetsWithInfants(1);
        setPets(pets + 1)
    }


    useEffect(() => {
        

    }, [adults, children, pets, infants, petsWithInfants])



    return (
        <div>
            <div className='flex justify-center items-center py-5 bg-blue-600 text-white'>{`${guest > 0 ? guest + 'guest ' : ''}${infants > 0 ? ',' + infants + 'infants ' : ''} ${pets > 0 ? ', ' + pets + 'pets' : ""}`}</div>
            <div className='flex justify-center items-center'>
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

            <div className='flex justify-center items-center'>
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
            <div className='flex justify-center items-center'>
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
            <div className='flex justify-center items-center'>
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
        </div>
    );
};

export default Test;