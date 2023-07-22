//@ts-nocheck
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import teamSpirit from '../../../../assert/Team spirit.gif'

import { useStore } from '../../../../Store/store';
import TeamCard from './TeamCard';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import CreateTeamModal from './CreateTeamModal';
// import {setModalState} from './CreateTeamModal'

const Team = () => {
    const [display,setDisplay] = useState(<TeamCard/>)
    const teamList = useStore(store => store.teamDatabase)

    const showModal =(value)=>{
        // setModalState(value)
        setDisplay(<CreateTeamModal />)
    }

    return (
        <div>

            <Tippy content={'Create New Team'} placement='right-start'>
            <div className='fixed  lg:px-0  bottom-14 right-5 lg:right-20 '>
               <button className=' flex flex-col justify-center items-center w-16 h-16 rounded-full  bg-dark text-white p-4 text-sm shadow-md lg:text-xl ' onClick={()=> showModal(true)}>
               <FontAwesomeIcon icon={faAdd} />
               </button>
            </div>
            </Tippy>
            
            {
                teamList.length < 1 ?
                    <div className="mt-[40%] lg:mt-[10%] ">
                        <div className="flex flex-col justify-center items-center">
                            <img src={teamSpirit} alt="" className="w-[90%] lg:w-[50%]" />
                            <p>No Team Yet!</p>

                        </div>
                    </div>:

                    <div>
                        {display}
                    </div>
        }
        </div>
    )
}

export default Team;
