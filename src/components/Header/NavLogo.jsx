
import logo2 from '../../../public/logo/logo2.png'
import logo from '../../../public/logo/logo.png'
import { Link } from 'react-router-dom';


const NavLogo = () => {
    return (
        <Link to="/">
            <div className='flex items-center justify-center'>
                <img src={logo} alt='navbar-logo' className='h-[32px] md:hidden' />
                <img src={logo2} alt='navbar-logo' className='h-[32px] hidden md:block' />
            </div>
        </Link>
    );
};

export default NavLogo;