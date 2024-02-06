import { useState } from "react";
import { createContext,useContext } from "react";


const FormContext = createContext()


export function useFormContext(){
    return useContext(FormContext);
}



export default function FormContextProvider({ children }){
    const [formIsActive,setFormIsActive] = useState(true)

    const toggleForm  = (v) =>{
    setFormIsActive(v)
    }
    
    return(
        <FormContext.Provider value={{formIsActive,toggleForm}}>
            {
                children
            }
        </FormContext.Provider>
    )
}