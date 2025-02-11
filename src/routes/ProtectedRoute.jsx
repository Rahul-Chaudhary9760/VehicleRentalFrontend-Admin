import { Navigate } from "react-router-dom";
import { useState , useEffect } from "react";
import useAuthStore from "../store/useAuthStore";

export default function ProtectedRoute({children}) {
    const {user , loading , fetchUser} = useAuthStore();

    useEffect (() => {
        if(!user) fetchUser();
    },[]);

    if (loading) return <div>Loading...</div>;

    return user ? children : <Navigate to="/"/>
};

