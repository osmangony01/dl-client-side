
import NavLogo from './NavLogo';
import UserMenu from './UserMenu';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-10 py-4 border-b border-[#ece9e9]'>
            <NavLogo></NavLogo>
            <div>
                <div className="border-[1px]  py-2.5 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
                    <div className="flex flex-row items-center justify-between">
                        <div className="text-sm font-semibold text-[#4e4e4e] px-4">
                            Anywhere
                        </div>
                        <div className="text-sm font-semibold text-[#4e4e4e] border-x-[1px] px-4 text-center">
                            Any week
                        </div>
                        <div className="text-sm font-semibold text-[#8b8b8b]   px-4 text-center">
                            Add guests...
                        </div>
                        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                            <div className="hidden sm:block"></div>
                            <div className="p-2  bg-rose-500 rounded-full  text-white">
                                <FaSearch></FaSearch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <UserMenu></UserMenu>
        </div>
    );
};

export default Navbar;


{/* <div className="relative">
    <div className="flex flex-row items-center gap-3">
        <div
            className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
            Airbnb your home
        </div>
        <div
            onClick={toggleOpen}
            className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
            <AiOutlineMenu />
            <div className="hidden md:block">
                <Avatar src={currentUser?.image} />
            </div>
        </div>
    </div>

</div>
        </div >
      )}
    </div > */}