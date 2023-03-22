import { faCheck, faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Input, Textarea, Text, Checkbox, Radio, FormElement, Badge } from "@nextui-org/react"
import { NextPage } from "next/types"
import { ChangeEvent, useEffect, useState, MouseEvent, useMemo } from "react";
import { Value } from "react-quill";
import Editor from "../../../components/Editor";
import Footer from "../../../components/Footer";
import { PressEvent } from '@react-types/shared';

import { Consultancy, Role, Field, useCreateConsultancyMutation, MutationCreateConsultancyArgs, TagInputType, ConsultancyDataType, useGetConsultancyByIdQuery, useGetConsultancyByIdLazyQuery, useUpdateConsultancyMutation } from "../../../generated/graphql-frontend";
import { useConsultancyTitleValidator } from "../../../Validators/ConsultancyTitleValidator";
import { useConsultancyTagValidator } from "../../../Validators/ConsultancyTagValidator";
import { useConsultancyShortDescriptionValidator } from "../../../Validators/ConsultancyShortDescriptionValidator";
import { useConsultancyLongDescriptionValidator } from "../../../Validators/ConsultancyLongDescriptionValidator";
import { useMaxAttachmentCountValidator } from "../../../Validators/MaxAttachmentCountValidator";
import { useMaxTimeInMinutesValidator } from "../../../Validators/MaxTimeInMinutesValidator";
import { useCheckboxValidator } from "../../../Validators/CheckboxValidator";
import { GraphQLErrorExtensions } from "graphql";
import { useRouter } from "next/router";

type NextPageWithAuth = NextPage & {
    auth?: {
        role: string
    }
};



