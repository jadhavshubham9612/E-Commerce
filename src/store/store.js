import {create} from "zustand"
import { createImagesSlice } from "./slices/createImgSlice"


export const useBoundStore =create((...a)=>({
    ...createImagesSlice(...a)
}))


