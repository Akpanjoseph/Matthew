//@ts-nocheck
import { create } from "zustand";
import { persist } from "zustand/middleware";
const store = (set) => ({
  userProject: [
    // {
    //   id: 1,
    //   name: "eat food",
    //   projectDeadine: "2/4/2023",
    //   projectDescription:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint velit consequuntur recusandae quo veritatis a error dicta id at!est",
    //   subTask: [
    //     { id: 1, task: "cook rice", status: "start" },
    //     { id: 2, task: "set table", status: "inProgress" },
    //   ],
    // },
  ],
  Modal: false,
  showModal: (show) => set((store) => ({ Modal: show })),

  addProject: (projectName, description) =>
    set((store) => ({
      userProject: [
        ...store.userProject,
        {
          id: Math.floor(Math.random() * 3532) - 10,
          name: projectName,
          projectDescription: description,
          status:'pending',
          subTask: [
            // { id: 1, task: "cook rice", status: "inProgress" },
            // { id: 2, task: "set table", status: "next up"  },
          ],
        },
      ],
    })),
});

export const useStore = create(store);
