import DashboardMainLayout from "./components/layouts/dashboard/DashboardMainLayout";
import Dashboard from "./pages/Dashboard";
import DashboardBlankPage from "./pages/DashboardBlankPage";
import DashboardTables from "./pages/DashboardTables";
import DashboardForms from "./pages/DashboardForms";
import DashboardTabbed from "./pages/DashboardTabbed";
import DashboardCalendar from "./pages/DashboardCalendar";
import Tab1 from "./pages/sub-tab-pages/Tab1";
import Tab2 from "./pages/sub-tab-pages/Tab2";
import Tab3 from "./pages/sub-tab-pages/Tab3";
import Tab4 from "./pages/sub-tab-pages/Tab4";

import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    Navigate
} from "react-router-dom";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DashboardMainLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="blankpage" element={<DashboardBlankPage />} />
            <Route path="tables" element={<DashboardTables />} />
            <Route path="forms" element={<DashboardForms />} />
            <Route path="tabbedcontent" element={<DashboardTabbed />}>
                <Route index element={<Navigate to="tab1" />} />
                <Route path="tab1" element={<Tab1 />} />
                <Route path="tab2" element={<Tab2 />} />
                <Route path="tab3" element={<Tab3 />} />
                <Route path="tab4" element={<Tab4 />} />
            </Route>
            <Route path="calendar" element={<DashboardCalendar />} />
        </Route>
    )
)
