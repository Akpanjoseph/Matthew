import teamSpirit from '../../assert/Team spirit.gif'

const Team = () =>{
    return(
        <div className="flex justify-center item-center w-full h-full">
            <div className="flex flex-col justify-center items-center">
            <img src={teamSpirit} alt="" className="w-[90%] lg:w-[90%]" />
            <p>No Team Yet!</p>
            {/* {displayModal} */}
          </div>
        </div>
    )
}

export default Team;
