import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faBell,
  faBook,
  faCog,
  faHome,
  faPieChart,
  faRightToBracket,
  faUser,
  faUserFriends,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assert/logo.png";
import Home from "./Component/Home";
import CreateProject from "./Component/CreateProject";
import Projects from "./Component/Projects";
import Meeting from "./Component/Meeting";
import Settings from "./Component/Settings";



const DashBoard = () => {

  const [display,setDisplay] = useState(<Home/>)
  const [active, setActive] = useState(1)

  

  return (
    <div className="w-full m-0 ">
      <div className="shadow px-4 flex fixed w-full justify-between bg-dark text-white py-2">
        {/* logo */}
        <div>
          <img src={logo} alt="" className="w-[150px]" />
        </div>

        <div className="pt-4 flex text-xl space-x-2 ">
          <p className=" font-bold ">DashBoard</p>
          {/* <p>project name</p> */}
        </div>

        {/* account */}
        <div className="flex space-x-8 mt-3">
          <FontAwesomeIcon icon={faBell} size="lg"  />

          {/* <p className="  bg-secondary flex justify-center p-4 items-center text-white w-[30px] h-[30px] text-xl rounded-full">
            <span>AJ</span>
          </p> */}

          <p className="shadow-md" >
              <FontAwesomeIcon icon={faUser} size="lg" />
            </p>

          <p className=" shadow-md" onClick={()=> setDisplay(<Settings/>)}>
              <FontAwesomeIcon icon={faCog} size="lg" />
            </p>
        </div>
      </div>

      {/* main dash board section */}
      <div className="flex w-full h-full space-x-4">
        <section className="w-[10%] pt-4  rounded-sm hidden   justify-center h-screen border-r-2 border-gray-300 shadow-md lg:flex">

          <aside className="w-full flex flex-col text-center pt-40 px-2 space-y-10  ">

            <p className={`hover:bg-secondary flex space-x-2 p-4 ${active == 1 ? 'bg-secondary text-white' : ''} rounded-md shadow-md `} onClick={()=> ( setDisplay(<Home/>), setActive(1))}>
              <FontAwesomeIcon icon={faPieChart} size="lg" /> <span>Projects</span>
            </p>

            <p className={`hover:bg-secondary p-4 flex space-x-2 ${active == 2 ? 'bg-secondary text-white' : ''} rounded-md shadow-md `} onClick={()=> (setDisplay(<CreateProject/>), setActive(2))}>
              <FontAwesomeIcon icon={faUserFriends} size="lg" /> <span>Teams</span>
            </p>

          
          </aside>
        </section>



        <section className="w-[80%] pt-10 text-dark">
         {display}
        </section>


      </div>
    </div>
  );
};

export default DashBoard;
