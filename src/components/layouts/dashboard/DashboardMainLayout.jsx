import Aside from "../../fragments/dashboard/Aside";
import Header from "../../fragments/dashboard/Header";
import { Outlet } from "react-router-dom";
// import Dashboard from "../../../pages/Dashboard";


export default function App() {
    return (
        <div className="bg-gray-100 font-family-karla flex">
            <Aside />

            <div className="w-full flex flex-col h-full">
                <Header />
                <Outlet />
                {/* <Dashboard /> */}
            </div>
        </div>
    )
}
