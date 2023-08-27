import React, { useState } from 'react';

const D3 = ({ status, handleFilterModal }) => {

    // const [modal, setModal] = useState(false);
    const modal = status;
    const handleModel = () => {
        handleFilterModal(false)
    }

    return (
        <div>
            {/* <div className='px-4 py-2 bg-blue-500 text-white w-[150px]' onClick={() => handleModel(true)}>Show Modal</div> */}

            {modal && <>
                <div className='h-screen w-full fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-20 '>
                    <div className='relative bg-white rounded shadow-lg w-11/12 md:w-10/12 lg:w-3/5 h-[80%] z-50'>
                        <div className='border-b px-6 py-4 sticky top-0  flex justify-center'>
                            Modal title
                        </div>

                        <main className='flex-grow overflow-y-scroll  px-6 py-5 max-h-[373px]'>
                            <div className=''>
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd
                                sdflksdlf asdl;fkas; lsda;lf asdfsd asdfasd asdfasd asdfasd

                            </div>
                        </main>

                        <div className='py-5 border-t absolute   left-0 right-0 bottom-0  flex justify-between px-6 overflow-hidden'>
                            <button>Clear</button>
                            <button className='' onClick={handleModel}>close</button>
                        </div>

                    </div>
                </div>
            </>
            }


        </div>
    );
};

export default D3;