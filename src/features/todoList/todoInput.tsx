import { Box,Button, TextField,Typography } from "@material-ui/core"
import React from "react"

import {createStyles,makeStyles, Theme} from "@material-ui/core/styles"
import { useAppDispatch } from "../../app/hooks"
import { addTodo } from "./todoSlice"
import {ContainedButton} from "../../components/Button/Button"



const useStyles = makeStyles((theme: Theme) => createStyles({
   inputTask: {
      width: "36rem"
   }, 
   buttonAdd: {
      marginLeft: "2rem"
   }

}))

const TodoInput:React.FC  =  () =>{
   
   const classes = useStyles()
   const dispatch = useAppDispatch()
   const [task, setTask] = React.useState<string>("")
   const onChangeTextInput = (ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
      setTask(ev.target.value)  
   }
   const onSubmitTask = () =>{
      dispatch(addTodo(task))
      setTask("")
   }


   return(
      <div>
         <Box 
            display="flex" justifyContent="center" m={1} p={1}
         >
            <Typography variant="h5" >TODOLIST</Typography>
         </Box>
         <Box 
            display="flex"
            justifyContent="center"
            mt={3}
            pb={20}  >
               
            <TextField
               className={classes.inputTask}
               label = "Task..."
               variant="outlined"
               onChange={onChangeTextInput}
               value={task}
            />
            <ContainedButton
               color="primary"
               size="medium"
               children="Test"
               onClick={()=>console.log("test")
               }
            />
            <Button
               variant="contained"
               color="primary"
               className={classes.buttonAdd}
               onClick={onSubmitTask}
            >
               ADD
            </Button>
            
         </Box>


      </div>
   )
}

export default TodoInput