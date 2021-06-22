import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {v4 as uuidv4} from "uuid"
import { RootState } from "../../app/store"

export interface TodoState{
   id: string,
   messages: string
}

export const todoSlice = createSlice({
   name: 'todosSlice',
   initialState: [] as TodoState[],
   reducers:{
      addTodo: (state, action: PayloadAction<string>) =>{
         state.push({id: uuidv4(), messages: action.payload})
      },
      deleteTodo: (state, action: PayloadAction<string>)=>{
         return state.filter(todo => todo.id !== action.payload)
      }
   },
   
})

export const { addTodo, deleteTodo } = todoSlice.actions
export const selectTodo = (state: RootState) => state.todo.values;

export default todoSlice.reducer
