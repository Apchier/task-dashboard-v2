/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Tablink({ children, to }) {
    const location = useLocation()
    const isActive = location.pathname === to
    return (
        <Link to={to} className={`${isActive ? 'border-l border-t border-r rounded-t text-blue-700 font-semibold' : 'text-blue-500 hover:text-blue-800' } bg-white inline-block py-2 px-4 font-semibold`}>
            {children}
        </Link>
    )
}