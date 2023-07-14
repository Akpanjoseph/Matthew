//@ts-nocheck
import { create } from "zustand";
import { persist } from "zustand/middleware";
const store = (set) => ({
  userProject: [],
  selectedTask: [],

  Modal: false,

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
          subTask: [
            { id: 1, task: "cook rice", status: "inProgress" },
            { id: 2, task: "set table", status: "next up"  },
            { id: 2, task: "set table", status: "next up"  },
          ],
        },
      ],
    })),

  
  addToSelectedtask: (task) =>
    set({
      selectedTask: [task],
    }),

//  setDetailMenuSection : (component) =>
});

export const useStore = create(store);
