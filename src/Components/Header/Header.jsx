import Button from "./Button"
import { useNavigate } from "react-router-dom"


function Header (){
    const navigate = useNavigate();
    const handleLoginButton = () => {
        navigate('/login')
    }
    return (
        <>
            <div>
                <div className="flex justify-between text-base bg-black text-white h-[10vh] p-4">
                    <div className="text-White flex items-center">
                        ##
                    </div>
                    <div className="text-White items-center flex">
                            Carzy
                    </div>
                    <div className="text-White outline-2 bg-blue-700 flex items-center">
                       <Button 
                            text="Login"
                            onClick={handleLoginButton}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Header