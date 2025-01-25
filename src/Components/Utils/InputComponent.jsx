import React from "react";

const InputField = ({
    label,
    id,
    name,
    type = "text",
    value,
    onChange,
    placeholder = "",
    required = false,
    className = "",
}) => {
    return (
        <div className={`mb-4 ${className}`}>
            <label className="block text-sm font-medium mb-2" htmlFor={id}>
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-3 py-2 border rounded"
                required={required}
            />
        </div>
    );
};

export default InputField;
