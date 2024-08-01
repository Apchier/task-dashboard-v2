import '../index.css';
import { Outlet } from 'react-router-dom';
import TabLink from '../components/elements/dashboard/TabLink';
import Footer from '../components/fragments/dashboard/Footer';

export default function DashboardTabbed() {

    return (
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main className="w-full flex-grow p-6">
                <h1 className="text-3xl text-black pb-6">Tabbed Content</h1>
                <div className="w-full">
                    <div className="flex gap-2">
                        <div>
                            <TabLink to={"/tabbedcontent/tab1"} className="border-l border-t border-r rounded-t text-red-500 font-semibold bg-gray-100 inline-block py-2 px-4 hover:bg-gray-200" >
                                Tab 1
                            </TabLink>
                        </div>
                        <div>
                            <TabLink to={"/tabbedcontent/tab2"} className="border-l border-t border-r rounded-t text-green-500 font-semibold bg-gray-100 inline-block py-2 px-4 hover:bg-gray-200" >
                                Tab 2
                            </TabLink>
                        </div>
                        <div>
                            <TabLink to={"/tabbedcontent/tab3"} className="border-l border-t border-r rounded-t text-blue-500 font-semibold bg-gray-100 inline-block py-2 px-4 hover:bg-gray-200" >
                                Tab 3
                            </TabLink>
                        </div>
                        <div>
                            <TabLink to={"/tabbedcontent/tab4"} className="border-l border-t border-r rounded-t text-yellow-500 font-semibold bg-gray-100 inline-block py-2 px-4 hover:bg-gray-200" >
                                Tab 4
                            </TabLink>
                        </div>
                    </div>

                    <div className="bg-white p-6">
                        <Outlet />
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    )
}

