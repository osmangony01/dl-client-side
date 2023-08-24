import React from 'react';
import NavLogo from '../Navbar/NavLogo';
import UserMenu from '../Navbar/UserMenu';
import PopUpSearchMenu from './PopUpSearchMenu';

const PopUpNavbar = () => {
    return (
        <div >
            <div className='flex justify-between items-center px-10 py-4'>
                <NavLogo></NavLogo>
                <div className='flex justify-center items-center gap-4 text-lg text-[#535353]'>
                    <div>Stays</div>
                    <div>Experiences</div>
                    <div>Online Experiences</div>
                </div>
                <UserMenu></UserMenu>
            </div>
            <div>
                <PopUpSearchMenu></PopUpSearchMenu>
            </div>
        </div>
    );
};

export default PopUpNavbar;


