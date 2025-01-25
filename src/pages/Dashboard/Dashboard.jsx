export default function Dashboard(){
    return (
        <>
            <div className="p-6 bg-WhiteSecondary min-h-screen">
            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-500 text-white p-6 rounded shadow">
                    <h3 className="text-xl font-bold">Total Vehicles</h3>
                    <p className="text-3xl">10</p>
                </div>
                <div className="bg-green-500 text-white p-6 rounded shadow">
                    <h3 className="text-xl font-bold">Total Bookings</h3>
                    <p className="text-3xl">25</p>
                </div>
                <div className="bg-purple-500 text-white p-6 rounded shadow">
                    <h3 className="text-xl font-bold">Total Users</h3>
                    <p className="text-3xl">5</p>
                </div>
            </div>
        </div>
        </>
    )
}