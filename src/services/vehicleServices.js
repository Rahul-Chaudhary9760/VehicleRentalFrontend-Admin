import vehicleApi from "../api/vehicleApi";

const vehicleService = {
    async addVehicle(vehicleData){
        try {
            const response = await vehicleApi.addVehicle(vehicleData);
            return response.data
        } catch (error) {
            throw error.response?.data?.message || "Vehicle not added"
        }
    }
};

export default vehicleService