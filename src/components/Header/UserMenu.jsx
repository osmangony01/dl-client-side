
import { AiOutlineMenu } from "react-icons/ai";
import avatar from "../../../public/images/placeholder.jpg";

const UserMenu = () => {
    return (
        <div className='hidden md:block'>
            <div className="flex flex-row items-center gap-3 ">
                <div className=' text-[15px] text-[#4e4e4e] font-semibold py-2.5 px-4 rounded-[32px] hover:bg-[#f7f7f7] cursor-pointer transition'>
                    Airbnb your home
                </div>
                <div className='flex items-center flex-row gap-3 border-[1px] border-[#d6d4d4] p-4 md:py-1 md:px-2 rounded-full  hover:shadow-md cursor-pointer transition'>
                    <AiOutlineMenu />
                    <div >
                        <img src={avatar} className="rounded-full h-[30px] w-[30px]" alt='avatar' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserMenu;