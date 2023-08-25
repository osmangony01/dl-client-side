
import { useEffect, useState } from 'react';
import axiosInstance from '../../hooks/axiosInstance';
import filterLogo from '../../../public/images/filterLogo.svg';
import moment from 'moment/moment';

const Demo2 = () => {

    const [categories, setCategories] = useState([]);

    const [allReserveData, setAllReserveData] = useState([]);

    const [filterByCategory, setFilterByCategory] = useState([]);

    const fetchCategoryData = async () => {
        const res = await axiosInstance.get('/api/category')
        const data = res.data;

        if (data) {
            setCategories(data);

        }
    };

    const fetchReserveData = async () => {
        const res = await axiosInstance.get('/api/getAllCategoryData')
        const data = res.data;

        if (data) {
            setAllReserveData(data);

        }
    }

    useEffect(() => {
        fetchCategoryData();
        fetchReserveData();
    }, []);

    const [selectCategory, setSelectCategory] = useState();
    
    const handleSelectCategory = async(label) => {
        setSelectCategory(label)

        const searchQuery = { "featureCategory": label };
        const response = await axiosInstance.patch("/update-status", updateStatus);
        //console.log(response.data);
        const data = response.data;
    }

    console.log(allReserveData);
    console.log(selectCategory);

    //console.log(defaultSelected);

    // const [categories] = useAllCategory();
    console.log(categories);

    return (
        <div className='relative'>
            <div className='sticky top-0 w-full z-10 bg-white' >
                <div className='flex items-center justify-between px-10 py-2.5 border-2 '>
                    <div className='flex items-center'>
                        {categories?.map((item, index) => {
                            return <div key={index} className='flex flex-col items-center justify-center px-4 py-1 transition cursor-pointer' onClick={() => { handleSelectCategory(item.label) }}>
                                <div><img src={item.imgSrc} alt={item.label} className='h-[24px] w-[24px]' /></div>
                                <label className={item.label === selectCategory ? `text-center text-sm text-black cursor-pointer font-semibold pt-3 ` : `text-center text-sm text-[#616060] pt-3 cursor-pointer`}>{item.label}</label>
                            </div>
                        })}
                    </div>
                    <div>
                        <span className='flex items-center justify-center px-4 py-3 border rounded-lg shadow-sm transition cursor-pointer' onClick={() => window.my_modal_3.showModal()}>
                            <img src={filterLogo} alt="filter-logo" className='h-[15px] w-[15px]' />
                            <span className='text-sm font-semibold text-[#3f3e3e] pl-2'>Filter</span>
                        </span>

                        {/* You can open the modal using ID.showModal() method */}
                        {/* <button className="btn" onClick={() => window.my_modal_3.showModal()}>open modal</button> */}
                        <dialog id="my_modal_3" className="modal">
                            <form method="dialog" className="modal-box">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </div>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-8  px-10 py-6'>

                    {
                        allReserveData?.map((item, index) => {
                            return <div key={index}>
                                <div >
                                    <img className='rounded-lg h-[250px] w-full' src={item.imgSrc} alt='img' />
                                </div>
                                <div className='text-[#616060] text-[15px]'>
                                    <div className='flex justify-between pt-2'><span className='text-black  text-sm font-semibold'>{item.location}</span> <span>{item.rating}</span> </div>
                                    <div>{item.locationInfo}</div>
                                    <div>{`${moment(item.checkIn).format("MMM D")} - ${moment(item.checkOut).format("MMM D")}`}</div>
                                    <div><span className='text-black text-sm font-semibold'>${item.price}</span> night</div>
                                </div>
                            </div>
                        })
                    }
                    {/* <div>
                        <div >
                            <img className='rounded-lg h-[250px] w-full' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lpibo-ew-1656015868.jpg" alt='img' />
                        </div>
                        <div className='text-[#616060] text-[15px]'>
                            <div className='flex justify-between pt-2'><span className='text-black  text-sm font-semibold'>Chittagong, Bangladesh</span> <span>4.5</span> </div>
                            <div>built in 1900</div>
                            <div>Sep1-6</div>
                            <div><span className='text-black text-sm font-semibold'>$44</span> night</div>
                        </div>
                    </div> */}


                </div>
            </div>
        </div>
    );
};

export default Demo2;