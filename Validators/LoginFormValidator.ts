import { useInput } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import * as yup from "yup";
export const useLoginFormValidator = () => {
    const [ email, setEmail ] = useState("");
    const [errors, setErrors] = useState("")
    const schema = yup.object().shape({
        email: yup.string().email("Email is not valid.").required(),
    });
    const validateEmail = (value: string) => {
        schema.validate({ email: value }).then(() => 
        {
            setErrors("")
        }).catch((err) => {
            setErrors(err.message)
        });
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
        
        setEmail(e.target.value)
    }
    const helper = React.useMemo(() => {

        if (email.length === 0)
            return {
                color: "",
            };
        validateEmail(email);
        return {
            color: errors.length > 0 ? "error" : "default",
        };
    }, [email]);
    return [errors, email, onChange, setEmail, helper]  as const
}
