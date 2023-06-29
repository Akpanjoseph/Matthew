import { useFormik } from "formik";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { faGoogle, faMicrosoft, faFacebookSquare, faApple } from "@fortawesome/free-brands-svg-icons";
// import {userLoginSchema} from '../../../Schemas/index'
const Login = () => {



    const { handleChange, values, handleBlur } = useFormik<any>({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: function () { },
        // validationSchema: userLoginSchema
    })
    console.log(values);


    return (
        <div className="flex flex-col justify-center items-center w-full h-full  mt-10  md:s:w-screen md:h-screen ">

            <div className="flex justify-start items-center w-full px-2 md:px-8 md:my-4 text-xl mb-10">
                <Link to={'/'}>
                    <FontAwesomeIcon icon={faArrowCircleLeft} className="text-4xl" /> <span>Back</span>
                </Link>
            </div>

            <div>
                <h1 className="title">Login</h1>
            </div>


            <div className="shadow-sm  w-full p-2 lg:p-4 lg:w-[40%] lg:shadow-xl">
                <form action="" >
                    <div className="border my-4  w-full rounded-md">
                        <input type="text"
                            id="email" placeholder="Email"
                            value={values.email} onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full py-4 lg:py-2 px-4 rounded-md" />
                    </div>

                    <div className="border my-4 w-full rounded-md ">
                        <input id="password"
                            type="Password" placeholder="password" value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full py-4 lg:py-2 px-4 rounded-md" />

                    </div>

                    <div className="flex  items-center justify-center w-full  ">
                        <Link to={'/dashboard'} className="flex justify-center items-center rounded-md  bg-dark text-white py-2 w-[80%] lg:w-[70%]  space-x-3">
                            
                                <button type="submit" className="">Login
                                </button>
                                <FontAwesomeIcon icon={faArrowCircleRight} className="" />
                            
                        </Link>
                    </div>

                    <p className="py-4 text-red-600 underline">Forgot Password?</p>
                </form>
            </div>


            <p className="text-center my-4 capitalize ">----or----</p>

            {/* login using google account */}
            <div className="grid grid-cols-2 items-center justify-center w-full space-x-2 space-y-4  p-2 lg:space-x-8 lg:p-4 lg:w-[60%] lg:grid-cols-4   ">
                <div className="flex justify-center w-full">
                    <FontAwesomeIcon icon={faGoogle} size="3x" />
                    <p className="mt-4 pt-2 px-4">Google </p>
                </div>

                {/* <hr /> */}
                <div className="flex justify-center  w-full">
                    <FontAwesomeIcon icon={faMicrosoft} size="3x" className="text-blue-500" />
                    <p className="pt-4 px-4">Microsoft</p>
                </div>

                <div className="flex justify-center  w-full">
                    <FontAwesomeIcon icon={faFacebookSquare} size="3x" className="text-blue-500" />
                    <p className="pt-4 px-4">Facebook</p>
                </div>

                <div className="flex justify-center  w-full">
                    <FontAwesomeIcon icon={faApple} size="3x" className="text-dark" />
                    <p className="pt-4 px-4">Apple Id</p>
                </div>


            </div>
            {/* sign in */}
            <div className=" flex flex-col justify-center items-center space-x-2 py-4 w-full md:flex-row">
                <p className="text-xl underline">Don't have account ?</p>

                <Link to={'/signup'}>
                    <button className="bg-secondary text-white px-4 py-2 rounded-md">Create Account</button>
                </Link>
            </div>
        </div>
    )
}

export default Login