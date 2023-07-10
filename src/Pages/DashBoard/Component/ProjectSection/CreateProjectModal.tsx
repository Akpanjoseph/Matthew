//@ts-nocheck
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "react-modal";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css'
import { useStore } from "../../../../Store/store";

Modal.setAppElement('#root')

const CreateProjectModal = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");

  const addProject = useStore((state) => state.addProject)
  const setModal = useStore( (state) => state.showModal)
  const showModal = useStore( (state) => state.Modal)

 

 
   const HandleSubmit = (e) => {
      e.preventDefault();

      if(projectName.trim().length ===0){
        toast.error("Project name cannnot be empty",{autoClose:5000})
      }
      else if(description.trim().length=== 0){
        toast.error("Description cannnot be empty",{autoClose:5000})
      }else{
        
        toast.success("Successfully created project!")
              addProject(projectName,description)
              setProjectName("")
              setDescription("")
              setModal(false)

      }
    };

  



  return (
    <div >
      
      <Modal
        isOpen={showModal}
        className={'lg:w-[40%] w-[90%]  bg-white border-b-4 border-t-4 border-secondary shadow-md  '}
        contentLabel={"Create Project"}
        onRequestClose={() => toast.warning("Click on the close button to close modal")}
        style={{
          content: {
            // width: "50%",
           margin:'5rem auto ',
           padding:'20px ',
            borderRadius: 20,
            borderBottom: "#936eff 4px solid",
            borderTop: "#936eff 4px solid",
            backgroundColor:"white",
            // top:'20px'
            position:'relative'

          },
          overlay: {
            backgroundColor: "",
            
          },
        }}
      >
     

     <div className="text-right">
          <button onClick={() => setModal(false)}>
            {" "}
            <FontAwesomeIcon
              icon={faClose}
              size="lg"
              className="bg-red-700 text-white px-4 py-2"
            />
          </button>
        </div>

        <p className="text-center font-bold text-2xl capitalize">
          Create new project
        </p>

       

        <form className="mt-10 mx-4">
          <div>
            <input
              type="text"
              className="border-2 border-gray-500 w-full py-2 placeholder:text-gray-500 px-4 rounded-md active:border-secondary"
              placeholder="Project name.."
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>


          <textarea
            name=""
            id=""
            cols={52}
            rows={4}
            className="border-2 border-gray-500 w-full py-2 placeholder:text-gray-500 px-4 my-5 rounded-md active:border-secondary"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <div className="flex justify-center items-center mt-5">
            <button
              className="bg-dark text-white w-full py-3 rounded-md hover:bg-white  hover:text-dark hover:border-2 border-dark "
              onClick={(e) => HandleSubmit(e)}
            >
              Create Project
            </button>
          </div>
        </form>
       
      </Modal>

      <ToastContainer position="top-right"  />
    </div>
  );
};

export default CreateProjectModal;
