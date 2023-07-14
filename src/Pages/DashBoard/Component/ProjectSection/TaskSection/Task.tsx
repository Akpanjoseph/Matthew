//@ts-nocheck
import { useStore } from "../../../../../Store/store"


const Task=()=>{
    const task = useStore( store => store.selectedTask)
    console.log(task);
    
    
    return(
        <div>
            
            {
               task.map( e =>{
                return(
                    <>
                    {e.name}
                    </>
                )
               })
            }
        </div>
    )
}

export default Task