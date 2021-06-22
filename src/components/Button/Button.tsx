import { Button, makeStyles, createStyles, Theme } from "@material-ui/core"
import React, { useState } from "react"

interface Props {
   color: any,
   variant: any,
   onClick: () => void,
   size: any,
   children: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) =>createStyles({
   root: {
      '& > *': {
        margin: theme.spacing(1),
      },
   },
   button:{
      width: "2rem"
   }
}))

export const ContainedButton:React.FC<any> = ({color,size, variant, onClick, children}: Props): React.ReactElement =>{
   const classes = useStyles()
   return(
      <div className={classes.root}>
         <Button
            color={color}
            variant={variant}
            size={size}
            onClick ={onClick}
         >  
            {children}
         </Button>

      </div>
   )

}



