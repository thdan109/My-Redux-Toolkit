import { Box, createStyles, makeStyles, Theme,Typography, Radio } from "@material-ui/core"
import React from "react"
import { ContainedCheckbox } from "../../components/Checkbox/Checkbox"
import { ContainedTextField, ContainedTextFieldFullWidth, ContainedTextFieldError } from "../../components/TextField/TextField"
import { FavoriteOutlined, Favorite, CloseOutlined, Close, CheckCircleOutlined, CheckCircle } from "@material-ui/icons"
import { ContainedSwitch } from "../../components/Switch/switch"
import { ContainedRadio } from "../../components/Radio/radio"

const useStyles = makeStyles((theme:  Theme) => createStyles({

   containedBoxChild:{
      // backgroundColor: "black"
   }

}))

const MaterialUI: React.FC = () =>{
   const classes = useStyles()
   const [selectedValue, setSelectedValue] = React.useState('a');
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
    };
   return(
      <div>
         <Box
            display="flex"
            justifyContent="center"
            // border={1}
            width={1}
            height="50rem"
            
         >
            <Box
               className={classes.containedBoxChild}
               display="flex"
               alignItems="center"
               width="40rem"
               p="2rem"
               border={1}
               flexDirection="column"
            >
               <Box mb="1rem" width={1}>
                  <ContainedTextField variant="outlined" label="Search" />
                  <ContainedTextFieldFullWidth variant="outlined" label="FullWidth" />
                  <ContainedTextFieldError variant="outlined" label="Error" />
                  <Box display="flex"  flexDirection="row" alignItems="center">
                     <ContainedCheckbox name="checkbox" color="primary" icon={ <FavoriteOutlined/> } checkedIcon={<Favorite />} /> 
                     <Typography>
                        Favorite
                     </Typography>
                  </Box>
                  <Box display="flex"  flexDirection="row" alignItems="center">
                     <ContainedCheckbox name="checkbox" color="primary" icon={ <CloseOutlined/> } checkedIcon={<Close />} /> 
                     <Typography>
                        Close
                     </Typography>
                  </Box>
                  <Box display="flex"  flexDirection="row" alignItems="center">
                     <ContainedCheckbox name="checkbox" color="primary" icon={ <CheckCircleOutlined /> } checkedIcon={<CheckCircle />} /> 
                     <Typography>
                        Circle
                     </Typography>
                  </Box>
                  <Box display="flex"  flexDirection="row" alignItems="center">
                     <ContainedSwitch color="primary" />
                  </Box>
                  <Box display="flex"  flexDirection="row" alignItems="center">
                    
                    

                     


                  </Box>
               </Box>
               
            </Box>
            
         </Box>
         

      </div>
   )
}


export default MaterialUI