/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"

const AsideLink = ({ children }) => {
    return (
        <nav className="flex w-full flex-col pt-4">
            {children}
        </nav>
    )
}

const Admin = ({ to, text }) => {
    return (
        <Link to={to} className="text-white text-3xl font-semibold uppercase hover:text-gray-300">
            {text}
        </Link>
    )
}

const Emblem = ({ icon, text, className, to }) => {
    const location = useLocation()
    const isActive = location.pathname === to
    return (
        <Link to={to} className={`flex items-center text-white opacity-75 hover:opacity-100 py-4 gap-3 pl-6 nav-item cursor-pointer ${isActive ? 'active-nav-link' : ''}`}>
            <span className={`${className}`}>{icon}</span>
            {text}
        </Link>
    )
}

AsideLink.Admin = Admin
AsideLink.Emblem = Emblem
export default AsideLink
