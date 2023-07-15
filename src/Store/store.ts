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
          subTask: [
            { id: 1, task: "create app image for videos", status: "inProgress" },
            { id: 2, task: "set table app image for videos aap image for videos aap image for videos", status: "next up"  },
            { id: 3, task: "set table", status: "next up"  },
            { id: 4, task: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis inventore perspiciatis minus explicabo modi laborum quis voluptate rerum iste vero esse dolorum accusamus illo tenetur, nisi praesentium autem blanditiis ad?", status: "next up"  },
          ],
        },
      ],
    })),

    
  
  addToSelectedtask: (task) =>
    set({
      selectedTask: [task],
    }),


    switchShowTask : (value) => set({
      showTaskMenu:value
    }),
    switchCreateProjectButton : (value) => set({
      showCreateProjectButton:value
    }),

//  setDetailMenuSection : (component) =>
});

export const useStore = create(store);
