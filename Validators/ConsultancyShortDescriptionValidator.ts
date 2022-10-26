import { useInput } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import * as yup from "yup";
 export const ShortDescriptionSchema = yup.object().shape({
    short_description: yup.string().min(50, "Short description should have at least 50 caharacters length.").max(250, "Short description should have at most 250 characters length.").required(),
});
export const useConsultancyShortDescriptionValidator = (short_description:string ) => {
    const [errors, setErrors] = useState("")
    
    const validateShortDescription = (value: string) => {
        ShortDescriptionSchema.validate({ short_description: value }).then(() => 
        {
            setErrors("")
        }).catch((err) => {
         
            setErrors(err.message)
        });
    };
   
    const helper = React.useMemo(() => {

        if (short_description.length === 0){
            setErrors("")
            return {
                color: "",
            };
        }
            validateShortDescription(short_description);
        return {
            color: errors.length > 0 ? "error" : "default",
        };
    }, [short_description, errors]);
    return {errors, helper}  as const
}
