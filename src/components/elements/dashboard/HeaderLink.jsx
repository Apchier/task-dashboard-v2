/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const HeaderLink = ({ children }) => {
    return (
        <nav className="flex w-full flex-col pt-4">
            {children}
        </nav>
    )
}

const Emblem = ({ icon, text, className, to }) => {
    return (
        <Link to={to} className="flex items-center text-white opacity-75 hover:opacity-100 py-4 gap-3 pl-6 nav-item cursor-pointer">
            <span className={`${className}`}>{icon}</span>
            {text}
        </Link>
    )
}

HeaderLink.Emblem = Emblem
export default HeaderLink
