//@ts-nocheck
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStore } from "../../../../../Store/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import Modal from "react-modal";
import {
  faAdd,
  faArrowLeft,
  faMarker,
  faPlayCircle,
  faSearch,
  faStop,
  faTrashCan,
  faPause,
  faClock,
  faFileAlt,
  faTimesCircle,
  faClockFour,
  faCheck,
  faCheckCircle,
  faCheckDouble,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Task = () => {
  const [showModal, setShowModal] = useState(false);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [milestoneName, setMilestoneName] = useState("");
  const task = useStore((store) => store.selectedTask);
  const addMileStone = useStore((store) => store.addToSelectedtask);
  const setDisplay = useStore((store) => store.switchShowTask);
  const setCreateProjectButton = useStore(
    (store) => store.switchCreateProjectButton
  );

  const dataBase = useStore((store) => store.projectDatabase);
  const updateDataBase = (store) => store.updateProject;
  const updateSelectedTask = (store) => store.updateSelectedTask;

  const [checked,setChecked] = useState(false)
  const [playing,setPlaying] = useState(false)

  // const [icon,setIcon] = useState(faPlayCircle)

  function createMileStone(e) {
    e.preventDefault();

    if (milestoneName.trim().length !== 0) {
      task.map((mileStone) => {
        mileStone.subTask.push({
          id: mileStone.subTask.length + 1,
          task: milestoneName,
          status: "pending",
          playing: false
        });
        addMileStone(mileStone);
      });
      const upDatedTaskList = dataBase.filter(
        (allTask) => allTask.id == !task[0].id
      );
      updateDataBase(upDatedTaskList);
      toast.success("created mile stone");
      setMilestoneName("");
      setShowModal(false);
    } else toast.error("Milestone can not be empty! ");
  }

  function startMileStone(mileStone) {
    mileStone.status = "inProgress";
    task[0].status = "inProgress";
    setPlaying(playing ? false : true)
    // startTimer()
  }




  const startTimer = () => {
    // const addHour = ()
    setInterval(() => {
      setHour(minute + 1);
      setMinute(hour + 1);
    }, 1000);

    console.log(minute, hour);
  };

  function deleteMileStone(item, index) {
    const a = task[0].subTask.splice(index, 1);
    updateSelectedTask(a);
    const upDatedTaskList = dataBase.filter(
      (allTask) => allTask.id == !task[0].id
    );
    updateDataBase(upDatedTaskList);
    // console.log(upDatedTaskList);
    // console.log(dataBase);
  }

  return (
    <div className="mx-0 ">
      <div className="flex justify-evenly items-center w-full lg:px-2  flex-col space-y-5 lg:flex-row lg:space-x-2">
        <button
          className=" text-xl font-bold  lg:pt-5 flex lg:mr-10"
          onClick={() => (setDisplay(false), setCreateProjectButton(true))}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span className="px-1">Back</span>
        </button>
        <div className="w-[90%]  flex-col  space-y-5 flex lg:flex-row lg:w-[52%]">
          <div className="flex flex-row justify-center items-center border rounded-md h-10 border-dark w-full    ">
            <input
              type="search"
              placeholder="search task.."
              className=" outline-none  w-full border-l px-4 py-2 rounded-md  text-sm  "
            />
            <button className=" flex justify-center item-center bg-dark text-white rounded-r-md px-6 py-3  ">
              <FontAwesomeIcon icon={faSearch} className="text-lg" />
            </button>
          </div>
        </div>

        <div className="flex justify-evenly space-x-2 text-sm lg:text-md">
          <button
            className="px-3 py-2 border-dark rounded-md hover:bg-white hover:text-dark hover:border-2 "
            onClick={() => setShowModal(true)}
          >
            <span>Create milestone</span>
          </button>
          <button className="rounded-md px-3 py-2 border-dark hover:bg-white hover:text-dark hover:border-2 ">
            Filter{" "}
          </button>
          <button className="bg-secondary px-3 py-2 rounded-md text-white border-dark hover:bg-white hover:text-dark hover:border-2 ">
            Generate Report
          </button>
        </div>
      </div>

      {/* add new project modal */}
      <Modal
        isOpen={showModal}
        className={"lg:w-[40%] w-[90%]  bg-white border shadow-2xl z-10  "}
        contentLabel={"Create Project"}
        onRequestClose={() =>
          toast.warning("Click on the close button to close modal")
        }
        style={{
          content: {
            //  width: "50%",
            margin: "5rem auto ",
            padding: "20px ",
            borderRadius: 20,
            zIndex: 100,
            backgroundColor: "white",
          },
          overlay: {
            backgroundColor: "",
          },
        }}
      >
        <form>
          <div className="w-full border">
            <textarea
              type="text"
              placeholder="milestone name .."
              className="w-full p-4"
              rows={4}
              value={milestoneName}
              onChange={(e) => setMilestoneName(e.target.value)}
            />
          </div>
          <div className="flex justify-evenly space-x-4 py-4">
            <button
              className="bg-green-700 text-white px-10 py-2 rounded-sm"
              onClick={(e) => createMileStone(e)}
            >
              Save
            </button>
            <button
              className="bg-red-700 text-white px-10 py-2 rounded-sm"
              onClick={() => setShowModal(false)}
            >
              close
            </button>
          </div>
        </form>
      </Modal>

      {/* card */}
      <div className="text-dark pt-[2%] lg:px-2 px-1 ">
        {task.map((data) => {
          return (
            <div key={data.id}>
              <p className=" text-center  mt-10 underline text-2xl capitalize font-bold ">
                {data.name}
              </p>

              <div className="mt-[10%] w-full grid grid-cols-1 md:grid-cols-3  space-x-2">
                {data.subTask.map((task, index) => {
                  return (
                    <div
                      className={`shadow-2xl z-50 rounded-xl my-3 mx-2   py-1 w-[95%]  border`}
                    >
                      <div className="flex space-y-4 flex-col py-4 ">
                        <div className="flex justify-between px-2">
                          <p className="px-4  text-left  text-md lg:text-lg  ">
                            {task.task}
                          </p>
                          <button className=" px-2 flex flex-col justify-center items-center ">
                            <FontAwesomeIcon
                              className="text-md lg:text-xl"
                              icon={faFileAlt}
                            />
                            {/* <span>{"Edit"}</span> */}
                          </button>
                        </div>

                        <div className="flex justify-between px-4">


                          <div className="text-center space-x-2 font-bold">
                            <FontAwesomeIcon icon={faClockFour} className="text-xl" />
                              <span className="font-mono">
                                H: {hour} M: {minute}
                              </span>
                            
                          </div>

                          <div className="flex  justify-around items-center py-2 space-x-3  ">
                            <button
                              className=" px-2 text-green-600 flex flex-col justify-center items-center"
                              onClick={() => startMileStone(task)}
                            >
                              <FontAwesomeIcon
                                className="text-md lg:text-2xl"
                                icon={playing ?  faPlayCircle :faStop   }
                              />
                              {/* <span>{"Start"}</span> */}
                            </button>

                            <button className=" px-2 text-orange-600  flex flex-col justify-center items-center" >
                              <FontAwesomeIcon
                                className="text-md lg:text-2xl"
                                icon={checked ? faCheckCircle :  faCheck}
                              />
                              {/* <span>{"Completed"}</span> */}
                            </button>

                            <button
                              className=" px-2 text-red-700 flex flex-col justify-center items-center"
                              onClick={() => deleteMileStone(index)}
                            >
                              <FontAwesomeIcon
                                className="text-md lg:text-xl"
                                icon={faTrashCan}
                              />
                              {/* <span>{"Remove"}</span> */}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Task;
