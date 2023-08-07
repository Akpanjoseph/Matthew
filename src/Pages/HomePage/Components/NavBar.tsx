// @ts-nocheck

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Navigate, Navigator, Link } from 'react-router-dom'
// import logo from '../../../assert/logo.png';



const NavBar = () => {

    // const navigate =  Navigate()

    return (
        <section className=' w-full bg-[#090909] text-white px-4 shadow-md ' >
            {/* logo */}


            {/* links */}
            <div className=' '>

                <div className="pt-10">
                    <img src={'logo-dark.png'} alt="" className='w-[200px]' />

                </div>


                <div className="hidden lg:block absolute top-[10%] left-[35%] px-5 space-x-4 pb-4 text-center border-b-4 border-[#936EFF] text-[16px] leading-4 tracking-[0.2px]  ">
                    <Link to={'/'} className='px-4 hover:border-b-2 border-white' > Home</Link>

                    <Link to={'/login'} className='px-4 hover:border-b-2 border-white' >Docs</Link>


                    <Link to={'/login'} className='px-4 hover:border-b-2 border-white' >Log In</Link>

                    <Link to={'/signup'} className='px-6 py-2  rounded-full  bg-secondary  hover:bg-white hover:text-black'>Sign Up</Link>

                </div>
            </div>




            {/* mobile menu */}
            <div className='lg:hidden'>
                <FontAwesomeIcon icon={faBars} size="2xl" />
            </div>
        </section>

    )
}

export default NavBar