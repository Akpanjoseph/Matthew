//@ts-nocheck
import { faAdd, faSearch, faSort, faSortAlphaAsc, faSortAlphaDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import working from "../../../../assert/Working-amico.png";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import CreateProjectModal from "./CreateProjectModal";
import Projects from "./ProjectCard";
import { useStore } from "../../../../Store/store";

const CreateProject = () => {
  // const [projects, setProject] = useState(data);
  const [displayModal, setDisplayModal] = useState();

  const userProjects = useStore((store) => store.userProject);
  const showModal = useStore((store) => store.showModal);

  // useEffect(()=>{},[projects])

  function userModal(){
    showModal(true)
    setDisplayModal(<CreateProjectModal />)
  }

  return (
    <div
      className={`flex flex-col lg:justify-center ${
        userProjects.length > 0
          ? "w-full mt-20"
          : "  lg:items-center w-full mt-20"
      }`}
    >
      <div className="flex justify-center  lg:px-0 absolute bottom-20 right-10 lg:right-20">
        <button
          className="flex flex-col justify-center items-center w-20 h-20 rounded-full  bg-dark text-white p-4 text-sm shadow-md lg:text-xl "
          onClick={() => userModal() }
        >
          {/* <span>Create Project</span> */}
          <FontAwesomeIcon
            icon={faAdd}
            className="text-lg lg:text-xl font-bold"
          />
        </button>
      </div>

      {/* search bar */}
      <div className="flex flex-col w-full   justify-center space-y-4 items-center md:flex-row md:justify-center ">

        <div className="flex flex-row justify-center items-center border rounded-full border-dark w-[80%] md:w-1/2 ">
          <input
            type="search" placeholder="search task.."
            className=" outline-none  w-full border-l px-4 py-1 rounded-full  text-sm  "
          />
          <button className=" flex justify-center item-center bg-dark text-white rounded-r-full px-6 py-3  ">
            <FontAwesomeIcon icon={faSearch} className="text-lg" />
          </button>
        </div>

        <div className=" md:w-[20%] flex justify-end items-start ">
          <FontAwesomeIcon icon={faSortAlphaAsc} /> 

          <select name="" id="" className="w-full md:w-2/3 outline-none px-2 ">
            <option value=""><span>Sort</span></option>
            <option value="">Date</option>
            <option value="">Assending</option>
            <option value="">Desending</option>
          </select>
        </div>
      </div>

      <div className="w-full">
        {userProjects.length === 0 ? (
          <div className="flex flex-col justify-center items-center mt-20 lg:mt-10">
            <img src={working} alt="" className="w-[70%] lg:w-[40%]" />
            <p>No projects Yet!</p>
            {displayModal}
          </div>
        ) : (
          <div className="mt-2">
            <Projects />
            {displayModal}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateProject;
