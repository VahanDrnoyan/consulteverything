import { useInput } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import * as yup from "yup";
 export const EndSchema = yup.object().shape({
    end: yup.date().required().nullable(false).typeError('Date must be a valid date')
});
export const useEndSchemaValidator = (end:string ) => {
    const [errors, setErrors] = useState("")
    
    const validateEndSchema = (value: string) => {
        EndSchema.validate({ end: value }).then(() => 
        {
            setErrors("")
        }).catch((err) => {
         
            setErrors(err.message)
        });
    };
   
    const helper = React.useMemo(() => {

        if (end.length === 0){
            setErrors("")
            return {
                color: "",
            };
        }
        validateEndSchema(end);
        return {
            color: errors.length > 0 ? "error" : "default",
        };
    }, [end, errors]);
    return {errors, helper}  as const
}
