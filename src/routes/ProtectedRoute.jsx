import { Navigate } from "react-router-dom";
import { useState , useEffect } from "react";

export default function ProtectedRoute({children}) {

    const [loading , setLoading] = useState(true);
    const [isAuthenticated , setIsAuthenticated] = useState(false);

    useEffect (() => {
        const token = localStorage.getItem("adminToken");
        if(token){
            setIsAuthenticated(true);
        }
        setLoading(false);
    } , []);

    if (loading) return <div>Loading...</div>;

    return isAuthenticated ? children : <Navigate to="/login"/>
};

