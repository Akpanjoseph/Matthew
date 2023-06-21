
import logo from '../../../assert/logo.png';
import chart1 from '../../../assert/chart1.png';
import chart2 from '../../../assert/chart2.png';
import chart3 from '../../../assert/chart3.png';
import chart4 from '../../../assert/chart4.png';
import '../header-style.css'


const Header = () => {
    return (

        <header className=' bg-primary w-full text-[#dcd4d4] py-4'>
            <section className='nav-head'>
                {/* logo */}
                <div>
                    <img src={logo} alt="" className='w-[70%]' />
                </div>

                {/* links */}
                <div className='flex flex-row space-x-12 text-xl pt-10'>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Features</p>
                </div>

                {/* account */}
                <div className='pt-10 text-xl'>
                    <button className='px-4'>Log In</button>
                    <button className='mx-2 px-6 py-2 rounded-md  bg-secondary  hover:bg-white hover:text-black'>Sign Up</button>
                </div>
            </section>


            {/* caption */}
            <section >
                <div className='header-main '>

                    {/* text caption */}
                    <div className='w-[60%]'>
                        <h1 className='text-5xl capitalize'>Taking your productivity to maximum</h1>
                        <p className='text-2xl'>Focus more on creativity ,let's handle productivity  </p>
                    </div>

                        {/* productivity image */}
                    <div className='flex flex-row justify-center items-center w-[40%] space-x-4'>
                        <img src={chart1} alt="" className='w-[50%]' />
                        <img src={chart2} alt="" className='w-[50%]' />
                        {/* <img src={chart3} alt="" className='w-[50%]' />
                    <img src={chart4} alt="" className='w-[50%]' /> */}
                    </div>
                </div>

                    {/* get started button */}
                <div className='mt-20 text-center'>
                    <button className=' bg-secondary w-[40%] py-4 rounded-md text-2xl hover:bg-white hover:text-dark'>Get Started</button>
                </div>
            </section>

        </header>

    )
}

export default Header