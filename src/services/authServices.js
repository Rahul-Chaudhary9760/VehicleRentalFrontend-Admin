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
            return response.data;
        } catch (error) {
            throw error.response?.data?.data?.message || "Login Failed";
        }
    },

    async logout(logoutdetails){
        try {
            const response = await authApi.logout(logoutdetails);
            if(response){
                localStorage.clear();
            }
            return response.data
        } catch (error) {
            throw error.response?.data.data?.message || "Logout failed";
        }
    },

    async getMe() {
        try {
            const user = await authApi.getMe();
            if (user) user.data
        } catch (error) {
            throw error.user?.data?.data?.message || 'User detail not fetched'
        }
    }
}

export default authService