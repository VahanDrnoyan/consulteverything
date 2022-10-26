import { useInput } from "@nextui-org/react";
import React, { useEffect } from "react";
import { useState } from "react";
import * as yup from "yup";
import { TagInputType } from "../generated/graphql-frontend";
import { Tag } from "../generated/nexus-prisma";
const TagSchema = yup.object().shape({
    name: yup.string().min(3, "Tag should have at least 3 caharacters.").max(25, "Tag should have at most 25 characters").required(),
});
export const useConsultancyTagValidator = (tags: TagInputType[]) => {
    const [errors, setErrors] = useState("")
    const [invalidTags, setInvalidTags] = useState<string[]>([])
    
    const validateTags = (tags: TagInputType[]) => {
        tags.map((item)=> {
            TagSchema.validate({ name: item.name }).then(() => 
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
   useEffect(()=>{
    validateTags(tags);
    if(!tags.length){
        setErrors("")
    }
   },[
    tags
   ])
       

   

    return {errors, invalidTags}  as const
}
