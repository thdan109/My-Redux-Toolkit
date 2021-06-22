import React from "react"
import {TextField, makeStyles, createStyles, Theme} from "@material-ui/core"


interface Props {
   color: any
   label: React.ReactNode
   value: any
   variant: any
   defaultValue: string

}

const useStylesCSS = makeStyles((theme: Theme) => createStyles({

   css: {
      // width: "15rem",
      // color:"white",
      // borderColor: "black",
      // '& label.Mui-focused': {
      //    color: '#FFCE54',
      // },
      // '& .MuiOutlinedInput-root': {
      //    '& fieldset': {
      //      borderColor: '#FFCE54',
      //    //   borderRadius: "10rem"
      //    },
      //    '&:hover fieldset': {
      //      borderColor: '#FFCE54',
      //    },
      //    '&.Mui-focused fieldset': {
      //      borderColor: '#FFCE54',
      //    },
      // },
   }
}))


export const ContainedTextField: React.FC<any> = ({variant, label, value, defaultValue}: Props): React.ReactElement => {
   const classes = useStylesCSS()
   return (
      <div>
         <TextField 
            className={classes.css}
            label={label}
            value={value}
            variant={variant}
            defaultValue={defaultValue}
         />
      </div>
   )
}


export const ContainedTextFieldFullWidth: React.FC<any> = ({variant, label, value, defaultValue}: Props): React.ReactElement =>{
   const classes = useStylesCSS()
   return(
      <div>
         <TextField 
            fullWidth
            label={label}
            value={value}
            variant={variant}
            defaultValue={defaultValue}
            margin="normal"
         />
      </div>
   )
}

export const ContainedTextFieldError: React.FC<any> = ({ variant, label, value, defaultValue  }: Props): React.ReactElement =>{

   return (
      <div>
         <TextField 
            margin="normal"
            error
            label={label}
            value={value}
            variant={variant}
            defaultValue={defaultValue}
         />
      </div>
   )

}



