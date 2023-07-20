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

    updateSelectedTask: (value)=> set({
      selectedTask : selectedTask.subTask[value]
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

    showModal: (show) => set((store) => ({ Modal: show })),
 
});

export const useStore = create(store);
