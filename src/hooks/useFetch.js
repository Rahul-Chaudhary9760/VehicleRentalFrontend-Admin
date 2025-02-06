import { useState , useEffect } from "react";
import API from "../api/axiosInstance";

const useFetch = (url) => {
    const [data , setData] = useState(null);
    const [loading , setLoading] = useState(true);
    const[error , setError] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await API.get(url);
                setData(response.data.data);    
            } catch (error) {
                setError(error)
            }finally {
                setLoading(false);
            }
        }
        fetchData();
    } , [url]);


    return {data , loading , error};
};

export default useFetch;