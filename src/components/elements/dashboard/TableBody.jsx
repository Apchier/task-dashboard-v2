/* eslint-disable react/prop-types */
const TableBody = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

const TableRow1 = ({ name, lastName, phone, email }) => {
    return (
        <tr className="odd:bg-gray-200 even:bg-white">
            <td className="w-1/3 text-left py-3 px-4">{name}</td>
            <td className="w-1/3 text-left py-3 px-4">{lastName}</td>
            <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href={`tel:${phone}`}>{phone}</a>
            </td>
            <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href={`mailto:${email}`}>{email}</a>
            </td>
        </tr>
    )
}

const TableRow2 = ({ name, lastName, phone, email }) => {
    return (
        <tr className="hover:bg-grey-lighter">
            <td className="py-4 px-6 border-b border-grey-light">{name}</td>
            <td className="py-4 px-6 border-b border-grey-light">{lastName}</td>
            <td className="py-4 px-6 border-b border-grey-light">{phone}</td>
            <td className="py-4 px-6 border-b border-grey-light">{email}</td>
        </tr>
    )
}

const TableRow3 = ({ user, role, created, status }) => {
    const getStatusStyles = (status) => {
        switch (status) {
            case 'Active':
                return {
                    textColor: 'text-green-900',
                    bgColor: 'bg-green-200',
                }
            case 'Suspended':
                return {
                    textColor: 'text-orange-900',
                    bgColor: 'bg-orange-200',
                }
            case 'Inactive':
                return {
                    textColor: 'text-red-900',
                    bgColor: 'bg-red-200',
                }
            default:
                return {
                    textColor: 'text-gray-900',
                    bgColor: 'bg-gray-200',
                }
        }
    }

    const { textColor, bgColor } = getStatusStyles(status);
    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {user}
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{role}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {created}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className={`relative inline-block px-3 py-1 font-semibold ${textColor} leading-tight`}>
                    <span aria-hidden className={`absolute inset-0 ${bgColor} opacity-50 rounded-full`}></span>
                    <span className="relative">{status}</span>
                </span>
            </td>
        </tr>
    )
}


TableBody.Row3 = TableRow3
TableBody.Row2 = TableRow2
TableBody.Row1 = TableRow1
export default TableBody
