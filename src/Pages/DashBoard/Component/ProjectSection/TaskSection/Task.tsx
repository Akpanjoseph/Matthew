//@ts-nocheck
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStore } from "../../../../../Store/store";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/ReactToastify.css'
import {
  faAdd,
  faArrowLeft,
  faMarker,
  faPlayCircle,
  faSearch,
  faStop,
  faTrashCan,
  faPause
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const Task = () => {

  const task = useStore((store) => store.selectedTask);
  const addMileStone = useStore((store) => store.addToSelectedtask);
  const setDisplay = useStore((store) => store.switchShowTask);
  const setCreateProjectButton = useStore(
    (store) => store.switchCreateProjectButton
  );

  const dataBase = useStore(store => store.userProject)
  const updateDataBase = ( store => store.updateProject)
  const updateSelectedTask = ( store => store.updateSelectedTask)

  // const [icon,setIcon] = useState(faPlayCircle)


  function createMileStone (){
   task.map(mileStone => {
    mileStone.subTask.push({id:mileStone.subTask.length + 1,task:"test",status:'pending'})
    addMileStone(mileStone)

  } )
  const upDatedTaskList = dataBase.filter( allTask => allTask.task =! task[0].task)
  updateDataBase(upDatedTaskList)
  toast.success('created mile stone')
  console.log(upDatedTaskList);
  
  }


function startMileStone(mileStone){
  mileStone.status ='inProgress'
  task[0].status = 'inProgress'
}
  
function deleteMileStone(mileStone,task){
 const remove = mileStone.subTask.filter(allTask => allTask != task)
   mileStone.subTask=[]
   mileStone.subTask[remove]
  //  updateSelectedTask(mileStone)

// const upDatedTaskList = dataBase.filter( allTask => allTask =! mileStone)
// updateDataBase(upDatedTaskList)
console.log(mileStone);
console.log(remove);

// console.log(task);
// console.log(mileStone);






}

  return (
    <div className="">
      <div className="flex justify-between items-center w-full lg:px-2  flex-col space-y-5 lg:flex-row lg:space-x-2">
        <div className="w-[90%]  flex-col space-y-5 flex lg:flex-row lg:w-[52%]">
          <button
            className=" text-xl font-bold  lg:pt-5 flex lg:mr-4"
            onClick={() => (setDisplay(false), setCreateProjectButton(true))}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span className="px-1">Back</span>
          </button>

          <div className="flex flex-row justify-center items-center border rounded-md h-10 border-dark w-full    ">
            <input
              type="search"
              placeholder="search task.."
              className=" outline-none  w-full border-l px-4 py-1 rounded-md  text-sm  "
            />
            <button className=" flex justify-center item-center bg-dark text-white rounded-r-md px-6 py-3  ">
              <FontAwesomeIcon icon={faSearch} className="text-lg" />
            </button>
          </div>
        </div>

        <div className="flex justify-evenly space-x-2 text-sm lg:text-md">
          <button className="px-3 py-2 border-dark rounded-md hover:bg-white hover:text-dark hover:border-2 " onClick={()=> createMileStone()}>
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

      <div className="text-dark pt-[2%] px-2  ">
        {task.map((data) => {
          return (
            <div key={data.id}>
              <p className=" text-center  mt-10 underline text-2xl capitalize font-bold ">
                {data.name}
              </p>

              <div className="mt-[10%] w-full">
                {data.subTask.map((task) => {
                  return (
                    <div
                      className={`shadow-2xl my-6 border border-gray-200  py-4 rounded-lg lg:mx-4 ${task.id % 2 !== 0 ? "bg-gray-200" : "bg-slate-300"
                        }`}
                    >
                      <div className="flex space-y-4  flex-col lg:flex-row lg:justify-between ">
                        <p className="px-4 box-content text-left text-sm lg:text-md lg:w-[35%] ">{task.task}{task.id}</p>

                        <div className="flex justify-center items-center space-y-2 w-full  box-content flex-col px-2 lg:justify-evenly lg:items-end lg:w-[70%]">


                          <div className="flex  justify-center items-center space-x-6 lg:space-x-2 ">
                            <button className=" px-2 text-green-600 flex flex-col justify-center items-center" onClick={()=> startMileStone(task)}>
                              <FontAwesomeIcon icon={faPlayCircle} />
                              <span>{"Start"}</span>
                            </button>


                            <button className=" px-2 text-red-700 flex flex-col" onClick={()=> deleteMileStone(data,task)}>
                              <FontAwesomeIcon icon={faTrashCan} />
                              <span>{"Remove"}</span>

                            </button>
                            <p className=" px-2 text-orange-600 flex flex-col">
                              <FontAwesomeIcon icon={faStop} />
                              <span>{"Completed"}</span>

                            </p>
                            <p className=" px-2 flex flex-col ">
                              <FontAwesomeIcon icon={faMarker} />
                              <span>{"Edit"}</span>

                            </p>
                          </div>

                          <p className="text-right w-[70%]">
                            <small>Time Frame -  <span className="font-mono">
                              H: 00 M: 30 
                            </span></small>
                          </p>
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
