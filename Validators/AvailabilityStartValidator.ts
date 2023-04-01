import { useInput } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import * as yup from "yup";
 export const StartSchema = yup.object().shape({
    start: yup.date().required().nullable(false).typeError('Date must be a valid date')
});
export const useStartSchemaValidator = (start:string ) => {
    const [errors, setErrors] = useState("")
    
    const validateStartSchema = (value: string) => {
        StartSchema.validate({ start: value }).then(() => 
        {
            setErrors("")
        }).catch((err) => {
         
            setErrors(err.message)
        });
    };
   
    const helper = React.useMemo(() => {

        if (start.length === 0){
            setErrors("")
            return {
                color: "",
            };
        }
        validateStartSchema(start);
        return {
            color: errors.length > 0 ? "error" : "default",
        };
    }, [start, errors]);
    return {errors, helper}  as const
}
