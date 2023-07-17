//@ts-nocheck
import { create } from "zustand";
import { persist } from "zustand/middleware";
const store = (set) => ({
  userProject: [],
  mileStone: [],
  selectedTask: [],

  Modal: false,

  showTaskMenu : false,

  showCreateProjectButton: true,

  // detailMenuSection : `<CreateProject` ,

  showModal: (show) => set((store) => ({ Modal: show })),

  addProject: (projectName, description) =>
    set((store) => ({
      userProject: [
        ...store.userProject,
        {
          id: Math.floor(Math.random() * 3532) - 10,
          name: projectName,
          projectDescription: description,
          status: "pending",
          subTask: [],
        },
      ],
    })),

  
  
  addToSelectedtask: (task) =>
    set({
      selectedTask: [task],
    }),

    updateProject :(value) => set({
      userProject: [value]
    }) , 

    switchShowTask : (value) => set({
      showTaskMenu:value
    }),
    switchCreateProjectButton : (value) => set({
      showCreateProjectButton:value
    }),

    // save_SelectedTask_to_userProject:()=>{
    //   set(store => ({
    //     userProject
    //   }))
    //    )
    // }
    
 
});

export const useStore = create(store);
