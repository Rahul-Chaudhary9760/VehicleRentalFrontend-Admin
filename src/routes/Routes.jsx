import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import VehicleList from "../pages/VehicleList";
import ProtectedLayout from "../layouts/ProtectedLayouts";
import AddVehiclePage from "../pages/AddVehiclePage";

export default function AdminRoutes (){
    return (
        <Router>
            <Routes>
                    {/* Public Routes */}
                <Route path="/" element={<Login/>}/>
                <Route  path="/signup" element={<Signup/>}/>

                    {/* Protected Routes */}
                <Route 
                    path="/dashboard" 
                    element={
                        <ProtectedLayout>
                            <Dashboard/>
                        </ProtectedLayout>
                    }
                />
                <Route 
                    path="/vehiclelist" 
                    element={
                        <ProtectedLayout>
                            <VehicleList/>
                        </ProtectedLayout>
                    }
                />
                <Route 
                    path="/addVehicle" 
                    element={
                        <ProtectedLayout>
                            <AddVehiclePage/>
                        </ProtectedLayout>
                    }
                />
                 
            </Routes>
        </Router>
    )
}