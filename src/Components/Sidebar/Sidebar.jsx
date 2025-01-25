import { Link } from "react-router-dom";
import Button from "../Button/Button";


export default function Sidebar () {
    return (
        <>
            <div className="w-64 h-screen bg-[#6577B3] text-white flex flex-col">
            <div className="p-4 text-2xl font-bold">Admin Portal</div>
            <nav className="flex-1">
                <ul>
                    <li className="p-4 hover:bg-gray-600">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="p-4 hover:bg-gray-700">
                        <Link to="/vehiclelist">Vehicles List</Link>
                    </li>
                    <li className="p-4 hover:bg-gray-700">
                        <Link to="/addVehicle">Add Vehicle</Link>
                    </li>
                </ul>
            </nav>
            <div className="p-4">
                <Button
                    text="Logout"
                    className="w-full bg-red-600 p-2"   
                />
            </div>
        </div>
        </>
    )
}