
import React, { useEffect, useState } from 'react';

const demo = () => {
    const handleDate = (e) => {
        console.log(e.target.value);
    }

    const [filtersData, setFiltersData] = useState([]);

    const [placeType, setPlaceType] = useState('any');
    const [propertyType, setPropertyType] = useState('House');
    const [bedrooms, setBedrooms] = useState(0);
    const [beds, setBeds] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [minPrice, setMinPrice] = useState(10);
    const [maxPrice, setMaxPrice] = useState(900);

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

    console.log(placeType);
    console.log(propertyType);
    console.log(bedrooms);
    console.log(beds);
    console.log(bathrooms);
    console.log(maxPrice);
    console.log(minPrice);
    console.log(maxPrice);

    // const fetchReserveData = async () => {
    //     const res = await axiosInstance.get('/api/getAllCategoryData')
    //     const data = res.data;
    //     if (data) {
    //         setAllReserveData(data);
    //     }
    // }

    useEffect(() => {
        const filter = {
            "placeType:": propertyType,
            "bedrooms": bedrooms,
            "beds": beds,
            "bathrooms": bathrooms,
            "propertyType": propertyType,
            "price" : [minPrice, maxPrice],
        }
        //fetchReserveData();
        console.log(placeType, propertyType, bedrooms, beds, bathrooms, maxPrice, minPrice)
    },[placeType, propertyType, bedrooms, beds, bathrooms, maxPrice, minPrice])

    return (
        <div>
            <input type="date" placeholder='data' onChange={handleDate} />

            <hr />
            <div className='relative w-[600px] border-2 border-slate-800 mt-5 ml-5 rounded-lg h-[480px]'>
                <div className='text-center font-semibold p-5 sticky bg-white top-0 '>Filters</div>
                <hr></hr>
                <div className='p-5  '>
                    <div >
                        <div className='text-[22px] font-semibold'>Type of place</div>
                        <div className='text-[15px] text-[#666565]'>Search rooms, entire homes, or any type of place.</div>
                    </div>
                    <div className='grid grid-cols-3 px-6 py-6'>
                        <button className={placeType === "any" ? `text-white bg-[#2c2c2c] font-semibold text-base hover:bg-black text-center py-4 rounded-s-md` : "text-black bg-white border hover:border-black py-4 text-center rounded-s-md"} onClick={() => { handlePlace('any') }}>Any</button>
                        <button className={placeType === "room" ? `text-white bg-[#2c2c2c] font-semibold text-base hover:bg-black text-center py-4` : "text-black bg-white border hover:border-black py-4 text-center"} onClick={() => { handlePlace('room') }}>Room</button>
                        <button className={placeType === "entire room" ? `text-white bg-[#2c2c2c] font-semibold text-base hover:bg-black text-center py-4 rounded-e-md` : "text-black bg-white border hover:border-black py-4 text-center rounded-e-md"} onClick={() => { handlePlace('entire room') }}>Entire home</button>
                    </div>

                    <div>
                        <div className='text-[22px] font-semibold'> Price range</div>
                        <div className='text-[15px] text-[#666565]'> Nightly prices before fees and taxes</div>

                        <div className='grid grid-cols-2 gap-6 py-10 px-6'>
                            <input type="range" className=' ' name="minQuantity" min="1" max="900" step="1" onChange={handleMinPrice}/>
                            <input type="range" className='' name="maxQuantity" min="1" max="990" step="1" onChange={handleMaxPrice}/>
                            
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

                    <div className='py-4'>
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
                    <div>
                        <div className='text-[22px] font-semibold pt-4'>Property type</div>
                        <div className='grid grid-cols-4 px-6 py-6'>
                            <div className={propertyType === "House" ? "text-center font-semibold mx-2 border-2 border-black rounded-md py-10" : "border  mx-2 text-center py-10 rounded-md"} onClick={() => { handlePropertyType("House") }}><span>House</span></div>

                            <div className={propertyType === "Apartment" ? "text-center font-semibold mx-2 border-2 border-black rounded-md py-10" : "border  mx-2 text-center py-10 rounded-md"} onClick={() => { handlePropertyType("Apartment") }}><span>Apartment</span></div>

                            <div className={propertyType === "Guesthouse" ? "text-center font-semibold mx-2 border-2 border-black rounded-md py-10" : "border  mx-2 text-center py-10 rounded-md"} onClick={() => { handlePropertyType("Guesthouse") }}><span>Guesthouse</span></div>

                            <div className={propertyType === "Hotel" ? "text-center font-semibold mx-2 border-2 border-black rounded-md py-10" : "border  mx-2 text-center py-10 rounded-md"} onClick={() => { handlePropertyType("Hotel") }}><span>Hotel</span></div>
                        </div>
                    </div>



                    <div>

                    </div>
                </div>
                <hr />
                <div className='sticky bg-white bottom-0'>
                    <div className="flex justify-between items-center py-5 ">
                        <button className='text-black text-sm font-semibold '><u>Clear All</u></button>
                        <button className="btn bg-slate-700 hover:bg-black rounded-md text-white font-semibold px-4 py-2">Show  places</button>
                    </div>
                </div>
            </div>





        </div >
    );
};

export default demo;