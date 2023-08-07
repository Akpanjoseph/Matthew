import { Link } from 'react-router-dom'

import logo from '../../../assert/logo.png';
// import chart1 from '../../../assert/Analytics-amico.svg';
import chart1 from '../../../assert/chart1.png';
import chart2 from '../../../assert/chart2.png';
// import teamSpirit from '../../../assert/Team spirit.gif'






const Header = () => {
    return (

        <header className=' bg-primary w-full text-[#dcd4d4] py-4'>
           




            {/* caption */}
            <section >
                <div className='header-main '>

                    {/* text caption */}
                    <div className='w-full lg:w-[60%] text-center mb-8 lg:mb-0 lg:text-left'>
                        <h1 className='text-3xl lg:text-5xl capitalize'>Taking your productivity to maximum</h1>
                        <p className='text-md lg:text-2xl'>Focus more on creativity ,let's handle productivity  </p>
                    </div>

                    {/* productivity image */}
                    <div className='flex w-full justify-center items-center space-x-4 lg:w-[40%]  flex-row'>
                        <img src={chart1} alt="" className='w-[40%] lg:w-[50%]' />
                        <img src={chart2} alt="" className='w-[40%] lg:w-[50%]' />

                    </div>
                </div>

                {/* get started button */}
                <div className='mt-20 text-center'>
                    <Link to={'/login'}>
                        <button className=' bg-secondary w-[90%] py-2 text-md  rounded-md font-bold hover:bg-white hover:text-dark lg:w-[40%] lg:py-2 lg:text-2xl '>Get Started  </button>
                    </Link>

                </div>
            </section>



        </header>

    )
}

export default Header