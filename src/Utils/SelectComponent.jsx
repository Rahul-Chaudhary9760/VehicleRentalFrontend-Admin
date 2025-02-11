import React from "react";

const SelectField = ({
    label,
    id,
    name,
    value,
    onChange,
    options = [],
    placeholder = "Select an option",
    required = false,
    className = "",
}) => {
    return (
        <div className={`mb-4 ${className}`}>
            <label className="block text-sm font-medium mb-2" htmlFor={id}>
                {label}
            </label>
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full px-3 py-2 border rounded"
                required={required}
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;
