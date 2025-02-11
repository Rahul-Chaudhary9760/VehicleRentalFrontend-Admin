import API from "./axiosInstance";


const authApi = {
    register: (userData) => API.post("/api/v1/users/register", userData),
  
    login: (credentials) => API.post("/api/v1/users/login", credentials),
  
    refreshToken: (refreshToken) => API.post("/auth/refresh", { refreshToken }),
  
    logout: () => API.post("/api/v1/users/logout"),
  
    forgotPassword: (email) => API.post("/auth/forgot-password", { email }),

    getUser: () => API.get('/api/v1/users/me' , {
        withCredentials: true
    }),
  
    resetPassword: (token, newPassword) =>
        API.post(`/auth/reset-password/${token}`, { password: newPassword }),
  };
  
  export default authApi;