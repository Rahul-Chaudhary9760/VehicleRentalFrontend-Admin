import { create } from "zustand";
import { persist } from "zustand/middleware";
import authService from "../services/authServices";

const useAuthStore = create(
    persist(
        (set) => ({
            user:null,
            loading: false,
            setUser: (userData) => {
                set({user: userData , loading: false});
            },
            fetchUser: async () => {
                try {
                    const response = await authService.getMe();
                    console.log('data' , response);
                    set({user: response.data.data , loading: false});
                } catch (error) {
                    set({user:null , loading: false});
                }
            },

            logout: async () => {
                set({user: null});
            }
        })
    )
)

export default useAuthStore;