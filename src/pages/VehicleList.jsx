import { useEffect, useState } from "react";
import Button from "../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import vehicleService from "../services/vehicleServices";
import Loader from "../Components/Loader/Loader";


export default function VehicleList () {
    const navigate = useNavigate();
    const [vehicleList , setVehicleList] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [isModelOpen , setIsModelOpen] = useState(false);
    const [updatedData , setUpdatedData] = useState({
        pricePerHour: 0,
        vehicleLocation: ""
    })
    const [selectedVehicle , setSelectedVehicle] = useState(null);

    const getVehicleList = async () =>{
        setIsLoading(true);
        const response = await vehicleService.getVehicleLists();
        if(response) setVehicleList(response.data.vehicleList);
        setIsLoading(false);
    };

    const deleteVehilce = async (vehicleId) => {
        try {
            setIsLoading(true);
            await vehicleService.deleteVehicle(vehicleId);
            setVehicleList((prevList) => prevList.filter((vehicle) => vehicle._id !== vehicleId));
            setIsLoading(false);
        } catch (error) {
            console.error("Error deleting vehicle:", error);
        }
    }

    const openEditModel = (vehicle) => {
        setSelectedVehicle(vehicle);
        setUpdatedData({
            pricePerHour: vehicle.pricePerHour,
            vehicleLocation: vehicle.vehicleLocation
        });
        setIsModelOpen(true);
    };

    const closeEditModal = () => {
        setIsModelOpen(false);
        setSelectedVehicle(null);
    };

    const handleInputChange = (e) => {
        const {name , value} = e.target;
        setUpdatedData((pervData) => ({
            ...pervData , 
            [name]: value
        }))
    };

    const handleUpdateVehicle = async () => {
        if(!selectedVehicle) return ;
        try {
            setIsLoading(true);
            await vehicleService.editVehicle(selectedVehicle._id , updatedData);
            setVehicleList((prevList) => prevList.map((vehicle) => vehicle._id === selectedVehicle._id ? {...vehicle , ...updatedData} : vehicle));
            closeEditModal();
            setIsLoading(false)
        } catch (error) {
            console.error('Error updating vehicle:' , error);
        }
    }

    useEffect(() => {
        getVehicleList();
    },[]);
        
    const handleNavigateToAddVehicle = () => {
        navigate('/addVehicle');
    }

    return (
        <>
            <Loader isLoading={isLoading}/>
            <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Vehicles</h2>
                <Button
                    text="Add Vehicles"
                    onClick={handleNavigateToAddVehicle}
                />
            </div>
            <table className="table-auto w-full border">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Vehicle Number</th>
                        <th className="border px-4 py-2">Type</th>
                        <th className="border px-4 py-2">Seats</th>
                        <th className="border px-4 py-2">Price Per Hour</th>
                        <th className="border px-4 py-2">Location</th>
                        <th className="border px-4 py-2">Availaible</th>
                        <th className="border px-4 py-2">Booking status</th>
                        <th className="border px-4 py-2">Actions</th>    
                    </tr>
                </thead>
                <tbody>
                    {vehicleList.map((vehicle, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{vehicle.vehicleName}</td>
                            <td className="border px-4 py-2">{vehicle.vehicleNumber}</td>
                            <td className="border px-4 py-2">{vehicle.vehicleType}</td>
                            <td className="border px-4 py-2">{vehicle.numberOfSeats}</td>
                            <td className="border px-4 py-2">{vehicle.pricePerHour}</td>
                            <td className="border px-4 py-2">{vehicle.vehicleLocation}</td>
                            <td className="border px-4 py-2">  {vehicle.isAvailaible ? "Available" : "Not Available"}
                            </td>
                            <td className="border px-4 py-2">{vehicle.isBooked ? "Booked" : "Not booked"}</td>
                            <td className="border px-4 py-2">
                                <Button 
                                    text="Edit"
                                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                                    onClick={() => openEditModel(vehicle)}
                                />
                                <Button
                                    text="Delete"
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={() => deleteVehilce(vehicle._id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        
        {
            isModelOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Edit Vehicle</h2>
                        <label className="block mb-2">Price Per Hour:</label>
                        <input
                            type="number"
                            name="pricePerHour"
                            value={updatedData.pricePerHour}
                            onChange={handleInputChange}
                            className="w-full border p-2 rounded mb-4"
                        />
                        <label className="block mb-2">Location:</label>
                        <input
                            type="text"
                            name="vehicleLocation"
                            value={updatedData.vehicleLocation}
                            onChange={handleInputChange}
                            className="w-full border p-2 rounded mb-4"
                        />
                        <div className="flex justify-end">
                            <Button text="Cancel" className="bg-gray-400 px-4 py-2 hover:bg-blue-600 mr-2 rounded" onClick={closeEditModal} />
                            <Button text="Save Changes" className="bg-blue-500 px-4 py-2 text-white rounded" onClick={handleUpdateVehicle} />
                        </div>
                    </div>
                </div>
            )
        }

        </>
    )
}