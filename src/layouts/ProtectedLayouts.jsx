import { useEffect } from "react"
import Sidebar from "../Components/Sidebar/Sidebar"
import useAuthStore from "../store/useAuthStore"
import { useNavigate } from "react-router-dom";


export default function ProtectedLayout({ children }) {
    const {user , loading , fetchUser} = useAuthStore();
    console.log('laoding in protectedLayout' , loading);
    console.log('fetch user in protectedlay', fetchUser)
    const navigate = useNavigate();
    // useEffect(() => {
    //     fetchUser(); // Ensure user data is fetched first
    // }, [fetchUser]);

    useEffect(() => {
        if (!loading && !user) {
            navigate("/");
        }
    }, [user]);
    if(loading) return <div>Loading...</div>
    return (
        <>

        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                {children}
            </div>
        </div>
            

        </>
    )
}