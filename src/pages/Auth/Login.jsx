import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import authService from "../../services/authServices";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [username , setusername] = useState("");
  const [password , setPassword] = useState("");
  const [error , setError] = useState(null);
  const handleSignUpButton = () => {
    navigate('/signup');
  }
  console.log('email ,passw' , username , password);
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userData = await authService.login({username, password});
      console.log('login successful' , userData);

    } catch (error) {
        setError(error);
    }
  }
    return (
      <>
        <div className="flex min-h-screen   flex-1 flex-col justify-center bg-black  text-White px-6 py-12 lg:px-8">
            <div className=" text-black flex justify-center   ">

          {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-White text-black">
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div> */}
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  bg-White text-black p-4 rounded-lg shadow-lg">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-White text-black">
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-6 text-center text-2xl/9 font-semibold tracking-tight text-gray-900">
              Sign into your account
            </h2>
          </div>
            <form onSubmit={handleLogin} className="space-y-6 mt-6 ">
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Email address or username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2  sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div className="flex justify-center">
                <Button
                    type="submit"
                    text="Sign in"
                    className="w-full"
                />
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Not have an account?{' '}
              <Link to="/signup" className="text-black font-medium hover:font-semibold">
                Sing up
              </Link>
            </p>
          </div>
            </div>
        </div>
      </>
    )
  }
  