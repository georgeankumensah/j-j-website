import { useState } from "react";
import { createContext,useContext } from "react";


const FormContext = createContext()


export function useFormContext(){
    return useContext(FormContext);
}



export default function FormContextProvider({ children }){
    const [formIsActive,setFormIsActive] = useState(false);
    const [serviceType,setServiceType] = ("Commercial Cleaning");

    const toggleForm  = (v) =>{
    setFormIsActive(v)
    }
    const setSelectedService  = (v) =>{
        console.log(v);
        setServiceType(v)
    }
    
    return(
        <FormContext.Provider value={{formIsActive,toggleForm,serviceType,setSelectedService}}>
            {
                children
            }
        </FormContext.Provider>
    )
}