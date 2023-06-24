import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import { faGoogle, faMicrosoft } from "@fortawesome/free-brands-svg-icons";

const Login = () => {

    const [username, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    return (
        <div className="flex flex-col justify-center items-center w-full h-full  mt-10  md:s:w-screen md:h-screen ">
            <div>
                <h1 className="title">Login</h1>
            </div>


            <div className="shadow-sm  w-full p-2 lg:p-4 lg:w-[40%] lg:shadow-xl">
                <form action="">
                    <div className="border my-4  w-full rounded-md">
                        <input type="text" placeholder="username" value={username} onChange={(text) => setName(text.target.value)} className="w-full py-4 lg:py-2 px-4 rounded-md" />
                    </div>

                    <div className="border my-4 w-full rounded-md ">
                        <input type="password" placeholder="password" value={email} onChange={(text) => setEmail(text.target.value)} className="w-full py-4 lg:py-2 px-4 rounded-md" />
                     
                    </div>

                    <div className="flex  items-center justify-center w-full  ">
                        <div className=" flex justify-center items-center rounded-md  bg-dark text-white py-2 w-[80%] lg:w-[70%]      space-x-3">
                            <button type="submit" className="  ">Login
                            </button>
                            <FontAwesomeIcon icon={faArrowCircleRight} className="" />
                        </div>
                    </div>

                    <p className="py-4 text-red-600 underline">Forgot Password?</p>
                </form>
            </div>


            <p className="text-center my-4 capitalize ">----or----</p>

            {/* login using google account */}
            <div className="flex flex-col items-center justify-center w-full space-y-4  p-2 lg:p-4 lg:w-[30%]  ">
                <div className="flex justify-center w-full">
                    <FontAwesomeIcon icon={faGoogle} size="3x" />
                    <p className="pt-4 px-4">Google</p>
                </div>
                <hr />
                <div className="flex justify-center  w-full">
                    <FontAwesomeIcon icon={faMicrosoft} size="3x" className="text-blue-500" />
                    <p className="pt-4 px-4">Microsoft</p>
                </div>

                 {/* sign in */}
                <div className=" flex flex-col justify-center items-center space-x-2 py-4 w-full md:flex-row">
                    <p className="text-xl underline">Don't have account ?</p>
                    <button  className="bg-secondary text-white px-4 py-2 rounded-md">Create Account</button>
                </div>
            </div>
        </div>
    )
}

export default Login