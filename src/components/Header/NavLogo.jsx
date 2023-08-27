
import { useContext } from 'react';
import { ContextAPI } from '../../Layout';
import logo2 from '../../../public/logo/logo2.png'
import logo from '../../../public/logo/logo.png'
import { Link } from 'react-router-dom';
import axiosInstance from '../../hooks/axiosInstance';


const NavLogo = () => {

    const [allReserveData, setAllReserveData] = useContext(ContextAPI);

    const fetchAllReserveData = async () => {
        const res = await axiosInstance.get('/api/getAllCategoryData')
        const data = res.data;
        if (data) {
            setAllReserveData(data);
        }
    }

    const Home = () => {
        fetchAllReserveData();
    }

    return (
        <Link to="/">
            <div className='flex items-center justify-center' onClick={Home}>
                <img src={logo} alt='navbar-logo' className='h-[32px] md:hidden' />
                <img src={logo2} alt='navbar-logo' className='h-[32px] hidden md:block' />
            </div>
        </Link>
    );
};

export default NavLogo;