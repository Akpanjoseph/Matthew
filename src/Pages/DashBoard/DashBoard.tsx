import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAdd,faBell,faBook,faChartColumn,faCog,faHome} from '@fortawesome/free-solid-svg-icons'
import logo from '../../assert/logo.png'
const DashBoard = () => {
    return (
        <div className="w-full m-0 ">
            <div className='shadow-md p-4 flex  justify-between'>

                {/* logo */}
                <div >
                    <img src={logo} alt="" className='w-[150px]' />
                </div>

                <div className='pt-4 flex text-xl space-x-2 '>
                    <p className=' font-bold text-dark'>DashBoard</p>
                    {/* <p>project name</p> */}
                </div>

                {/* account */}
               <div className='flex space-x-4'>
                <FontAwesomeIcon icon={faBell} size='lg' className='pt-4' />

               <p className='  bg-secondary flex justify-center items-center text-white w-[50px] h-[50px] text-2xl rounded-full'>
                  <span>AJ</span>
                </p>
               </div>
               
            </div>


            {/* main dash board section */}
            <div className='flex w-full space-x-4'>

                <section className='w-[10%] lg:w-[6%] mt-2 pt-10 bg-dark text-white rounded-sm flex  justify-center h-screen shadow-md'>
                    <aside className='w-full flex flex-col text-center  space-y-10  '>
                        <p className='bg-secondary p-4 rounded-md shadow-md '><FontAwesomeIcon icon={faHome} size='xl' /></p>
                        <p><FontAwesomeIcon icon={faAdd} size='xl' /></p>
                        <p><FontAwesomeIcon icon={faBook} size='xl' /></p>
                        <p><FontAwesomeIcon icon={faChartColumn} size='xl' /></p>
                        <p><FontAwesomeIcon icon={faHome} size='xl' /></p>
                        <p><FontAwesomeIcon icon={faCog} size='xl' /></p>
                        
                    </aside>

                    
                </section>

                <section className='w-[80%] pt-10'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque commodi deserunt optio eos, facilis debitis maxime architecto dolore sapiente placeat tenetur reiciendis eum ullam adipisci ut recusandae explicabo iure nesciunt!</p>
                </section>
            </div>
        </div>
    )
}

export default DashBoard; 