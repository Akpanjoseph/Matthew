//@ts-nocheck
// import { data } from '../Data/data';

// import useProject from '../../../ContextStore/Store';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStore } from "../../../../Store/store";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faDeleteLeft,
  faRecycle,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
import { faRProject } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const userProject = useStore((store) => store.userProject);

  return (
    <div className="text-dark pt-[10%] px-2 grid  grid-cols-1 md:grid-cols-2 ">
      {userProject.map((data) => {
        // const counter =
        return (
          <div
            key={data.id}
            className="shadow-2xl my-4 border border-gray-100 px-4 py-2 rounded-lg mx-2"
          >
            <p className="capitalize">{data.name}</p>
            <p className="text-sm font-extralight">
              <small>{data.projectDescription}</small>
            </p>
            <div className="flex justify-between py-2">
                 <p className=""><small>Total Task: </small> {data.subTask.length }</p>
                <p >
                 <small className="flex space-x-2 items-center">
                 <span className="text-sm text-red-600">Progress:</span>
                  <span className="h-6 w-6 p-3 border-2 rounded-full flex justify-center items-center">
                    {" "}
                    {
                      data.subTask?.filter(
                        (task) => task.status === "inProgress"
                      ).length
                    }
                    /{data.subTask?.length}
                  </span>
                 </small>
                </p>

              </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
