
import { useEffect, useState, useContext } from 'react';
import axiosInstance from '../../hooks/axiosInstance';
import filterLogo from '../../../public/images/filterLogo.svg';
import FilterData from './FilterData/FilterData';
import { ContextAPI } from '../../Layout';
import Header from '../Header/Header';
import ItemResult from './ItemResutl/ItemResult';


const Home = () => {

    const [filterResult, setFilterResult] = useContext(ContextAPI)
    const [categories, setCategories] = useState([]);
    const [selectCategory, setSelectCategory] = useState();

    // fetch all category menu data
    const fetchCategoryData = async () => {
        const res = await axiosInstance.get('/api/category')
        const data = res.data;
        if (data) {
            setCategories(data);
        }
    };

    // fetch all reserve category data 
    // const fetchReserveData = async () => {
    //     const res = await axiosInstance.get('/api/getAllCategoryData')
    //     const data = res.data;
    //     if (data) {
    //         setAllReserveData(data);
    //     }
    // }

    // get all category data based on selected category
    const handleSelectCategory = async (label) => {
        setSelectCategory(label)
        const searchQuery = { "featureCategory": label };
        try {
            const response = await axiosInstance.get("/api/specificCategoryData", {
                params: searchQuery
            });
            const data = response.data;
            //console.log(response.data);
            setFilterResult(data);
        } catch (error) {
            console.error('Error fetching specific category data:', error);
        }
    }

    const [filterModal, setFilterModal] = useState(false);
    const handleFilterModal = (status) => {
        setFilterModal(status);
    }

    //console.log(filterResult);

    useEffect(() => {
        fetchCategoryData();
        //fetchReserveData();
    }, []);

   

    return (
        <div className='relative'>
            <div className='sticky top-0 w-full z-10 bg-white' >
                <Header></Header>
                <div className='flex items-center justify-between px-10 py-2.5 '>
                    <div className='flex items-center'>
                        {categories?.map((item, index) => {
                            return <div key={index} className='flex flex-col items-center justify-center px-4 py-1 transition cursor-pointer' onClick={() => { handleSelectCategory(item.label) }}>
                                <div><img src={item.imgSrc} alt={item.label} className='h-[24px] w-[24px]' /></div>
                                <label className={item.label === selectCategory ? `text-center text-sm text-black cursor-pointer font-semibold pt-3 ` : `text-center text-sm text-[#616060] pt-3 cursor-pointer`}>{item.label}</label>
                            </div>
                        })}
                    </div>
                    <div>
                        <span className='flex items-center justify-center px-4 py-3 border rounded-lg shadow-sm transition cursor-pointer' onClick={() => { handleFilterModal(true) }}>
                            <img src={filterLogo} alt="filter-logo" className='h-[15px] w-[15px]' />
                            <span className='text-sm font-semibold text-[#3f3e3e] pl-2' >Filter</span>
                        </span>
                        <FilterData status={filterModal} handleFilterModal={handleFilterModal}></FilterData>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-8  px-10 py-6'>
                    {
                        filterResult?.map((item, index) => {
                            return <ItemResult key={index} item={item}></ItemResult> 
                        })
                    }
                </div>
            </div>
        </div>
    );
};


export default Home;