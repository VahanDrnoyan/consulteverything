import { useInput } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import * as yup from "yup";
import { InputMaybe } from "../generated/graphql-frontend";
export const useConsultancyLongDescriptionValidator = (description: InputMaybe<string>  | undefined) => {
    const [errors, setErrors] = useState("")
    const schema = yup.object().shape({
        long_description: yup.string().max(1000, "Long description should have at most 1000 characters length.").required(),
    });
    const validateLongDescribtion = (value: string) => {
        schema.validate({ long_description: value }).then(() => {
            setErrors("")
        }).catch((err) => {
            console.log(err)
            setErrors(err.message)
        });
    };

    const helper = React.useMemo(() => {

        if (description) {
            validateLongDescribtion(description);

        }

    }, [description]);
    return { errors } as const
}