import { useInput } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import * as yup from "yup";
import { TagInputType } from "../generated/graphql-frontend";
import { Tag } from "../generated/nexus-prisma";
export const useConsultancyTagValidator = () => {
    const [errors, setErrors] = useState("")
    const [invalidTags, setInvalidTags] = useState<string[]>([])
    const schema = yup.object().shape({
        name: yup.string().min(3, "Tag should have at least 3 caharacters.").max(25, "Tag should have at most 25 characters").required(),
    });
    const validateTags = (tags: TagInputType[]) => {
        tags.map((item)=> {
            schema.validate({ name: item.name }).then(() => 
            {
                setErrors("")
                setInvalidTags((state)=>{
                    return state.filter((valid)=>{
                        return item.name !== valid
                    })
                })
                
            }).catch((err) => {
                 setInvalidTags((state)=>{
                    if(!state.includes(item.name)){
                    return [...state, item.name]
                    }
                    return state;
                })
                setErrors(err.message)
            });
        });
       
    };
    const runTagsValidation = (tags: TagInputType[])=>{
        validateTags(tags);
        
    }
   

    return {errors, invalidTags, runTagsValidation}  as const
}
