import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { data, update_data } from "../Data/data";

Modal.setAppElement('#root')

const CreateProjectModal = () => {
  const [show, setShow] = useState(true);
  const [projectName, setProjectName] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const [description, setDescription] = useState("");
  const [addData, setData] = useState(data);


   const HandleSubmit = (e: any) => {
      e.preventDefault();
      setData([
        ...addData,
        {
          id: data.length + 1,
          projectName: projectName,
          description: description,
          deadline: deadLine,
        },
      ]);
      update_data(data.length + 1, projectName, description, deadLine);
      // console.log(addData);

      setShow(false);
    };

  

  return (
    <div >
      
      <Modal
        isOpen={show}
        className={'lg:w-[40%] w-[90%]  bg-white border-b-4 border-t-4 border-secondary shadow-md  '}
        contentLabel={"Create Project"}
        onRequestClose={() => alert("Click on the close button to close modal")}
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
          <button onClick={() => setShow(false)}>
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

          <div className="my-4">
            <label htmlFor=""> Set Deadline:</label>

            <input
              type={"datetime-local"}
              className="border-2 border-gray-500 w-full py-2 placeholder:text-gray-500 px-4 rounded-md active:border-secondary"
              value={deadLine}
              onChange={(e) => setDeadLine(e.target.value)}
            />
          </div>

          <textarea
            name=""
            id=""
            cols={52}
            rows={2}
            className="border-2 border-gray-500 w-full py-2 placeholder:text-gray-500 px-4 rounded-md active:border-secondary"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <div className="flex justify-center items-center mt-5">
            <button
              className="bg-dark text-white w-full py-3 rounded-md hover:bg-white lg:lg:px-40 hover:text-dark hover:border-2 border-dark "
              onClick={(e) => HandleSubmit(e)}
            >
              Create Project
            </button>
          </div>
        </form>
     
      </Modal>
    </div>
  );
};

export default CreateProjectModal;
