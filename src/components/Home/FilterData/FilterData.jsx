import React, { useContext, useEffect, useState } from 'react';
import { ContextAPI } from '../../../Layout';
import axiosInstance from '../../../hooks/axiosInstance';
import { RxCross1 } from "react-icons/rx";

const FilterData = ({ status, handleFilterModal }) => {

    const [allReserveData, setAllReserveData] = useContext(ContextAPI);

    const [filtersData, setFiltersData] = useState([]);
    const [placeType, setPlaceType] = useState('any');
    const [propertyType, setPropertyType] = useState('House');
    const [bedrooms, setBedrooms] = useState(0);
    const [beds, setBeds] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [minPrice, setMinPrice] = useState(10);
    const [maxPrice, setMaxPrice] = useState(900);


    const modal = status;
    const handleModel = () => {
        handleFilterModal(false)
    }

    // const handleDate = (e) => {
    //     console.log(e.target.value);
    // }

    const handlePlace = (label) => {
        setPlaceType(label);
    }

    const handleBedrooms = (item) => {
        setBedrooms(item);
    }
    const handleBeds = (item) => {
        setBeds(item);
    }
    const handleBathrooms = (item) => {
        setBathrooms(item);
    }
    const handlePropertyType = (item) => {
        setPropertyType(item);
    }
    const handleMinPrice = (e) => {
        setMinPrice(e.target.value)
    }
    const handleMaxPrice = (e) => {
        setMaxPrice(e.target.value)
    }

    const handleClear = () => {
        setPlaceType('any');
        setPropertyType('House');
        setBedrooms(0);
        setBeds(0);
        setBathrooms(0);
        setMinPrice(10);
        setMaxPrice(990);

    }
    const handleClose = () => { handleFilterModal(false); }


    // search all data based on filtering
    const fetchFilterResult = async () => {

        const filter = {
            "placeType": placeType,
            "bedrooms": bedrooms,
            "beds": beds,
            "bathrooms": bathrooms,
            "propertyType": propertyType,
            "price": [minPrice, maxPrice],
        }
        console.log(filter);

        try {
            const response = await axiosInstance.get("/api/getFilteredData", {
                params: filter
            });
            const data = response.data;
            console.log(response.data);
            setFiltersData(data);
        } catch (error) {
            console.error('Error fetching specific category data:', error);
        }
    }

    const handleFilter = () => {
        setAllReserveData(filtersData);
        handleFilterModal(false);
    }

    useEffect(() => {
        fetchFilterResult();

    }, [placeType, propertyType, bedrooms, beds, bathrooms, maxPrice, minPrice])


    return (
        <div>
            {modal && <>
                <div className='h-screen w-full fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-20 '>
                    <div className='relative bg-white rounded-lg shadow-lg w-11/12 md:w-10/12 lg:w-3/5 h-[85%] z-50'>
                        <div className='border-b px-6 py-5 sticky top-0 font-semibold flex justify-center'>
                            Filters <span onClick={handleClose} className='absolute top-[20px] left-[30px] hover:bg-slate-100 p-2 rounded-full'><RxCross1></RxCross1></span>
                        </div>

                        <main className='flex-grow overflow-y-scroll  px-6 py-5 max-h-[390px]'>
                            <div className='p-5'>
                                <div className='py-6'>
                                    <div >
                                        <div className='text-[22px] font-semibold'>Type of place</div>
                                        <div className='text-[15px] text-[#666565]'>Search rooms, entire homes, or any type of place.</div>
                                    </div>
                                    <div className='grid grid-cols-3 px-6 py-6'>
                                        <button className={placeType === "any" ? `text-white bg-[#2c2c2c] font-semibold text-base hover:bg-black text-center py-4 rounded-s-md` : "text-black bg-white border hover:border-black py-4 text-center rounded-s-md"} onClick={() => { handlePlace('any') }}>Any</button>
                                        <button className={placeType === "room" ? `text-white bg-[#2c2c2c] font-semibold text-base hover:bg-black text-center py-4` : "text-black bg-white border hover:border-black py-4 text-center"} onClick={() => { handlePlace('room') }}>Room</button>
                                        <button className={placeType === "entire room" ? `text-white bg-[#2c2c2c] font-semibold text-base hover:bg-black text-center py-4 rounded-e-md` : "text-black bg-white border hover:border-black py-4 text-center rounded-e-md"} onClick={() => { handlePlace('entire room') }}>Entire home</button>
                                    </div>
                                </div>
                                <hr />
                                <div className='py-10'>
                                    <div className='text-[22px] font-semibold'> Price range</div>
                                    <div className='text-[15px] text-[#666565]'> Nightly prices before fees and taxes</div>

                                    <div className='grid grid-cols-2 gap-6 py-10 px-6'>
                                        <input type="range" className=' ' name="minQuantity" min="1" max="900" step="1" onChange={handleMinPrice} />
                                        <input type="range" className='' name="maxQuantity" min="1" max="990" step="1" onChange={handleMaxPrice} />

                                    </div>

                                    <div className='grid grid-cols-2 gap-4'>
                                        <div className='border hover:border-2 hover:border-black px-4 py-1 rounded-md flex flex-col'>
                                            <label className='text-[13px] text-[#727272]'>Minimum</label>
                                            <span>$ <input type="text" name="minPrice" defaultValue={'10'} value={minPrice} className='border-0 outline-0 p-0 m-0 focus:bg-white hover:bg-white' onChange={handleMinPrice} /></span>
                                        </div>
                                        <div className='border hover:border-2 hover:border-black px-4 py-1 rounded-md flex flex-col'>
                                            <label className='text-[13px] text-[#727272]'>Minimum</label>
                                            <span>$ <input type="text" name="maxPrice" defaultValue={'990+'} value={maxPrice} className='border-0 outline-0 p-0 m-0 focus:bg-white hover:bg-white ' onChange={handleMaxPrice} /></span>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='py-5'>
                                    <div className='text-[22px] font-semibold pb-2'>Rooms and beds</div>
                                    <div>
                                        <div className='py-3'>Bedrooms</div>
                                        <div>
                                            <div className='py-5'>
                                                <span className={bedrooms == 0 ? "text-[15px] p-4 bg-black text-white rounded-full " : "border p-4 text-black border-1 text-[15px] hover:border-black  rounded-full"} onClick={() => { handleBedrooms(0) }}>Any</span>
                                                {
                                                    [...Array(8)].map((_, i) => {
                                                        return (<span key={i} className={bedrooms == i + 1 ? "text-[15px] py-3 px-4 bg-black text-white rounded-full mx-2 " : "border py-3 px-4 text-black border-1 text-[15px] hover:border-black  rounded-full mx-2"} onClick={() => { handleBedrooms(i + 1) }}>{i == 7 ? `${i + 1} +` : i + 1}</span>);
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='py-3'>Beds</div>
                                        <div className='py-5'>
                                            <span className={beds == 0 ? "text-[15px] p-4 bg-black text-white rounded-full " : "border p-4 text-black border-1 text-[15px] hover:border-black  rounded-full"} onClick={() => { handleBeds(0) }}>Any</span>
                                            {
                                                [...Array(8)].map((_, i) => {
                                                    return (<span key={i} className={beds == i + 1 ? "text-[15px] py-3 px-4 bg-black text-white rounded-full mx-2 " : "border py-3 px-4 text-black border-1 text-[15px] hover:border-black  rounded-full mx-2"} onClick={() => { handleBeds(i + 1) }}>{i == 7 ? `${i + 1} +` : i + 1}</span>);
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <div className='py-3'>Bathrooms</div>
                                        <div>
                                            <div className='py-5'>
                                                <span className={bathrooms == 0 ? "text-[15px] p-4 bg-black text-white rounded-full " : "border p-4 text-black border-1 text-[15px] hover:border-black  rounded-full"} onClick={() => { handleBathrooms(0) }}>Any</span>
                                                {
                                                    [...Array(8)].map((_, i) => {
                                                        return (<span key={i} className={bathrooms == i + 1 ? "text-[15px] py-3 px-4 bg-black text-white rounded-full mx-2 " : "border py-3 px-4 text-black border-1 text-[15px] hover:border-black  rounded-full mx-2"} onClick={() => { handleBathrooms(i + 1) }}>{i == 7 ? `${i + 1} +` : i + 1}</span>);
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='py-5'>
                                    <div className='text-[22px] font-semibold pt-4'>Property type</div>
                                    <div className='grid grid-cols-4 px-6 py-6'>
                                        <div className={propertyType === "House" ? "text-center font-semibold mx-2 border-2 border-black rounded-md py-10" : "border  mx-2 text-center py-10 rounded-md"} onClick={() => { handlePropertyType("House") }}><span>House</span></div>

                                        <div className={propertyType === "Apartment" ? "text-center font-semibold mx-2 border-2 border-black rounded-md py-10" : "border  mx-2 text-center py-10 rounded-md"} onClick={() => { handlePropertyType("Apartment") }}><span>Apartment</span></div>

                                        <div className={propertyType === "Guesthouse" ? "text-center font-semibold mx-2 border-2 border-black rounded-md py-10 cursor-default" : "border cursor-pointer  mx-2 text-center py-10 rounded-md"} onClick={() => { handlePropertyType("Guesthouse") }}><span>Guesthouse</span></div>

                                        <div className={propertyType === "Hotel" ? "text-center font-semibold mx-2 border-2 border-black rounded-md py-10" : "border  mx-2 text-center py-10 rounded-md"} onClick={() => { handlePropertyType("Hotel") }}><span>Hotel</span></div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </main>

                        <div className='py-3 border-t absolute   left-0 right-0 bottom-0  flex justify-between px-6 overflow-hidden'>
                            <button onClick={handleClear} className='text-slate-700 text-base font-semibold hover:text-black'><u>Clear All</u></button>
                            <button onClick={handleFilter} className="btn bg-slate-700 hover:bg-black rounded-md text-white font-semibold px-4 py-2">Show  {filtersData.length} places</button>
                        </div>
                    </div>
                </div>
            </>
            }
        </div>
    );
};

export default FilterData;