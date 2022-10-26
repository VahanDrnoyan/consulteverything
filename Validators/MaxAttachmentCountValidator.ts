import { useInput } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import * as yup from "yup";
export const MaxAttachmentCountSchema = yup.object().shape({
    count: yup.number().required().integer().min(0,"Attachments count should at least be 0").max(6, "Attachments count should at most be 6")
});
export const useMaxAttacmentCountValidator = (count:number) => {
    const [errors, setErrors] = useState("")
    
    const validateCount = (count: number) => {
        MaxAttachmentCountSchema.validate({ count }).then(() => 
        {
            setErrors("")
        }).catch((err) => {
            console.log(err)
            setErrors(err.message)
        });
    };
   
    const helper = React.useMemo(() => {

        if (count === 0)
            return {
                color: "default",
            };
        validateCount(count);
        console.log(count, errors)
        return {
            color: errors ? "error" : "default",
        };
    }, [count, errors]);
    return {errors, helper}  as const
}
