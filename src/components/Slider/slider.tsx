import React from "react"
import {Slider} from "@material-ui/core"
interface Props{

   defaultValue?: number | number[]
   step?: number | null;
   onChange: () => void
   name?: string;
}

export const ContainedSlider: React.FC<any> = ({defaultValue, step, onChange, name} : Props) : React.ReactElement => {


   return(
      <div>
         <Slider defaultValue={defaultValue} step={step} onChange={onChange} name={name} /> 
      </div>
   )
}