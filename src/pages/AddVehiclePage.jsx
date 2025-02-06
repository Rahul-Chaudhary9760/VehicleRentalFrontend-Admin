import React, { useState } from "react";
import InputField from "../Components/Utils/InputComponent";
import Button from "../Components/Button/Button";
import SelectField from "../Components/Utils/SelectComponent";
import ImageUploadField from "../Components/Utils/ImageUploadComponent";

const AddVehiclePage = ({ onSubmit }) => {
    const [vehicleData, setVehicleData] = useState({
        name: "",
        type: "",
        seats: "",
        location: "",
        pricePerHour: "",
        vehicleNumber: ""
    });

    const [image, setImage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVehicleData({ ...vehicleData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("vehicleData", JSON.stringify(vehicleData));
        if (image) {
            formData.append("image", image);
        }
        onSubmit(formData); // Pass the form data back to the parent
        setVehicleData({ name: "", type: "", seats: "", location: "", pricePerHour: "" });
        setImage(null);
    };

    const locationOptions = [
        { value: "sindhiCamp", label: "Sindhi Camp" },
        { value: "narayanSinghCircle", label: "Narayan Singh Circle" },
        { value: "jaipurRailwayStation", label: "Jaipur Railway Station" },
    ];

    return (
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
            <div className="w-1/2">
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

    );
};

export default AddVehiclePage;
