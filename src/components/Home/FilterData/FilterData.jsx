import React, { useContext, useState } from 'react';
import { ContextAPI } from '../../../Layout';





const FilterData = () => {


    const [allReserveData, setAllReserveData] = useContext(ContextAPI);
    console.log(allReserveData);

    const [filtersData, setFiltersData] = useState([]);



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit')

    }

    

    return (
        <div>
            {/* <dialog id="my_modal_3" className="modal">
                <form className="modal-box" onSubmit={handleSubmit}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg text-center">Filter</h3>
                    <hr />
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                    <div className="modal-action ">
                        <button className='text-black text-sm font-semibold '><u>Clear All</u></button>
                        <button className="btn bg-slate-700 hover:bg-black rounded-md text-white font-semibold px-4 py-2">Show {filtersData.length} places</button>
                    </div>
                </form>
            </dialog> */}

           </div>
    );
};

export default FilterData;