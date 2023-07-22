import teamSpirit from '../../../assert/Messages.gif'

const Meeting = ()=>{
    return(
        <div className="flex justify-center item-center w-full h-full">
            <div className="flex flex-col justify-center items-center">
            <img src={teamSpirit} alt="" className="w-[90%] lg:w-[90%]" />
            <p>No Inbox Yet!</p>
            {/* {displayModal} */}
          </div>
        </div>
    )
}

export default Meeting