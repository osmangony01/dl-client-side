
import NavLogo from './NavLogo';
import SearchMenu from './SearchMenu';
import UserMenu from './UserMenu';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-10 py-4 border-b border-[#ece9e9]'>
            <NavLogo></NavLogo>
            <SearchMenu></SearchMenu>
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