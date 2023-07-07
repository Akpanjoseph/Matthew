
import { data } from '../Data/data';

// import useProject from '../../../ContextStore/Store';

const Projects = () => {

  // const projects = useProject(state => state.Projects)

  return <div className="text-dark pt-[10%] px-2 grid grid-cols-2 ">
    {
        data.map(data => {
            return(
                    <div key={data.id} className="shadow-md my-4 border-2 p-4 rounded-md mx-2" onClick={()=> alert(data.projectName)}>
                    <h1>{data.projectName}</h1>
                    <p>{data.description}</p>
                    </div>
            )
        })
    }
  </div>;
};

export default Projects;
