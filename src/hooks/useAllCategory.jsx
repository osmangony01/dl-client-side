
import { useQuery } from "react-query";
import axiosInstance  from "./axiosInstance.js"

const useAllCategory =  async () => {
    
    const {isLoading, data: categories = [] } = useQuery(['services'], async () => {
        const res = await axiosInstance.get('/api/category')
        return res.data;
    })

    return [categories];
};

export default useAllCategory;



