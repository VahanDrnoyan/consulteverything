import { useInput } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import * as yup from "yup";
export const EmailSChema = yup.object().shape({
    email: yup.string().email("Email is not valid.").required(),
});
export const useLoginFormValidator = () => {
    const [ email, setEmail ] = useState("");
    const [errors, setErrors] = useState("")
    
    const validateEmail = (value: string) => {
        EmailSChema.validate({ email: value }).then(() => 
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

        if (email.length === 0){
            setErrors("")
            return {
                color: "",
            };
        }
        validateEmail(email);
        return {
            color: errors.length > 0 ? "error" : "default",
        };
    }, [email, errors]);
    return [errors, email, onChange, setEmail, helper]  as const
}
