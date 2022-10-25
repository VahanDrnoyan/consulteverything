import { useInput } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import * as yup from "yup";
export const useConsultancyShortDescriptionValidator = (description:string ) => {
    const [errors, setErrors] = useState("")
    const schema = yup.object().shape({
        short_description: yup.string().min(50, "Short description should have at least 50 caharacters length.").max(250, "Short description should have at most 250 characters length.").required(),
    });
    const validateShortDescribtion = (value: string) => {
        schema.validate({ short_description: value }).then(() => 
        {
            setErrors("")
        }).catch((err) => {
            console.log(err)
            setErrors(err.message)
        });
    };
   
    const helper = React.useMemo(() => {

        if (description.length === 0)
            return {
                color: "",
            };
            validateShortDescribtion(description);
        return {
            color: errors.length > 0 ? "error" : "default",
        };
    }, [description]);
    return {errors, helper}  as const
}
