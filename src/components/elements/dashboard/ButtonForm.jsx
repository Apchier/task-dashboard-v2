/* eslint-disable react/prop-types */
const BtnForm = ({ text }) => {
    return (
        <div className="mt-6">
            <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">{text}</button>
        </div>
    )
}

export default BtnForm