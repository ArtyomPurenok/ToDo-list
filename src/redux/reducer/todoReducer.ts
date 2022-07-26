import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface IObject {
    name: string
    state: boolean
}

interface IData {
    data: IObject[]
}

const initialState: Object | IData[] = {
    data: [],
}


const todoReducer: any = createSlice({
    name: 'To do list',
    initialState,
    reducers: {
        addToDo: (state: any, action: PayloadAction<string>) => {
            state = state.data.push({
                name: action.payload,
                state: false,
            });
        },
        changeToDoState: (state: any, action: PayloadAction<string>) => {        
            state.data = state.data?.map((el: IObject) => el.name === action.payload ? {...el, state: !el.state}: el)
        },
        clearReducer: (state: any) => {
            state.data = state.data.filter((el: IObject) => !el.state)
        }
    },

})

export const {addToDo, changeToDoState, clearReducer} = todoReducer.actions
export default todoReducer.reducer