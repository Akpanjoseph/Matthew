//@ts-nocheck
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStore } from "../../../../../Store/store";
import {
  faAdd,
  faArrowLeft,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Task = () => {
  const task = useStore((store) => store.selectedTask);
  const setDisplay = useStore((store) => store.switchShowTask);
  const setCreateProjectButton = useStore(
    (store) => store.switchCreateProjectButton
  );

  return (
    <div className="">
      <div className="flex justify-evenly items-center w-full space-x-4">
        <button
          className="mt-4 text-xl font-bold"
          onClick={() => (setDisplay(false), setCreateProjectButton(true))}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span className="px-2">Back</span>
        </button>

        <div className="flex flex-row justify-center items-center border rounded-md h-10 border-dark   md:w-2/4 ">
          <input
            type="search"
            placeholder="search task.."
            className=" outline-none  w-full border-l px-4 py-1 rounded-md  text-sm  "
          />
          <button className=" flex justify-center item-center bg-dark text-white rounded-r-md px-6 py-3  ">
            <FontAwesomeIcon icon={faSearch} className="text-lg" />
          </button>
        </div>

        <div className="flex justify-evenly space-x-4">
          <button className="px-3 py-2 border-dark rounded-md hover:bg-white hover:text-dark hover:border-2 ">
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
        {task.map((e) => {
          return (
            <div>
              <p className="pl-[38%] text-2xl capitalize font-bold">{e.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Task;