const ConsultancyEdit: NextPageWithAuth = (props) => {
    const initialValues: ConsultancyDataType = {
        title: '',
        allow_age_check: Field.Exclude,
        allow_email_check: Field.Exclude,
        allow_enable_video_by_requester: false,
        allow_expectations_check: Field.Exclude,
        allow_expertise_in_problem_field_check: Field.Exclude,
        allow_gender_check: Field.Exclude,
        allow_name_surname: Field.Exclude,
        allow_ongoing_support_check: Field.Exclude,
        allow_profession_check: Field.Exclude,
        allow_previous_consultancy_experience_check: Field.Exclude,
        allow_time_spent_issue_resolution_check: Field.Exclude,
        enable_video_by_provider: false,

        max_attachment_count: 0,
        max_time_minuets: 0,
        short_description: "",
        long_description: '',
        tags: [],
        isActive: false
    }
    const [values, setValues] = useState<ConsultancyDataType>(initialValues);
    const [getByIdErrors, setGetByIdErrors] = useState<string>('')
    const [id, setId] = useState<string>('')
    const [serverErrors, setServerErrors] = useState<string[]>([])
    const[tagInputChanged, setTagInputChanged] = useState(false)
    const { errors: consultancyTagErrors } = useConsultancyTagValidator({tags: values.tags}, tagInputChanged)

    const [createConsultancy, { loading, error }] = useCreateConsultancyMutation({
        onCompleted: (data) => {
        },
        onError: (err)=>{
            setServerErrors(err.graphQLErrors[0].extensions as unknown as string[]);
        }
    });
    const [updateConsultancy] = useUpdateConsultancyMutation({
        onCompleted: (data) => {
        },
        onError: (err)=>{
            setServerErrors(err.graphQLErrors[0].extensions as unknown as string[]);
        }
    });
    const router = useRouter()
    useEffect(()=>{
        if(router.query.id && router.query.id[0] !== undefined && typeof router.query.id[0] === 'string'){
        getConsultancyById({variables: {id: router.query.id[0]}})
        }
    },[router.query.id])
    const [ getConsultancyById ] = useGetConsultancyByIdLazyQuery(
        {onCompleted:(data)=> {
            if(data?.getConsultancyById?.data){
                const cleanedUpTags = data?.getConsultancyById?.data.tags.map((item)=> {
                    
                    return {name: item.name, id: item.id};
                })
                const allData = {...data?.getConsultancyById?.data, tags: [...cleanedUpTags]}
            setValues(allData)
            setId(data?.getConsultancyById?.id);
            }
        },
        onError: (err)=> {
            setGetByIdErrors(err.message)
        },
        fetchPolicy: 'network-only'
    })
    const handleFormSubmit = async (e: React.FormEvent) => {

        e.preventDefault()
        if ((values.title && !consultancyTitleErrors) && (values.tags && !consultancyTagErrors)
            && (values.short_description && !consultancyShortDescriptionErrors)
            && !consultancyLongDescriptionErrors
            && (!maxAttachmentsCountErrors)
            && (values.max_time_minuets && !maxTimeInMinutesErrors)) {
                if(id) {
                    updateConsultancy({ variables: { id, ...values } }).then(()=>{
                        setValues((state)=> {
                            return {...initialValues}
                        })
                        setTagInputChanged(false)
                        router.push(
                            {
                                pathname: '/dashboard/consultancies'
                            }
                        )
                    }).catch((err)=>{})
                } else {
                createConsultancy({ variables: { ...values } }).then(()=>{
                    setValues((state)=> {
                        return {...initialValues}
                    })
                    setTagInputChanged(false)
                    router.push(
                        {
                            pathname: '/dashboard/consultancies'
                        }
                    )
                }).catch((err)=>{})
            }
            }
        

    }
    
    const handleInputChange = (e: ChangeEvent<FormElement>) => {
        const id = e.target.name
        setValues((state) => {
            return { ...state, ...{ [id]: e.target.value } }
        })
    }
    const removeTagItem = (e: MouseEvent<HTMLButtonElement>) => {

        const tag = (e.target as HTMLButtonElement).name

        setValues((state) => {
            const tags = [...state.tags.filter((item) => {
                return item.name !== tag
            })];
            return { ...state, ...{ tags: tags } }
        })

    }

    const handleTagsChange = (e: ChangeEvent<FormElement>) => {
        const hasComma = e.target.value.endsWith(',')
        setTagInputChanged(true)
        setValues((state) => {
            if (hasComma) {
                const tags = [...state.tags];
                tags.push({
                    name: e.target.value.slice(0, -1),
                    id: 0
                })
                e.target.value = ''
                return { ...state, ...{ tags } }
            }
            return state
        })
    }
    const handleNumberInputChange = (e: ChangeEvent<FormElement>) => {
        const id = e.target.name
        // if (e.target.value === '') {
        //     e.target.value = "0"
        // }
        setValues((state) => {
            return { ...state, ...{ [id]: parseInt(e.target.value) } }
        })
    }
    const handle_allow_enable_video_by_requester: (checked: boolean) => void = (checked) => {
        setValues((state) => {
            return { ...state, ...{ allow_enable_video_by_requester: checked } }
        })
    }
    const handleCheckbox = (value: string, offsetName: string) => {
        setValues((state) => {
            return { ...state, ...{ [offsetName]: value } }
        })
    }
    const handleEnableActive = (checked: boolean) => {
        setValues((state) => {
            return { ...state, ...{ isActive: checked } }
        })
    }
    const handleEnableVideoByProvider = (checked: boolean) => {
        setValues((state) => {
            return { ...state, ...{ enable_video_by_provider: checked } }
        })
    }
    const RadioOptions = (value: string, offsetName: string, label: string, defaultValue: string) => {
        return (
            <Radio.Group value={value} onChange={(value:string)=> handleCheckbox(value, offsetName)} size="xs" css={{ 'mt': 20 }} label='Allow "Age"' defaultValue="EXCLUDE">
                <Radio value="INCLUDE">Include</Radio><Radio value="EXCLUDE">Exclude</Radio><Radio value="REQUIRED">Required</Radio>
                </Radio.Group>
        )
    }
   
    const { errors: consultancyTitleErrors, helper: consultancyTitleHelper } = useConsultancyTitleValidator(values.title)
    const { errors: consultancyShortDescriptionErrors, helper: consultancyShortDescriptionHelper } = useConsultancyShortDescriptionValidator(values.short_description);
    const { errors: consultancyLongDescriptionErrors } = useConsultancyLongDescriptionValidator(values.long_description);
   
    const { errors: maxAttachmentsCountErrors, helper: maxAttachmentsCountHelper } = useMaxAttachmentCountValidator(values.max_attachment_count)
    const { errors: maxTimeInMinutesErrors, helper: maxTimeInMinutesHelper } = useMaxTimeInMinutesValidator(values.max_time_minuets)
    const { errors: enableVideoErrors, helper: enableVideoHelper } = useCheckboxValidator(values.enable_video_by_provider)
    
    
    const [editorValue, setEditorValue] = useState('')
   useEffect(() => {
    
        setValues((state) => {
            return { ...state, ...{ long_description: editorValue } }
        })
    }, [editorValue])
    const submitIsDisabled = useMemo(()=>{
       
        if ((values.title && !consultancyTitleErrors) && (values.tags && !consultancyTagErrors)
        && (values.short_description && !consultancyShortDescriptionErrors)
        && !consultancyLongDescriptionErrors
        && (!maxAttachmentsCountErrors)
        && (values.max_time_minuets && !maxTimeInMinutesErrors)) {
            return false
    }
        return true
    }, [values.title, values.tags, values.short_description, values.max_attachment_count, values.max_time_minuets, consultancyTitleErrors, consultancyTagErrors, consultancyShortDescriptionErrors, consultancyLongDescriptionErrors, maxAttachmentsCountErrors, maxTimeInMinutesErrors])
    return (<div style={{ background: '#dedede', paddingTop: '20px' }}>
        <Container>
            <div style={{ width: '600px', margin: 'auto', backgroundColor: '#fff', padding: '12px', borderRadius: '5px' }}>
                {serverErrors?.length > 0 && serverErrors.map((item, i)=> {
                    return (<Text key={item + i}css={{ color: '$red600', fontSize: 12, mt: 6 }}>{item}</Text>)})}
    {getByIdErrors && (<Text css={{ color: '$red600', fontSize: 12, mt: 6, textAlign: 'center' }}>{getByIdErrors}</Text>)}
            
                <Text h3>Add consultancy</Text>
                <form onSubmit={handleFormSubmit}>
                    <Input
                        css={{ 'mt': 40 }}
                        label="Title *"
                        status={consultancyTitleHelper.color as "default" | "error"}
                        color={consultancyTitleHelper.color as "default" | "error"}
                        helperColor={consultancyTitleHelper.color as "default" | "error"}
                        required
                        helperText={consultancyTitleErrors}
                        clearable
                        animated
                        value={values.title}
                        name="title"
                        fullWidth
                        onChange={handleInputChange}
                    />

                    <Input
                        css={{ 'mt': 20 }}
                        label="Tags *"
                        status="default"
                        helperText={"Comma separated list of tags"}
                        type="text"
                        clearable
                        animated
                        fullWidth
                        onChange={handleTagsChange}
                    />
                    <div style={{ marginTop: '20px' }}>
                        {values.tags.length > 0 ? values.tags.map((item: TagInputType, key) => {
                            if (item.name) {
                                return (<Badge color={'default'} isSquared size={"xs"} key={key} css={{ m: '$1', 'pl': 10, 'border': 'none' }}>
                                    {item.name}
                                    <Button
                                        name={item.name}
                                        onClick={removeTagItem}

                                        auto
                                        css={{ 'd': 'inline-flex', 'minWidth': '24px', maxHeight: 18 }}
                                        light
                                        size={'xs'}

                                        icon={<FontAwesomeIcon size={'1x'} color="#fff" icon={faRemove} />}
                                    />
                                </Badge>)
                            }
                            return '';
                        }) : ''}
                        {consultancyTagErrors && (<Text css={{ color: '$red600', fontSize: 12, mt: 6 }}>{consultancyTagErrors}</Text>)}
                    </div>

                    <Textarea
                        css={{ 'mt': 20 }}
                        label="Short description *"
                        status={consultancyShortDescriptionHelper.color as "default" | "error"}
                        color={consultancyShortDescriptionHelper.color as "default" | "error"}
                        helperColor={consultancyShortDescriptionHelper.color as "default" | "error"}
                        required
                        helperText={consultancyShortDescriptionErrors}
                        animated
                        value={values.short_description}
                        name="short_description"
                        fullWidth
                        onChange={handleInputChange}
                    />
                    <Text css={{ 'mt': 20, 'color': '$accents9', 'fontSize': 14 }}>Long description</Text>
                    <Editor bgColor={consultancyLongDescriptionErrors ? 'rgb(253,216,229)' : 'rgb(241, 243, 245)'} value={values.long_description as Value} placeholder="(optional)" setValue={setEditorValue} />
                    {consultancyLongDescriptionErrors && (<Text css={{ color: '$red600', fontSize: 12, mt: 6 }}>{consultancyLongDescriptionErrors}</Text>)}
                    <Input
                        label="Max attachments count"
                        type="number"
                        min={0}
                        css={{ 'mt': 20 }}
                        status={maxAttachmentsCountHelper.color as "default" | "error"}
                        color={maxAttachmentsCountHelper.color as "default" | "error"}
                        helperColor={maxAttachmentsCountHelper.color as "default" | "error"}
                        required
                        helperText={maxAttachmentsCountErrors}
                        animated
                        fullWidth
                        name="max_attachment_count"
                        value={values.max_attachment_count}
                        onChange={handleNumberInputChange}
                    />
                    <Input
                        label="Max time in minutes *"
                        type="number"
                        status={maxTimeInMinutesHelper.color as "default" | "error"}
                        color={maxTimeInMinutesHelper.color as "default" | "error"}
                        helperColor={maxTimeInMinutesHelper.color as "default" | "error"}
                        required
                        helperText={maxTimeInMinutesErrors}
                        min={0}
                        step={5}
                        css={{ 'mt': 30 }}
                        animated
                        name="max_time_minuets"
                        fullWidth
                        value={values.max_time_minuets}
                        onChange={handleNumberInputChange}
                    />
                    <Checkbox

                        color={enableVideoHelper.color as "default" | "error"}
                        css={{ 'mt': 40 }} onChange={handleEnableVideoByProvider}
                        isSelected={values.enable_video_by_provider}>
                        <span style={enableVideoErrors ? { ...{ fontSize: '14px', color: 'var(--nextui--inputHelperColor)' } } : { fontSize: '14px', color: 'var(--nextui-colors-default)' }}>
                            {enableVideoErrors || 'Allow live video'}
                        </span>
                    </Checkbox> <br />
                    <Checkbox
                        label=""
                        color={"default"}
                        css={{ 'mt': 40 }} onChange={handleEnableActive}
                        isSelected={values.isActive}>

                             <span style={{ fontSize: '14px', color: 'var(--nextui-colors-default)' }}>
                            {'Is active consultancy'}
                        </span>
                    </Checkbox>
                    <Text css={{ 'mt': 20 }} h3>Request form options</Text>
                    <Text css={{ 'mt': 10 }} h6>The options which should be applied to form of consultancy. The form will be filled by consultancy requesting users.</Text>
                    <br />
                        {RadioOptions(values.allow_name_surname, 'allow_name_surname', 'Allow "Name-Surname"', 'EXCLUDE')}
                    <br />

                        {RadioOptions(values.allow_age_check, 'allow_age_check', 'Allow "Age', 'EXCLUDE')}
                    <br />

                    {RadioOptions(values.allow_email_check, 'allow_email_check', 'Allow Email', 'EXCLUDE')}
                    <br />

                    {RadioOptions(values.allow_expectations_check, 'allow_expectations_check', 'Allow Expectations', 'EXCLUDE')}
                    <br />

                    {RadioOptions(values.allow_expertise_in_problem_field_check, 'allow_expertise_in_problem_field_check', 'Allow "Expertise in filed"', 'EXCLUDE')}
                    <br />

                    {RadioOptions(values.allow_gender_check, 'allow_gender_check', 'Allow Gender', 'EXCLUDE')}
                    <br />

                    {RadioOptions(values.allow_ongoing_support_check, 'allow_ongoing_support_check', 'Allow "Ongoing support"', 'EXCLUDE')}
                    <br />

                    {RadioOptions(values.allow_profession_check, 'allow_profession_check', 'Allow "Your profession"', 'EXCLUDE')}
                    <br />

                    {RadioOptions(values.allow_previous_consultancy_experience_check, 'allow_previous_consultancy_experience_check', 'Allow "Previous consultancy experience"', 'EXCLUDE')}
                    <br />
                    {RadioOptions(values.allow_time_spent_issue_resolution_check, 'allow_time_spent_issue_resolution_check', 'Allow "Time spent on issue resolution"', 'EXCLUDE')}
                    <br />
                    <Checkbox size={"xs"} isSelected={values.allow_enable_video_by_requester} onChange={handle_allow_enable_video_by_requester} css={{ 'mt': 20 }} color="primary">
                        <span style={{ fontSize: '14px', color: 'var(--nextui-colors-primary)' }}>
                            Allow Live video
                        </span>
                    </Checkbox>

                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: '20px' }}>
                        <Button disabled={submitIsDisabled || loading} color={"primary"} type="submit">
                            Save
                        </Button>
                    </div>

                </form>

            </div>
        </Container>
        <Footer />
    </div>)
}
ConsultancyEdit.auth = {
    role: 'USER'
}
export default ConsultancyEdit