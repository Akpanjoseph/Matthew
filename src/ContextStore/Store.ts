//@ts-nocheck
import { create } from "zustand";


const useProject = create((set) => ({
    Projects : ['hello','ewfefe'],
    addProject: (project)=> set( state => ({Projects:[...state.Projects,project]}))
}))

export default useProject