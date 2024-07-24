import DashboardMainLayout from "./components/layouts/dashboard/DashboardMainLayout";
import Dashboard from "./pages/Dashboard";
import DashboardBlankPage from "./pages/DashboardBlankPage";
import DashboardTables from "./pages/DashboardTables";
import DashboardForms from "./pages/DashboardForms";
import DashboardTabbed from "./pages/DashboardTabbed";
import DashboardCalendar from "./pages/DashboardCalendar";

import {
    createBrowserRouter,
    Route,
    createRoutesFromElements
} from "react-router-dom";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DashboardMainLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="blankpage" element={<DashboardBlankPage />} />
            <Route path="tables" element={<DashboardTables />} />
            <Route path="forms" element={<DashboardForms />} />
            <Route path="tabbedcontent" element={<DashboardTabbed />} />
            <Route path="calendar" element={<DashboardCalendar />} />
        </Route>
    )
)

