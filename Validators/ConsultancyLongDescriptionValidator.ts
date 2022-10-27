import { useInput } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import * as yup from "yup";
import { InputMaybe } from "../generated/graphql-frontend";
export  const LongDescriptionSchema = yup.object().shape({
    long_description: yup.string().max(5000, "Long description should have at most 1000 characters length."),
});
export const useConsultancyLongDescriptionValidator = (description: InputMaybe<string>  | undefined) => {
    const [errors, setErrors] = useState("")
   
    const validateLongDescription = (value: string) => {
        LongDescriptionSchema.validate({ long_description: value }).then(() => {
            setErrors("")
        }).catch((err) => {
           
            setErrors(err.message)
        });
    };

    const helper = React.useMemo(() => {

        if (description) {
            validateLongDescription(description);

        }

    }, [description]);
    return { errors } as const
}
