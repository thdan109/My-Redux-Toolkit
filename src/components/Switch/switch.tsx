import React from "react"
import {Switch} from "@material-ui/core"

interface Props{

   checked: any
   onChange: any
   name: any
   color?:'primary' | 'secondary' | 'default' ;

}

export const ContainedSwitch: React.FC<any> = ({checked, onChange, name, color}: Props) : React.ReactElement =>{
   
   return (

      <div>
         <Switch
            checked={checked}
            onChange={onChange}
            name={name}
            color={color}
            // inputProps={{ 'aria-label': 'secondary checkbox' }}
         />
      </div>
   )
}