import { useInput } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import * as yup from "yup";
export  const CheckboxSchema = yup.object().shape({
    bool: yup.boolean().required().oneOf([true, false], 'Field should be true or false')  
 });
export const useCheckboxValidator = (bool:boolean) => {
    const [errors, setErrors] = useState("")
   
    const validateBool = (bool: boolean) => {
        CheckboxSchema.validate({ bool }).then(() => 
        {
            setErrors("")
        }).catch((err) => {
            setErrors(err.message)
        });
    };
   
    const helper = React.useMemo(() => {

        if ([true, false].includes(bool))
            return {
                color: "default",
            };
        validateBool(bool);
        return {
            color: errors ? "error" : "default",
        };
    }, [bool, errors]);
    return {errors, helper}  as const
}
