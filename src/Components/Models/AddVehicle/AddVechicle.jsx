import React, { useState } from "react";
import InputField from "../../Utils/InputComponent";
import Button from "../../Button/Button";
import SelectField from '../../Utils/SelectComponent';
import ImageUploadField from "../../Utils/ImageUploadComponent";


const Modal = ({isOpen, onClose, onSubmit, size = "w-1/3" }) => {
    const [vehicleData, setVehicleData] = useState({
        name: "",
        type: "",
        seats: "",
        location:"",
        pricePerHour:""
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
        setImagePreview("");
    };

    const locationOptions = [
        { value: "sindhiCamp", label: "Sindhi Camp" },
        { value: "narayanSinghCircle", label: "Narayan Singh Circle" },
        { value: "jaipurRailwayStation", label: "Jaipur Railway Station" },
    ];

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
        
        >
            <div
                className={`bg-white p-6 rounded shadow-lg ${size}`}
                role="dialog"
                aria-labelledby="modal-title"
                aria-hidden={!isOpen}
            >
                <h3 id="modal-title" className="text-xl font-bold mb-4 text-center">
                    Add Vehicle Details
                </h3>
                <form onSubmit={handleSubmit}>
                    <InputField
                        label="Vehicle Name"
                        id="name"
                        name="name"
                        value={vehicleData.name}
                        onChange={handleInputChange}
                        placeholder="Enter name"
                        required
                    />
                    <InputField
                        label="Vehicle Type"
                        id="type"
                        name="type"
                        value={vehicleData.type}
                        onChange={handleInputChange}
                        required
                    />
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
                    <InputField
                        label="Price per Hour"
                        id="pricePerHour"
                        name="pricePerHour"
                        value={vehicleData.pricePerHour}
                        onChange={handleInputChange}
                        required
                    />
                    <InputField
                        label="Number of Seats"
                        id="seats"
                        name="seats"
                        value={vehicleData.seats}
                        onChange={handleInputChange}
                        required
                    />
                    <ImageUploadField
                        label="Upload Image"
                        id="vehicleImage"
                        onImageChange={(file) => setImage(file)}
                    />
                    <div className="flex justify-end mt-4">
                        <Button
                            text="Cancel"
                            onClick={onClose}
                            className="bg-gray-500"
                        />
                        <Button
                            text="Save"
                            className="bg-blue-600"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
