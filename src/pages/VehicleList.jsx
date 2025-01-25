import { useState } from "react";
import Button from "../Components/Button/Button";
import { useNavigate } from "react-router-dom";


const dummyvehiclesData = [
    { name: 'Swift', type: 'Petrol', seats: 4 , location:"Agra" , pricePerHour:100 },
    { name: 'Tesla Model S', type: 'Electric', seats: 5 , location:"Mathura" , pricePerHour:200},
];


export default function VehicleList () {
    const navigate = useNavigate();
    const handleNavigateToAddVehicle = () => {
        navigate('/addVehicle')
    }
    return (
        <>
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
                        <th className="border px-4 py-2">Type</th>
                        <th className="border px-4 py-2">Seats</th>
                        <th className="border px-4 py-2">Price Per Hour</th>
                        <th className="border px-4 py-2">Location</th>
                        <th className="border px-4 py-2">Actions</th>    
                    </tr>
                </thead>
                <tbody>
                    {dummyvehiclesData.map((vehicle, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{vehicle.name}</td>
                            <td className="border px-4 py-2">{vehicle.type}</td>
                            <td className="border px-4 py-2">{vehicle.seats}</td>
                            <td className="border px-4 py-2">{vehicle.pricePerHour}</td>
                            <td className="border px-4 py-2">{vehicle.location}</td>
                            <td className="border px-4 py-2">
                                <Button
                                    text="Edit"
                                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                                />
                                <Button
                                    text="Delete"
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        </>
    )
}