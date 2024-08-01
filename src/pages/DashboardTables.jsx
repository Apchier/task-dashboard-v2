import Footer from "../components/fragments/dashboard/Footer";
import TableBody from "../components/elements/dashboard/TableBody";


export default function DashboardTables() {
    return (
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main className="w-full flex-grow p-6">
                <h1 className="text-3xl text-black pb-6">Tables</h1>

                <div className="w-full mt-6">
                    <p className="text-xl pb-3 flex items-center">
                        <i className="fas fa-list mr-3"></i> Table Example
                    </p>
                    <div className="bg-white overflow-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                                </tr>
                            </thead>
                            <TableBody>
                                <TableBody.Row1
                                    name="Lian"
                                    lastName="Smith"
                                    phone="622322662"
                                    email="jonsmith@mail.com"
                                />
                                <TableBody.Row1
                                    name="Emma"
                                    lastName="Johnson"
                                    phone="622322662"
                                    email="jonsmith@mail.com"
                                />
                                <TableBody.Row1
                                    name="Oliver"
                                    lastName="Williams"
                                    phone="622322662"
                                    email="jonsmith@mail.com"
                                />
                                <TableBody.Row1
                                    name="Isabella"
                                    lastName="Brown"
                                    phone="622322662"
                                    email="jonsmith@mail.com"
                                />
                            </TableBody>
                        </table>
                    </div>
                </div>

                <div className="w-full mt-12">
                    <p className="text-xl pb-3 flex items-center">
                        <i className="fas fa-list mr-3"></i> Table Example
                    </p>
                    <div className="bg-white overflow-auto">
                        <table className="text-left w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Last Name</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Phone</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Email</th>
                                </tr>
                            </thead>
                            <TableBody>
                                <TableBody.Row2
                                    name="Lian"
                                    lastName="Smith"
                                    phone="622322662"
                                    email="jonsmith@mail.com"
                                />
                                <TableBody.Row2
                                    name="Emma"
                                    lastName="Johnson"
                                    phone="622322662"
                                    email="jonsmith@mail.com"
                                />
                                <TableBody.Row2
                                    name="Oliver"
                                    lastName="Williams"
                                    phone="622322662"
                                    email="jonsmith@mail.com"
                                />
                                <TableBody.Row2
                                    name="Isabella"
                                    lastName="Brown"
                                    phone="622322662"
                                    email="jonsmith@mail.com"
                                />
                            </TableBody>
                        </table>
                    </div>
                </div>

                <div className="w-full mt-12">
                    <p className="text-xl pb-3 flex items-center">
                        <i className="fas fa-list mr-3"></i> Table Example
                    </p>
                    <div className="bg-white overflow-auto">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        User
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Rol
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Created at
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <TableBody>
                                <TableBody.Row3
                                    user="Vera Carpenter"
                                    role="Admin"
                                    created="Jan 21, 2020"
                                    status="Active"
                                />
                                <TableBody.Row3
                                    user="Blake Bowman"
                                    role="Editor"
                                    created="Jan 21, 2020"
                                    status="Active"
                                />
                                <TableBody.Row3
                                    user="Dana Moore"
                                    role="Editor"
                                    created="Jan 10, 2020"
                                    status="Suspended"
                                />
                                <TableBody.Row3
                                    user="Alonzo Cox"
                                    role="Admin"
                                    created="Jan 18, 2020"
                                    status="Inactive"
                                />
                            </TableBody>
                        </table>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

