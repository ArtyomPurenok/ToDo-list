import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: any = {
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
            state.data = state.data?.map((el: any) => el.name === action.payload ? {...el, state: !el.state}: el)
        },
    },

})

export const {addToDo, changeToDoState} = todoReducer.actions
export default todoReducer.reducer