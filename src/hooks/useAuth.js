import { useEffect, useState } from "react";

const useAuth = () => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if(token){
            const fetchUser = async () => {
                try {
                    const userData = await getUserProfile();
                    setUser(userData);
                } catch (error) {
                    console.error('Error fetching user date:' , error);

                }finally{
                    setLoading(false);
                }
            };
            fetchUser();
        }else {
            setLoading(false);
        }
    },[token]);
}

export default useAuth;