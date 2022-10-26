import { useInput } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import * as yup from "yup";
export const MaxTimeInMinutesSchema = yup.object().shape({
    count: yup.number().required().integer().min(5,"Max time should be at least 5").max(120, "Max time should be at most 120")
});
export const useMaxTimeInMinutesValidator = (count:number) => {
    const [errors, setErrors] = useState("")
    
    const validateCount = (count: number) => {
        MaxTimeInMinutesSchema.validate({ count }).then(() => 
        {
            setErrors("")
        }).catch((err) => {
            
            setErrors(err.message)
        });
    };
   
    const helper = React.useMemo(() => {

        if (count === 0){
            setErrors("")
            return {
                color: "default",
            };
        }
        validateCount(count);
        
        return {
            color: errors ? "error" : "default",
        };
    }, [count, errors]);
    return {errors, helper}  as const
}
