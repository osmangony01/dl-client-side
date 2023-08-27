import React from 'react';
import moment from 'moment/moment';
import { FaStar } from 'react-icons/fa';

const ItemResult = ({ item }) => {
    
    const { imgSrc, location, rating, checkOut, locationDecs, price, checkIn } = item;

    return (
        <div>
            <div >
                <img className='rounded-lg h-[250px] w-full' src={imgSrc} alt='img' />
            </div>
            <div className='text-[#616060] text-[15px]'>
                <div className='flex justify-between pt-2'>
                    <span className='text-black  text-sm font-semibold'>{location}</span>
                    <span className='flex justify-center items-center gap-2 text-black'><FaStar></FaStar><span>{rating}</span></span>
                </div>
                <div>{locationDecs}</div>
                <div>{`${moment(checkIn).format("MMM D")} - ${moment(checkOut).format("MMM D")}`}</div>
                <div><span className='text-black text-sm font-semibold'>${price}</span> night</div>
            </div>
        </div>
    );
};

export default ItemResult;