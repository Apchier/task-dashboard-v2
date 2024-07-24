import Aside from "./components/fragments/dashboard/Aside";
import Charts from "./components/fragments/dashboard/Charts";
import Header from "./components/fragments/dashboard/Header";
import Table from "./components/fragments/dashboard/Table";
import Footer from "./components/fragments/dashboard/Footer";

export default function App() {
    return (
        <div className="bg-gray-100 font-family-karla flex">
            <Aside />

            <div className="w-full flex flex-col h-full">
                <Header />

                <div className="w-full overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <h1 className="text-3xl text-black pb-6">Dashboard</h1>

                        <Charts />

                        <div className="w-full mt-12">
                            <p className="text-xl pb-3 flex items-center">
                                <i className="fas fa-list mr-3"></i> Latest Reports
                            </p>
                            <div className="bg-white overflow-auto">
                                <Table />
                            </div>
                        </div>
                    </main>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
