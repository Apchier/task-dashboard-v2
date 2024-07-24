import AsideLink from "../../elements/dashboard/AsideLink"
import { MdDashboard } from "react-icons/md";
import { BiSolidFileBlank } from "react-icons/bi";
import { FaTable } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";
import { FaTabletAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaPlus } from "react-icons/fa";

export default function Aside() {
    return (
        <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
            <div className="p-6">
                <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">
                    Admin
                </a>
                <button className="w-full bg-white cta-btn font-semibold gap-1 py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                    <FaPlus /> New Report
                </button>
            </div>
            <AsideLink>
                <AsideLink.Emblem to="/dashboard" icon={<MdDashboard />} text="Dashboard" />
                <AsideLink.Emblem to="/blankpage" icon={<BiSolidFileBlank />} text="Blank Page" />
                <AsideLink.Emblem to="/tables" icon={<FaTable />} text="Tables" />
                <AsideLink.Emblem to="/forms" icon={<MdFormatListBulleted />} text="Forms" />
                <AsideLink.Emblem to="/tabbedcontent" icon={<FaTabletAlt />} text="Tabbed Content" />
                <AsideLink.Emblem to="/calendar" icon={<SlCalender />} text="Calendar" />
            </AsideLink>
            <a href="#" className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4">
                <i className="fas fa-arrow-circle-up mr-3"></i>
                Upgrade to Pro!
            </a>
        </aside>
    )
}