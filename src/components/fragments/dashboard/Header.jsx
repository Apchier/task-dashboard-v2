import HeaderLink from "../../elements/dashboard/HeaderLink"
import { MdDashboard } from "react-icons/md";
import { BiSolidFileBlank } from "react-icons/bi";
import { FaTable } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";
import { FaTabletAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { RiUserSettingsFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function Header() {
    return (
        <>
            {/* <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
                <div className="w-1/2"></div>
                <div className="relative w-1/2 flex justify-end">
                    <button className="relative z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                        <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" alt="User avatar" />
                    </button>
                    <button className="h-full w-full fixed inset-0 cursor-default"></button>
                    <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                        <a href="#" className="block px-4 py-2 account-link hover:text-white">Account</a>
                        <a href="#" className="block px-4 py-2 account-link hover:text-white">Support</a>
                        <a href="#" className="block px-4 py-2 account-link hover:text-white">Sign Out</a>
                    </div>
                </div>
            </header> */}

            <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
                <div className="flex items-center justify-between">
                    <HeaderLink>
                        <HeaderLink.Admin to="/dashboard" className={"text-white text-3xl font-semibold uppercase hover:text-gray-300"} text="Admin" />
                    </HeaderLink>
                    <button className="text-white text-3xl focus:outline-none">
                        <FaXmark />
                    </button>
                </div>

                <HeaderLink>
                    <HeaderLink.Emblem to="/dashboard" icon={<MdDashboard />} text="Dashboard" />
                    <HeaderLink.Emblem to="/blankpage" icon={<BiSolidFileBlank />} text="Blank Page" />
                    <HeaderLink.Emblem to="/tables" icon={<FaTable />} text="Tables" />
                    <HeaderLink.Emblem to="/forms" icon={<MdFormatListBulleted />} text="Forms" />
                    <HeaderLink.Emblem to="/tabbedcontent" icon={<FaTabletAlt />} text="Tabbed Content" />
                    <HeaderLink.Emblem to="/calendar" icon={<SlCalender />} text="Calendar" />
                    <HeaderLink.Emblem to="/support" icon={<RiUserSettingsFill />} text="Support" />
                    <HeaderLink.Emblem to="/myaccount" icon={<FaUserAlt />} text="My Account" />
                    <HeaderLink.Emblem to="/signout" icon={<FaSignOutAlt />} text="Sign Out" />
                    <button className="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                        <i className="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
                    </button>
                </HeaderLink>

            </header>
        </>
    )
}