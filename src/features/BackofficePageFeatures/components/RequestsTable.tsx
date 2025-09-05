// src/features/BackofficePageFeatures/components/RequestsTable.tsx
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import type { RequestsType } from '../types/RequestsType';

type RequestsTableProps = {
    data: RequestsType[];
    onAccept: (requestId: number) => void;
    onReject: (requestId: number) => void;
};

const RequestsTable = ({ data, onAccept, onReject }: RequestsTableProps) => {
    return (
        <div data-theme="light">
            {/* <table className="table-auto w-full border-collapse border border-gray-300 text-sm lg:text-base"> */}
            <table  className="table --table-zebra w-full">
                <thead>
                    <tr className="text-gray-600 font-semibold border-b-2 border-gray-300">
                        <th className="px-4 py-2 text-left">Index</th>
                        <th className="px-4 py-2 text-left">Property</th>
                        <th className="px-4 py-2 text-left">Listing Type</th>
                        <th className="px-4 py-2 text-left">Client</th>
                        <th className="px-4 py-2 text-left">Status</th>
                        <th className="px-4 py-2 text-left">Date</th>
                        <th className="px-4 py-2 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? (
                        data.map((request, index) => (
                            <tr
                                key={request.id}
                                className={`transition-colors duration-200 hover:bg-gray-50 `}>
                                <td className="px-4 py-3 align-top">{index + 1}</td>

                                <td className="px-4 py-3 align-top max-w-xs">
                                    <p className="font-semibold text-gray-800 truncate">{request.property.address}</p>
                                    <p className="text-xs text-gray-500">{request.property.price.toLocaleString('en-US')} €</p>
                                </td>

                                <td className="px-4 py-3 align-top capitalize">{request.property.listingType}</td>

                                <td className="px-4 py-3 align-top">
                                    <div className="flex items-center space-x-2">
                                        {request.client.profilePicture && (
                                            <img
                                                src={`/uploads/profiles/${request.client.profilePicture}`}
                                                alt={`${request.client.firstname} ${request.client.lastname}`}
                                                className="w-8 h-8 rounded-full object-cover"
                                            />
                                        )}
                                        <span className="font-medium text-gray-800 whitespace-nowrap">
                                            {request.client.firstname} {request.client.lastname}
                                        </span>
                                    </div>
                                </td>

                                <td className="px-4 py-3 align-top">
                                    <span
                                        className={`badge capitalize ${request.status === 'ACCEPTED'
                                            ? 'badge-success'
                                            : request.status === 'PENDING'
                                                ? 'badge-warning'
                                                : 'badge-error'
                                            }`}
                                    >
                                        {request.status}
                                    </span>
                                </td>

                                <td className="px-4 py-3 align-top text-gray-600">
                                    {new Date(request.createdAt).toLocaleDateString()}
                                </td>

                                <td className="relative">
                                    <span className="relative group">
                                        <button
                                            type="button"
                                            aria-label="More options"
                                            className="p-1 rounded-md text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
                                        >
                                            <EllipsisVerticalIcon className="h-6 w-6" />
                                        </button>

                                        <div className="absolute -left-18 -top-3 mt-0 hidden gap-1 bg-white border rounded shadow p-1 z-10 group-hover:grid">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-success"
                                                onClick={() => onAccept(request.id)} // This is the corrected line
                                            >
                                                Accept
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-error"
                                                onClick={() => onReject(request.id)} // This is the corrected line
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    </span>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7} className="text-center py-4 text-gray-500">
                                No requests found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
export default RequestsTable;