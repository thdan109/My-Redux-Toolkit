import { Radio } from "@material-ui/core"
import React from "react"

interface Props{
   checked?: any
   onChange?: ()=>void
   name?: any
   color?: 'primary' | 'secondary' | 'default'

}

export const ContainedRadio = ({checked, onChange, name, color}: Props):React.ReactElement =>{

   return (
      <div>
         <Radio onChange={onChange} name={name} color={color} />
         {/* <Radio onChange={onChange} name={name} color={color} /> */}
      </div>
   )


}