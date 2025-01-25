import Sidebar from "../Components/Sidebar/Sidebar"


export default function ProtectedLayout({ children }) {
    return (
        <>
            <div className="flex">
                <Sidebar/>
                {/* main Content */}
            <div className="flex-1">
                {children}  
            </div>
            </div>

        </>
    )
}