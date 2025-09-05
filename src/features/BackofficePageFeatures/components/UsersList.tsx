export default function UsersList() {
    return (
        <>
            <div className="flex items-center --justify-center gap-2">
                <img src={`/uploads/profiles/woman (9).jpg`} alt="" className="w-10 rounded-2xl" />
                <p>Samira</p>

            </div>
            <table className="table --table-zebra w-full">
                <thead>
                    <tr className="text-gray-600 font-semibold border-b-2 border-gray-300">
                        <th className="px-4 py-2 text-left">id</th>
                        <th className="px-4 py-2 text-left">User</th>
                        <th className="px-4 py-2 text-left">Roll</th>
                        <th className="px-4 py-2 text-left">Client</th>
                        <th className="px-4 py-2 text-left">Status</th>
                        <th className="px-4 py-2 text-left">Date</th>
                        <th className="px-4 py-2 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </>
    );
}