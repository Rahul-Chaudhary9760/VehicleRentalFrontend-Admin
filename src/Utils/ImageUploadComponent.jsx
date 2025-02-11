import React, { useState  , useRef} from "react";
import Button from "../Components/Button/Button";

const ImageUploadField = ({ label, id, onImageChange, previewSize = "w-32 h-32" }) => {
    const [preview, setPreview] = useState("");
    const fileInputRef = useRef(null);
    const [image, setImage] = useState(null);


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
                onImageChange(file); // Pass the file back to the parent
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setPreview(""); // Clear the preview
        setImage(null); // Remove the selected image
        onImageChange(null); // Inform parent component that the image is removed
        if (fileInputRef.current) {
            fileInputRef.current.value = ""; // Reset the file input value
        }
    };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor={id}>
                {label}
            </label>
            <div className="flex-row space-x-1">
            <input
                type="file"
                id={id}
                accept="image/*"
                onChange={handleImageChange}
                className="w-[80%] px-1 py-1 border rounded"
                ref={fileInputRef}
            />
            {
                preview && (
                    <Button
                text="Remove"
                className="bg-red-500"
                onClick={handleRemoveImage}
            />
                )
            }
            
            </div>
            
            {preview && (
                <div className="p-2">
                    <img src={preview} alt="Preview" className={`${previewSize} object-cover rounded`} />
                    
                </div>
            )}
        </div>
    );
};

export default ImageUploadField;
