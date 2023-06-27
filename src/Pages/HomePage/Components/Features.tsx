import {Link} from 'react-router-dom'

import easy from '../../../assert/Coffee break.png'
import focus from '../../../assert/Work time.gif'
import report from '../../../assert/Annotation-amico.png'

const Features = () => {
    return (
        <main className="container">
            <div className="head-container">

                {/* title */}
                <h1 className="title">Why use matthew</h1>
            </div>


            {/* feature 1 */}
            <section className='mt-10 px-4'>
                <div className='flex flex-col justify-center items-center space-y-4  w-full lg:flex-row '>
                    {/* feature text */}
                    <div className=' w-full lg:w-[45%]'>
                        <h1 className='font-bold text-3xl text-center lg:text-left'>Easy to use</h1>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum? Amet repellendus error nemo aliquid magnam, assumenda sed quam eveniet minus aspernatur corporis nisi eaque dolorum soluta quidem voluptatibus doloribus!</p>
                    </div>

                    {/* feature image */}
                    <div className='w-full flex justify-center items-center lg:w-[50%]'>
                        <img src={easy} alt="" className='w-[70%] lg:w-[75%]' />
                    </div>
                </div>

                {/* feature 2 */}

                <div className='flex flex-col-reverse justify-center items-center my-20 space-y-4  w-full lg:flex-row '>
                  

                  {/* feature image */}
                  <div className='w-full flex justify-center items-center lg:w-[50%]'>
                    <img src={focus} alt="" className='w-[70%] lg:w-[75%]' />
                </div>

                {/* feature text*/}
                <div className=' w-full lg:w-[45%]'>
                    <h1 className='font-bold text-3xl text-center lg:text-left'>Productivity Focused</h1>
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum? Amet repellendus error nemo aliquid magnam, assumenda sed quam eveniet minus aspernatur corporis nisi eaque dolorum soluta quidem voluptatibus doloribus!</p>
                </div>

            </div>


                {/* feature 3 */}
                <div className='flex flex-col justify-center items-center space-y-4 w-full lg:flex-row  '>
                    {/* feature text */}
                    <div className=' w-full lg:w-[45%]'>
                        <h1 className=' font-bold text-3xl text-center lg:text-left'>Generate Report</h1>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum? Amet repellendus error nemo aliquid magnam, assumenda sed quam eveniet minus aspernatur corporis nisi eaque dolorum soluta quidem voluptatibus doloribus!</p>
                    </div>


                    {/* feature image */}
                    <div className='w-full flex justify-center items-center lg:w-[50%]'>
                        <img src={report} alt="" className='w-[70%] lg:w-[75%%]' />
                    </div>
                </div>



            </section>


            {/* get started button */}
            <div className='mt-20 text-center'>
                <Link to={'/login'}>
                <button className=' bg-secondary text-white w-[90%] py-2 text-xl  rounded-md font-bold border-dark hover:border-2 hover:bg-white hover:text-dark lg:w-[40%] lg:py-2 lg:text-2xl '>Get Started  </button>
                </Link>

            </div>
        </main>
    )
}

export default Features