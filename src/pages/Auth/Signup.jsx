import { useState } from 'react';
import Button from '../../Components/Button/Button';
import { useNavigate } from "react-router-dom";
import authService from '../../services/authServices';

export default function Signup() {

    const navigate = useNavigate();
    const[error , setError] = useState(null);
    const [username , setusername] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");

    const handleNavigateToLogin = () => {
        navigate('/')
    }
    const handleSignup = async (e) => {
        console.log('inside handle signup');
        if(confirmPassword !== password) setError('Password does not match');
        e.preventDefault();
        try {
            const userRegister = await authService.register({username , password , role: 'admin'});
            console.log('userRegister' , userRegister);
            if(userRegister){
                navigate('/');
            }
        } catch (error) {
            console.error('Error in registering user' , error)
            setError('Error registering error' , error?.message);
        }
        
    }
    return (
        <>
            <div className='min-h-screen'> 
            
        <div className="flex flex-col items-center bg-black justify-center px-6 py-8  min-h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
            Logo    
        </a>
        <div className="w-full bg-White rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  text-black">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold  text-black md:text-2xl ">
                    Create an account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSignup}>
                    { error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-black">Your username</label>
                        <input type="username" value={username} onChange={(e) => setusername(e.target.value)} name="email" id="email" className="border border-gray-300 text-gray-900 text-sm rounded-lg bg-WhiteSecondary focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required=""/>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-black">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" value={password}
                        onChange={(e) => setPassword(e.target.value)} className="bg-WhiteSecondary border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                    </div>
                    <div>
                        <label for="confirm-password" className="block mb-2 text-sm font-medium text-black">Confirm password</label>
                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-WhiteSecondary border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "required=""/>
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                        </div>
                        <div className="ml-3 text-sm">
                            <label for="terms" className="font-light text-black">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                        </div>
                    </div>
                        <Button
                            type="submit"
                            text="Create an account"
                            className="w-full"
                        />
                    <p className="text-sm font-light text-black">
                        Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={handleNavigateToLogin}>Login here</a>
                    </p>
                </form>
            </div>
        </div>
  </div>

            </div>
        </>
    )
}