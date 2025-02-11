import API from "./axiosInstance";


const vehicleApi = {
    addVehicle: (vehicleData) => API.post('/api/v1/vehicle/addvehicle' , vehicleData),

    totalVehicles:() => API.get(`/api/v1/vehicle/totalVehilces`),

    vehicleList:() => API.get('/api/v1/vehicle/totalVehiclesList'),

    editVehicle:(vehicleId , updatedData) => API.put(`/api/v1/vehicle/edit/${vehicleId}` , updatedData , {
        withCredentials:true
    }),

    deleteVehicle:(vehicleId) => API.delete(`/api/v1/vehicle/delete/` , {
        params: {vehicleId}
    })
};

export default vehicleApi 