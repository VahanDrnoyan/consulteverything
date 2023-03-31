import { useInput } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import * as yup from "yup";
export const IsReservedSchema = yup.object().shape({
    is_reserved: yup.boolean().required(),
});
export const useIsReservedValidator = (is_reserved: boolean) => {
    const [ isReserved, setIsReserved ] = useState(false);
    const [errors, setErrors] = useState("")
    
    const validateIsReserved = (value: boolean) => {
        IsReservedSchema.validate({ is_reserved: value }).then(() => 
        {
            setErrors("")
        }).catch((err) => {
            setErrors(err.message)
        });
    };
    const helper = React.useMemo(() => {

        validateIsReserved(isReserved);
        return {
            color: errors.length > 0 ? "error" : true,
        };
    }, [isReserved, errors]);
    return {errors, helper}  as const
}
