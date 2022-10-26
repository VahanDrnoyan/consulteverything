import { useInput } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import * as yup from "yup";
export  const TitleSchema = yup.object().shape({
    title: yup.string().min(3, "Title should have at least 3 caharacters length.").max(100, "Title should have at most 100 characters length.").required(),
});
export const useConsultancyTitleValidator = (title:string) => {
    const [errors, setErrors] = useState("")
   
    const validateTitle = (value: string) => {
        TitleSchema.validate({ title: value }).then(() => 
        {
            setErrors("")
        }).catch((err) => {
            console.log(err)
            setErrors(err.message)
        });
    };
   
    const helper = React.useMemo(() => {

        if (title.length === 0){
            setErrors("")
            return {
                color: "",
            };
        }
        validateTitle(title);
        return {
            color: errors.length > 0 ? "error" : "default",
        };
    }, [title, errors]);
    return {errors, helper}  as const
}
