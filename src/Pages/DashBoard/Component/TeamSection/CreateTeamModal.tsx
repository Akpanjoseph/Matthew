//@ts-nocheck
import { useState } from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";

const CreateTeamModal = (props) => {

    const [teamName, setTeamName] = useState()

    const [showModal,setShowModal] = useState(props.show)
    return (
        <div>
            <Modal
                isOpen={showModal}
                className={'lg:w-[40%] w-[90%]  bg-white shadow-lg z-10  '}
                contentLabel={"Create Project"}
                onRequestClose={() => toast.warning("Click on the close button to close modal")}
                style={{
                    content: {
                        //  width: "50%",
                        margin: '5rem auto ',
                        padding: '20px ',
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
                        <textarea type="text" placeholder="Team name .." className="w-full p-4" rows={2} value={teamName} onChange={(e) => setTeamName(e.target.value)} />
                    </div>
                    <div className="flex justify-evenly space-x-4 py-4">
                        <button className="bg-green-700 text-gray-200 px-10 py-2 rounded-md font-bold" onClick={(e) => createMileStone(e)}>Create</button>
                        <button className="bg-red-700 text-white px-10 py-2 rounded-md font-bold" onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </form>
            </Modal>

            <ToastContainer />
        </div>
    )
}
export default  CreateTeamModal

// export const setModalState = setShowModal()