import React, { useState } from "react";
import InputField from "../Utils/InputComponent";
import Button from "../Components/Button/Button";
import SelectField from "../Utils/SelectComponent";
import ImageUploadField from "../Utils/ImageUploadComponent";
import vehicleService from "../services/vehicleServices";
import Loader from "../Components/Loader/Loader";

const AddVehiclePage = () => {
    const [vehicleData, setVehicleData] = useState({
        name: "",
        type: "",
        seats: "",
        location: "",
        pricePerHour: "",
        vehicleNumber: "",
        isAvailaible: true
    });

    const [isLoading , setIsLoading] = useState(false);
    const [image, setImage] = useState(null);

    const handleInputChange =async (e) => {
        const { name, value } = e.target;
        setVehicleData({ ...vehicleData, [name]: value });
    };

    const handleSubmit =async (e) => {
        setIsLoading(true);
        e.preventDefault();
        const formData = new FormData();
        // Directly append each field of vehicleData as individual fields
        formData.append("vehicleName", vehicleData.name);
        formData.append("vehicleType", vehicleData.type);
        formData.append("numberOfSeats", vehicleData.seats);
        formData.append("vehicleLocation", vehicleData.location);
        formData.append("pricePerHour", vehicleData.pricePerHour);
        formData.append("vehicleNumber", vehicleData.vehicleNumber);
        formData.append('isAvailaible' , vehicleData.isAvailaible) 
        if (image) {
            formData.append("image", image);
        };
        const response = await vehicleService.addVehicle(formData);
        console.log('response' , response);
        setVehicleData({ name: "", type: "", seats: "", location: "", pricePerHour: "" , vehicleNumber: ""});
        setImage(null);
        setIsLoading(false)
        if(!response) setIsLoading(false);
    };

    const locationOptions = [
        { value: "Sindhi Camp", label: "Sindhi Camp" },
        { value: "Narayan Singh Circle", label: "Narayan Singh Circle" },
        { value: "Jaipur Railway Station", label: "Jaipur Railway Station" },
    ];

    const availiableOptions = [
        {value: true , label: 'Availaible'} ,
        {value: false , label: 'Not availaible'} 
    ]

    return (
        <>
            <Loader isLoading={isLoading}/>
            <div className="bg-white p-4 h-full rounded shadow-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-2">Add Vehicle Details</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Group input fields side by side */}
            <div className="flex flex-wrap gap-4">
                <div className="flex-1">
                    <InputField
                        label="Vehicle Name"
                        id="name"
                        name="name"
                        value={vehicleData.name}
                        onChange={handleInputChange}
                        placeholder="Enter vehicle name"
                        required
                    />
                </div>
                <div className="flex-1">
                    <InputField
                        label="Vehicle Type"
                        id="type"
                        name="type"
                        value={vehicleData.type}
                        onChange={handleInputChange}
                        placeholder="Enter vehicle type"
                        required
                    />
                </div>
            </div>

            <div className="flex flex-wrap gap-4">
                <div className="flex-1">
                    <SelectField
                        label="Location"
                        id="location"
                        name="location"
                        value={vehicleData.location}
                        onChange={handleInputChange}
                        options={locationOptions}
                        placeholder="Select a location"
                        required
                    />
                </div>
                <div className="flex-1">
                    <InputField
                        label="Price per Hour"
                        id="pricePerHour"
                        name="pricePerHour"
                        value={vehicleData.pricePerHour}
                        onChange={handleInputChange}
                        placeholder="Enter price per hour"
                        required
                    />
                </div>
            </div>

            <div className="flex flex-wrap gap-4">
                <div className="flex-1">
                    <InputField
                        label="Number of Seats"
                        id="seats"
                        name="seats"
                        value={vehicleData.seats}
                        onChange={handleInputChange}
                        placeholder="Enter number of seats"
                        required
                    />
                </div>
                {/* Image upload field */}
            <div className="flex-1">
                <ImageUploadField
                    label="Upload Image"
                    id="vehicleImage"
                    onImageChange={(file) => setImage(file)}
                />
            </div>
            </div>

            <div className="flex gap-4">
                <div className="flex-1">
                    <InputField
                        label="Vehicle number"
                        id="vehicleNumber"
                        name="vehicleNumber"
                        value={vehicleData.vehicleNumber}
                        onChange={handleInputChange}
                        placeholder="Enter vehicle numbere"
                        required
                    />
                </div>
                <div className="flex-1">
                    <SelectField
                        label="Availaible"
                        id="availaible"
                        name="availaible"
                        value={vehicleData.isAvailaible}
                        onChange={handleInputChange}
                        options={availiableOptions}
                        placeholder="Select availaibility"
                        required
                    />
                </div>
                

            </div>

        
            {/* Buttons */}
            <div className="flex justify-end mt-6 gap-4">
                <Button
                    text="Reset"
                    type="button"
                    onClick={() => {
                        setVehicleData({ name: "", type: "", seats: "", location: "", pricePerHour: "" });
                        setImage(null);
                    }}
                    className="bg-gray-500"
                />
                <Button text="Submit" className="bg-blue-600" type="submit" />
            </div>
        </form>
            </div>
        </>

    );
};

export default AddVehiclePage;
