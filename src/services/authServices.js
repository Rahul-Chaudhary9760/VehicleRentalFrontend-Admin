import authApi from "../api/authApi";

const authService = {
    async register(userData) {
        try {
            const response = await authApi.register(userData)
            return response.data
        } catch (error) {
            throw error.response?.data?.message || "Registration failed";
        }
    },

    async login(credentials){
        try {
            const response = await authApi.login(credentials);
            console.log('response data login' , response.data.data)
            const {accessToken , refreshToken} = response.data.data;
            
            //store token securly
            localStorage.setItem('accessToken' , accessToken);
            localStorage.setItem('refreshToken' , refreshToken);
            return response.data;

        } catch (error) {
            throw error.response?.data?.data?.message || "Login Failed";
        }
    }
}

export default authService