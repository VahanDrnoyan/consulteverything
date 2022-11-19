import { useInput } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import * as yup from "yup";
export const MaxAttachmentCountSchema = yup.object().shape({
    max_attachment_count: yup.number().typeError('Must be a number').transform((value) => (isNaN(value) ? 0 : value)).integer().min(0,"Attachments count should at least be 0").max(6, "Attachments count should at most be 6")
});
export const useMaxAttachmentCountValidator = (max_attachment_count:number) => {
    const [errors, setErrors] = useState("")
    
    const validateCount = (max_attachment_count: number) => {
        MaxAttachmentCountSchema.validate({ max_attachment_count }).then(() => 
        {
            setErrors("")
        }).catch((err) => {
          
            setErrors(err.message)
        });
    };
   
    const helper = React.useMemo(() => {

        if (max_attachment_count === 0){
            setErrors("")
            return {
                color: "default",
            };
        }
        validateCount(max_attachment_count);
      
        return {
            color: errors ? "error" : "default",
        };
    }, [max_attachment_count, errors]);
    return {errors, helper}  as const
}
