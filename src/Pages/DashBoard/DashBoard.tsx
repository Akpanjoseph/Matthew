import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faCog,
  faMessage,
  faPieChart,
  faSignOut,
  faUser,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assert/logo.png";
// import Home from "./Component/Home";
import CreateProject from "./Component/ProjectSection/ProjectScreen";
// import Projects from "./Component/ProjectSection/ProjectCard";
// import Meeting from "./Component/Meeting";
import Settings from "./Component/Settings";
import Team from "./Component/TeamSection/TeamScreen";
// import { useStore } from "../../Store/store";
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import Meeting from "./Component/Meeting";

const DashBoard = () => {

  const [display,setDisplay] = useState(<CreateProject/>)
  const [active, setActive] = useState(1)

  

  return (
    <div className="w-full m-0  bg-slate-100">
      <div className="shadow px-4 flex fixed w-full justify-between bg-dark text-white py-2">
        {/* logo */}
        <div>
          <img src={logo} alt="" className="w-[150px]" />
        </div>

        <div className=" hidden pt-4 md:flex text-xl space-x-2 ">
          <p className=" font-bold ">DashBoard</p>
          {/* <p>project name</p> */}
        </div>

        {/* account */}
        <div className="hidden md:flex space-x-8 mt-3">
          {/* <FontAwesomeIcon icon={faBell} size="lg"  /> */}

          <p className="  bg-secondary flex justify-center p-4 items-center text-white w-[40px] h-[40px] text-xl rounded-full">
            <span>AJ</span>
          </p>

          <p className="flex justify-center items-center space-x-2 border-b-2 ">
            <span>Log out</span>
            <FontAwesomeIcon icon={faSignOut} />
          </p>

          {/* <p className="shadow-md" >
              <FontAwesomeIcon icon={faUser} size="lg" />
            </p> */}

          {/* <p className=" shadow-md" onClick={()=> setDisplay(<Settings/>)}>
              <FontAwesomeIcon icon={faCog} size="lg" />
            </p> */}
        </div>


        <FontAwesomeIcon icon={faBars} size="lg"  className="mt-3 md:hidden"/>
      </div>

      {/* main dash board section */}
      <div className="flex w-full h-full lg:space-x-4">
        <section className="w-[14%] lg:w-[8%] pt-4  rounded-sm  justify-center h-screen border-r-2 border-gray-300 shadow-md  md:flex">

          <aside className="w-full flex flex-col text-center pt-20  space-y-8  ">

          <Tippy content='Projects' placement="right">
            <p className={`flex  text-dark p-2 lg:p-4  ${active == 1 ? 'border-l-8 border-secondary   shadow-md text-lg  ' : 'shadow-sm'}  hover:text-white hover:bg-secondary hover:rounded-md `} onClick={()=> ( setDisplay(<CreateProject/>), setActive(1))}>
              <FontAwesomeIcon icon={faPieChart}  className="text-md lg:text-xl" /> 
            </p>
          </Tippy>

            {/* <Tippy content='Teams' placement="right">
            <p className={`flex  text-dark p-2 lg:p-4   ${active == 2 ? 'border-l-8 border-secondary   shadow-md text-lg  ' : 'shadow-sm'}  hover:text-white hover:bg-secondary hover:rounded-md `} onClick={()=> (setDisplay(<Team/>), setActive(2))}>
              <FontAwesomeIcon icon={faUserFriends} className="text-md lg:text-xl" /> 
            </p>
            </Tippy> */}


          <Tippy content='Inbox' placement="right">
            <p className={`flex  text-dark p-2 lg:p-4  ${active == 3 ? 'border-l-8 border-secondary   shadow-md text-lg  ' : 'shadow-sm'}  hover:text-white hover:bg-secondary hover:rounded-md `} onClick={()=> (setDisplay(<Meeting/>), setActive(3))}>
              <FontAwesomeIcon icon={faMessage} className="text-md lg:text-xl" /> 
            </p>
          </Tippy>

          

          
          </aside>
        </section>



        <section className="w-full lg::w-[70%]  text-dark ">
         {display}
        </section>


      </div>
    </div>
  );
};

export default DashBoard;
