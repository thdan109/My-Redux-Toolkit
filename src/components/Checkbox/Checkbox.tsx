import React from "react"
import {Checkbox} from "@material-ui/core"


interface Props{

   id: string
   color: any
   checked: any
   onChange: () => void
   icon: any
   name: any
   checkedIcon: any
   
}

export const ContainedCheckbox: React.FC<any> = ({id, color, checked, onChange, icon, name, checkedIcon}: Props):React.ReactElement =>{

   return(
      <div>
         <Checkbox id={id} color={color} checked={checked} onChange={onChange} icon={icon} name={name} checkedIcon={checkedIcon} />
      </div>

   )
}

