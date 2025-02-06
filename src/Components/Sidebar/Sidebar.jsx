import { Link } from "react-router-dom";
import Button from "../Button/Button";


export default function Sidebar () {
    return (
        <>
            <div className="w-50 h-screen bg-WhiteSecondary text-black  flex flex-col">
            <div className="p-4 mt-1 text-2xl font-bold">Admin Portal</div>
            <nav className="flex-1">
                <ul>
                    <li className="p-4 hover:bg-gray-300 hover:text-xl">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="p-4 hover:bg-gray-300 hover:text-xl">
                        <Link to="/vehiclelist">Vehicles List</Link>
                    </li>
                    <li className="p-4 hover:bg-gray-300 hover:text-xl">
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