import vehicleApi from "../api/vehicleApi";

const vehicleService = {
    async addVehicle(vehicleData){
        try {
            const response = await vehicleApi.addVehicle(vehicleData);
            return response.data
        } catch (error) {
            throw error.response?.data?.message || "Vehicle not added"
        }
    },

    async getTotalVehicle() {
        try {
            const response = await vehicleApi.totalVehicles();
            return response.data;
        } catch (error) {
            throw error.response?.data?.message || 'Unable to fetched total vehicles'
        }
    },

    async getVehicleLists() {
        try {
            const response = await vehicleApi.vehicleList();
            return response.data
        } catch (error) {
            throw error.response?.data?.message || 'Unable to fetched vehicle list'
        }
    },

    async editVehicle(vehicleId , updatedData) {
        try {
            console.log('vehcile servei edit fucntion ' , vehicleId , updatedData);
            const response = await vehicleApi.editVehicle(vehicleId ,updatedData);
            return response.data;
        } catch (error) {
            throw error.response?.data.message ||  "Unable to edit vehicle"
        }   
    },

    async deleteVehicle(vehicleId) {
        try {
            const response = await vehicleApi.deleteVehicle(vehicleId);
            return response.data
        } catch (error) {
            throw error.response?.data.message || 'Vehicle deleted Successfully'
        }
    }   
};

export default vehicleService