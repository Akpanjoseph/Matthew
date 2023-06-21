import easy from '../../assert/easy.jpg'

const Features = () => {
    return (
        <main className="my-20 lg:mt-40 lg:px-4">
            <div className="flex flex-col justify-center items-center">

                {/* title */}
                <h1 className=" capitalize underline text-center w-[95%] text-3xl font-semibold lg:w-[60%] lg:text-5xl">our unique features</h1>
            </div>


            {/* feature 1 */}
            <section className='mt-10'>
                <div className='flex flex-row justify-center items-center space-x-10 w-full'>
                     {/* feature text */}
                    <div className='font-bold w-[45%]'>
                        <h1 className='text-4xl'>Easy to use</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum? Amet repellendus error nemo aliquid magnam, assumenda sed quam eveniet minus aspernatur corporis nisi eaque dolorum soluta quidem voluptatibus doloribus!</p>
                    </div>

                     {/* feature image */}
                    <div className='w-[50%]'>
                        <img src={easy} alt="" className='w-[90%]' />
                    </div>
                </div>

                 {/* feature 2 */}
                <div className='flex flex-row justify-center items-center space-x-10 w-full my-4'>
                     {/* feature image */}
                    <div className='w-[50%]'>
                        <img src={easy} alt="" className='w-[90%]' />
                    </div>
                    
                     {/* feature text*/}
                    <div className='font-bold w-[45%]'>
                        <h1 className='text-4xl'>Productivity Focused</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum? Amet repellendus error nemo aliquid magnam, assumenda sed quam eveniet minus aspernatur corporis nisi eaque dolorum soluta quidem voluptatibus doloribus!</p>
                    </div>

                </div>

                 {/* feature 3 */}
                <div className='flex flex-row justify-center items-center space-x-10 w-full'>
                     {/* feature text */}
                    <div className='font-bold w-[45%]'>
                        <h1 className='text-4xl'>Generate Report</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum? Amet repellendus error nemo aliquid magnam, assumenda sed quam eveniet minus aspernatur corporis nisi eaque dolorum soluta quidem voluptatibus doloribus!</p>
                    </div>

                    {/* feature image */}
                    <div className='w-[50%]'>
                        <img src={easy} alt="" className='w-[90%]' />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Features