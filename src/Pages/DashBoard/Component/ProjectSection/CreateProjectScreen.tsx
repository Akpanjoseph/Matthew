//@ts-nocheck
import { faAdd, faSearch, faSort, faSortAlphaAsc, faSortAlphaDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import working from "../../../../assert/Working-amico.png";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import CreateProjectModal from "./CreateProjectModal";
import Projects from "./ProjectCard";
import { useStore } from "../../../../Store/store";
import Tippy from "@tippyjs/react";

const CreateProject = () => {
  
  const [displayModal, setDisplayModal] = useState();

  const projectDatabases = useStore((store) => store.projectDatabase);
  const showModal = useStore((store) => store.showModal);
  const showCreateProjectButton = useStore((store) => store.showCreateProjectButton);

  
  function userModal(){
    showModal(true)
    setDisplayModal(<CreateProjectModal />)
  }

  return (
    <div
      className={`flex flex-col lg:justify-center ${
        projectDatabases.length > 0
          ? "w-full mt-20"
          : "  lg:items-center w-full mt-20"
      }`}
    >
      <div className={` ${showCreateProjectButton ? 'flex justify-center': 'hidden'}  lg:px-0 absolute bottom-14 right-5 lg:right-20`}>
        <Tippy content="create new project" placement="right-start">
        <button
          className="flex flex-col justify-center items-center w-16 h-16 rounded-full  bg-dark text-white p-4 text-sm shadow-md lg:text-xl "
          onClick={() => userModal() }
        >
          {/* <span>Create Project</span> */}
          <FontAwesomeIcon
            icon={faAdd}
            className="text-lg lg:text-xl font-bold"
          />
        </button>
        </Tippy>
      </div>

      {/* search bar */}
      {/* <div className="flex flex-col w-full   justify-center space-y-4 items-center md:flex-row md:justify-center ">

        

        <div className=" md:w-[20%] flex justify-end items-start ">
          <FontAwesomeIcon icon={faSortAlphaAsc} /> 

          <select name="" id="" className="w-full md:w-2/3 outline-none px-2 ">
            <option value=""><span>Sort</span></option>
            <option value="">Date</option>
            <option value="">Assending</option>
            <option value="">Desending</option>
          </select>
        </div> */}
      {/* </div> */}

      <div className="w-full">
        {projectDatabases.length === 0 ? (
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
