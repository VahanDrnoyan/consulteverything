import { useInput } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import * as yup from "yup";
export const MaxTimeInMinutesSchema = yup.object().shape({
    max_time_minuets: yup.number().typeError('Must be a number').transform((value) => (isNaN(value) ? 0 : value)).required("Max time is required field").integer().min(5,"Max time should be at least 5").max(120, "Max time should be at most 120")
});
export const useMaxTimeInMinutesValidator = (max_time_minuets:number) => {
    const [errors, setErrors] = useState("")
    
    const validateCount = (max_time_minuets: number) => {
        MaxTimeInMinutesSchema.validate({ max_time_minuets }).then(() => 
        {
            setErrors("")
        }).catch((err) => {
            
            setErrors(err.message)
        });
    };
   
    const helper = React.useMemo(() => {

        if (max_time_minuets === 0){
            setErrors("")
            return {
                color: "default",
            };
        }
        validateCount(max_time_minuets);
        
        return {
            color: errors ? "error" : "default",
        };
    }, [max_time_minuets, errors]);
    return {errors, helper}  as const
}
