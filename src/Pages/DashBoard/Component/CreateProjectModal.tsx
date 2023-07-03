import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";

const CreateProjectModal = () => {
  return (
    <div>
      <Modal
        isOpen={true}
        contentLabel={"Create Project"}
        style={{
          content: {
            width: "40%",
            margin: "30px auto",
            borderRadius:20, borderBottom:'#936eff 4px solid',borderTop:'#936eff 4px solid'
          },
          overlay:{
            // backgroundColor:'transparent'
          }
        }}
      >
        
    <div className="text-right">
    <FontAwesomeIcon icon={faClose} size="lg" className="bg-red-700 text-white px-4 py-2" />
    </div>
    <p className="text-center font-bold text-2xl capitalize">Create new project</p>
      </Modal>
    </div>
  );
};

export default CreateProjectModal;
