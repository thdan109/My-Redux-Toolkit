import { Box, Button, Chip, createStyles, makeStyles, Theme, Typography } from "@material-ui/core"
import React from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { deleteTodo, selectTodo } from "./todoSlice"


const useStyles = makeStyles((theme: Theme) =>createStyles({
   ChipCard: {
      // border: "1px solid black",
      width: "10rem",
      borderRadius: 0,
      marginTop: "1rem"
   }
}))

const TodoList:React.FC = () =>{

   const classes = useStyles()
   const todos =  useAppSelector(state => state.todo)
   const dispatch = useAppDispatch()
   const onDeleteTask = (id: string) =>{
      // console.log(id);
      dispatch(deleteTodo(id))
   }

   return(
      <div>
         <Box
             display="flex"
             justifyContent="center"
             flexDirection="column"
             >
                <Box
                  display="flex"
                  justifyContent="center">
                  <Typography variant="h5">
                     LIST
                  </Typography>
                </Box>
               {
                  todos.map(todo =>(
                     <Box 
                        display="flex"
                        justifyContent="center"
                        width={1}
                        >
                        <Chip
                           className={classes.ChipCard}
                           clickable
                           color="primary"
                           key={todo.id}
                           label={todo.messages}
                           onDelete={()=>onDeleteTask(todo.id)}
                        />
                     </Box>
                  ))
                     
               }
               <Box mt={3} justifyContent="center" display="flex">
                  <Button onClick={()=>console.log(todos)} variant="contained" color="secondary" >
                     LOG
                  </Button>
               </Box>
            
         </Box>

      </div>
   )

}

export default TodoList