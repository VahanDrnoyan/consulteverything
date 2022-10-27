import { useInput } from "@nextui-org/react";
import React, { useEffect } from "react";
import { useState } from "react";
import * as yup from "yup";
import { TagInputType } from "../generated/graphql-frontend";
import { Tag } from "../generated/nexus-prisma";
export const TagSchema =  yup.object({
    'tags': yup.array(
        yup.object({name: yup.string()
            .min(3, "Tag should have at least 3 characters.")
            .max(25, "Tag should have at most 25 characters")
        })).required().min(1, "At least one tag is required")});
            
export const useConsultancyTagValidator = (input: {tags: TagInputType[]}, tagInputChanged: boolean) => {
    const [errors, setErrors] = useState("")
    
    const validateTags = (input:  {tags: TagInputType[]}) => {
            TagSchema.validate(input).then(()=>{
                setErrors("")
            }).catch((err) => {
                setErrors(err.message)
            
            });
       
       
    };
   useEffect(()=>{
    if(tagInputChanged){
    validateTags(input);
    }
    
   },[input, errors, tagInputChanged])
    
    return {errors}  as const
}
