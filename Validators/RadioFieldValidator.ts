import { useInput } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import * as yup from "yup";
import { MutationCreateConsultancyArgs } from "../generated/graphql-frontend";
export  const RadioFieldSchema = yup.object().shape({
    value: yup.string().required().oneOf(['EXCLUDE', 'INCLUDE', 'REQUIRED'], 'Field should be Include, Exclude or Required')  
 });
export const useRadioFiledValidator = (value: string) => {
    
    const [errors, setErrors] = useState("")
   
    const validateValue = (value: string) => {
        RadioFieldSchema.validate({ value }).then(() => 
        {
            setErrors("")
        }).catch((err) => {
            setErrors(err.message)
        });
    };
   
    const helper = React.useMemo(() => {

        if (['EXCLUDE', 'INCLUDE', 'REQUIRED'].includes(value))
        return {
            color: "default",
        };
        validateValue(value);
        return {
            color: errors ? "valid" : "invalid",
        };
    }, [value, errors]);
    return {errors, helper}  as const
}
