import { useInput } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import * as yup from "yup";
export const useConsultancyTitleValidator = (title:string) => {
    const [errors, setErrors] = useState("")
    const schema = yup.object().shape({
        title: yup.string().min(3, "Title should have at least 3 caharacters length.").max(100, "Title should have at most 100 characters length.").required(),
    });
    const validateTitle = (value: string) => {
        schema.validate({ title: value }).then(() => 
        {
            setErrors("")
        }).catch((err) => {
            console.log(err)
            setErrors(err.message)
        });
    };
   
    const helper = React.useMemo(() => {

        if (title.length === 0)
            return {
                color: "",
            };
        validateTitle(title);
        return {
            color: errors.length > 0 ? "error" : "default",
        };
    }, [title]);
    return {errors, helper}  as const
}