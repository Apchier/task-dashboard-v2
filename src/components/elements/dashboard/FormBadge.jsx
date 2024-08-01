/* eslint-disable react/prop-types */
const InputField = ({ id, name, type, placeholder, required }) => {
    return (
        <div className="mt-2">
            <label htmlFor={id} className="block text-sm text-gray-600">
                {placeholder}
            </label>
            <input
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id={id}
                name={name}
                type={type}
                required={required}
                placeholder={placeholder}
            />
        </div>
    )
}

export default InputField
