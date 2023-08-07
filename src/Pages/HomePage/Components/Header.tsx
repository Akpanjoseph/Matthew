import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className=" bg-[#090909] w-full text-white pt-5 pb-4 px-4">
            {/* caption */}




            <div className=" w-full pt-16 flex flex-col lg:flex-row justify-between items-center space-y-6">

                {/* <div >
                    <img src="bg-gradient.svg" alt="" width={'30%'} className="absolute top-10 left-[20%]  " />
                </div> */}

                {/* text caption */}
                <div className="lg:w-[40%] w-full  box-content tracking-wide leading-relaxed text-left">
                    <h1 className="text-2xl  capitalize text-[#936EFF] font-extrabold ">
                        Taking Your Productivity To Maximum
                    </h1>
                    <p className=" py-2 text-xl lg:w-[80%]">
                        Focus more on creativity...let's handle productivity
                    </p>
                    <div className="mt-20 hidden lg:block ">
                        <Link to={"/login"} className=" bg-secondary w-full py-4 text-md  rounded-md font-bold hover:bg-white hover:text-dark lg:py-2  ">
                            <button className="w-full lg:w-[80%]">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>



                {/* productivity image */}
                <div className="md:w-[45%] box-content">
                    <img src={'track-productivity.png'} alt="" />
                    <p className="text-center">Productivity</p>
                </div>
            </div>

            {/* get started button */}
           < div className="mt-10  lg:hidden ">
                        <Link to={"/login"}>
                            <button className=" bg-secondary w-full py-2 text-md  rounded-md font-bold hover:bg-white hover:text-dark lg:py-2   ">
                                Get Started
                            </button>
                        </Link>
                    </div>
        </header>
    );
};

export default Header;
