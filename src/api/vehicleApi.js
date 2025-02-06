import API from "./axiosInstance";


const vehicleApi = {
    addVehicle: (vehicleData) => API.post('/api/v1/vehicle/addvehicle' , vehicleData)
};

export default vehicleApi 