
import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import axiosInstance from './hooks/axiosInstance';

export const ContextAPI = createContext(null);

const Layout = () => {

  const [contextAPI, setContextAPI] = useState([])

  const fetchReserveData = async () => {
    const res = await axiosInstance.get('/api/getAllCategoryData')
    const data = res.data;
    if (data) {
      setContextAPI(data);
    }
  }
  useEffect(() => {
    fetchReserveData();
  }, []);

  return (
    <ContextAPI.Provider value={[contextAPI, setContextAPI]}>
      <div>
        <Outlet></Outlet>
      </div>
    </ContextAPI.Provider>

  );
};

export default Layout;