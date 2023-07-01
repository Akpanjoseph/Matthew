import { faAdd } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import working from '../../../assert/Working-amico.png'
import { useState } from "react"

const CreateProject = ()=>{

    const [projects,setProject]=useState([])

    return(
        <div className="flex flex-col h-full justify-center lg:items-center  w-full">
                <div className="flex justify-center w-full px-8 lg:px-0" >
                    <button className="flex flex-col justify-center items-center w-full  rounded-md bg-dark text-white py-2 text-sm shadow-md lg:text-xl lg:w-[40%]" onClick={}>
                        <span>Create Project</span>
                        <FontAwesomeIcon icon={faAdd} size="lg" />
                    </button>
                </div>


                <div>
                    {
                        projects.length ===0 ? 
                        <div className="flex flex-col justify-center items-center mt-20 lg:mt-10">
                                <img src={working} alt="" className="w-[70%] lg:w-[30%]" />
                                <p>No projects Yet!</p>
                        </div>:
                        <div>
                            <p>projects</p>
                        </div>
                    }
                </div>
        </div>
    )
}

export default CreateProject