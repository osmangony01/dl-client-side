import React, { useState } from 'react';

const D4 = () => {

    const [modal, setModal] = useState(false);
   
    const handleModel =(bool) => {
        setModal(bool)
    }

    return (
        <div>
            <div className='px-4 py-2 bg-blue-500 text-white w-[150px]' onClick={() => handleModel(true)}>Show Modal</div>
            
            {modal && <>
                <div className='h-screen w-full fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-20'>
                    <div className='bg-white rounded shadow-lg w-2/4'>
                        <div className='border-b px-4 py-2'>
                            Modal title
                        </div>

                        <div className='p-3 scroll-auto'>
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

                        <div className='p-2 border-t w-100'>
                            <button onClick={()=>{handleModel(false)}}>close</button>
                        </div>

                    </div>
                    </div>
                </>
                }

        </div>
    );
};

export default D4;