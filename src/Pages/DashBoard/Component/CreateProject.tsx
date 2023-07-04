//@ts-nocheck
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import working from "../../../assert/Working-amico.png";
import { useState,useEffect } from "react";
import Modal from "react-modal";
import CreateProjectModal from "./Modal";
import Projects from "./Projects";
import { data } from "../Data/data";

const CreateProject = () => {
  const [projects, setProject] = useState(data);
  const [displayModal, setDisplayModal] = useState();


  useEffect(()=>{},[projects])

  return (
    <div className={`flex flex-col lg:justify-center ${projects.length > 0 ? 'w-full mt-20' : '  lg:items-center w-full mt-20'}`}>

      <div className="flex justify-center  lg:px-0 absolute bottom-20 right-10 lg:right-20">
        <button
          className="flex flex-col justify-center items-center w-20 h-20 rounded-full  bg-dark text-white p-4 text-sm shadow-md lg:text-xl "
          onClick={() => setDisplayModal(<CreateProjectModal />)}
        >
          {/* <span>Create Project</span> */}
          <FontAwesomeIcon icon={faAdd} className="text-lg lg:text-xl font-bold" />
        </button>
      </div>


      <div className="w-full">
        {projects.length === 0 ? (
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
