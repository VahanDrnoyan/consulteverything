import { faCheck, faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Input, Textarea, Text, Checkbox, Radio, FormElement, Badge } from "@nextui-org/react"
import { NextPage } from "next/types"
import { ChangeEvent, useEffect, useState, MouseEvent } from "react";
import { Value } from "react-quill";
import Editor from "../../../components/Editor";
import Footer from "../../../components/Footer";
import { PressEvent } from '@react-types/shared';

import { Consultancy, Role, Field, useCreateConsultancyMutation, MutationCreateConsultancyArgs, TagInputType, ConsultancyDataType } from "../../../generated/graphql-frontend";
import { useConsultancyTitleValidator } from "../../../Validators/ConsultancyTitleValidator";
import { useConsultancyTagValidator } from "../../../Validators/ConsultancyTagValidator";
import { useConsultancyShortDescriptionValidator } from "../../../Validators/ConsultancyShortDescriptionValidator";
import { useConsultancyLongDescriptionValidator } from "../../../Validators/ConsultancyLongDescriptionValidator";
import { useMaxAttachmentCountValidator } from "../../../Validators/MaxAttachmentCountValidator";
import { useMaxTimeInMinutesValidator } from "../../../Validators/MaxTimeInMinutesValidator";
import { useCheckboxValidator } from "../../../Validators/CheckboxValidator";
import { GraphQLErrorExtensions } from "graphql";

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
    
    const [serverErrors, setServerErrors] = useState<string[]>([])
    const[tagInputChanged, setTagInputChanged] = useState(false)
    const { errors: consultancyTagErrors } = useConsultancyTagValidator({tags: values.tags}, tagInputChanged)

    const [createConsultancy, { loading, error }] = useCreateConsultancyMutation({
        onCompleted: (data) => {
            console.log(data, 88888)
        },
    });
    useEffect(()=>{
        setServerErrors(error?.graphQLErrors[0].extensions as unknown as string[]);
    }, [error])
    const handleFormSubmit = async (e: React.FormEvent) => {

        e.preventDefault()
        if ((values.title && !consultancyTitleErrors) && (values.tags && !consultancyTagErrors)
            && (values.short_description && !consultancyShortDescriptionErrors)
            && !consultancyLongDescriptionErrors
            && (values.max_attachment_count && !maxAttachmentsCountErrors)
            && (values.max_time_minuets && !maxTimeInMinutesErrors)) {
                createConsultancy({ variables: { ...values } }).catch((err)=>{})
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
        const hasCommat = e.target.value.endsWith(',')
        setTagInputChanged(true)
        setValues((state) => {
            if (hasCommat) {
                const tags = [...state.tags];
                tags.push({ name: e.target.value.slice(0, -1) })
                e.target.value = ''
                return { ...state, ...{ tags } }
            }
            return state
        })
    }
    const handleNumberInputChange = (e: ChangeEvent<FormElement>) => {
        const id = e.target.name
        if (e.target.value === '') {
            e.target.value = "0"
        }
        setValues((state) => {
            return { ...state, ...{ [id]: parseInt(e.target.value) } }
        })
    }
    const handle_allow_enable_video_by_requester: (checked: boolean) => void = (checked) => {
        setValues((state) => {
            return { ...state, ...{ allow_enable_video_by_requester: checked } }
        })
    }
    const handle_allow_time_spent_issue_resolution_check: (value: string) => void = (value) => {
        if (value === Field.Include || value === Field.Exclude || value === Field.Required) {
            setValues((state) => {
                return { ...state, ...{ allow_time_spent_issue_resolution_check: value } }
            })
        }
    }
    const handle_allow_previous_consulancy_experience_check: (value: string) => void = (value) => {
        if (value === Field.Include || value === Field.Exclude || value === Field.Required) {
            setValues((state) => {
                return { ...state, ...{ allow_previous_consulancy_experience_check: value } }
            })
        }
    }
    const handle_allow_prefession_check: (value: string) => void = (value) => {
        if (value === Field.Include || value === Field.Exclude || value === Field.Required) {
            setValues((state) => {
                return { ...state, ...{ allow_prefession_check: value } }
            })
        }
    }
    const handle_allow_ongoing_support_check: (value: string) => void = (value) => {
        if (value === Field.Include || value === Field.Exclude || value === Field.Required) {
            setValues((state) => {
                return { ...state, ...{ allow_ongoing_support_check: value } }
            })
        }
    }
    const handle_allow_gender_check: (value: string) => void = (value) => {
        if (value === Field.Include || value === Field.Exclude || value === Field.Required) {
            setValues((state) => {
                return { ...state, ...{ allow_gender_check: value } }
            })
        }
    }
    const handle_allow_expertise_in_problem_field_check: (value: string) => void = (value) => {
        if (value === Field.Include || value === Field.Exclude || value === Field.Required) {
            setValues((state) => {
                return { ...state, ...{ allow_expertise_in_problem_field_check: value } }
            })
        }
    }
    const handle_allow_expectations_check: (value: string) => void = (value) => {
        if (value === Field.Include || value === Field.Exclude || value === Field.Required) {
            setValues((state) => {
                return { ...state, ...{ allow_expectations_check: value } }
            })
        }
    }
    const handle_allow_email_check: (value: string) => void = (value) => {
        if (value === Field.Include || value === Field.Exclude || value === Field.Required) {
            setValues((state) => {
                return { ...state, ...{ allow_email_check: value } }
            })
        }
    }
    const handle_allow_age_check: (value: string) => void = (value) => {
        if (value === Field.Include || value === Field.Exclude || value === Field.Required) {
            setValues((state) => {
                return { ...state, ...{ allow_age_check: value } }
            })
        }
    }
    const handle_allow_name_surname: (value: string) => void = (value) => {
        if (value === Field.Include || value === Field.Exclude || value === Field.Required) {
            setValues((state) => {
                return { ...state, ...{ allow_name_surneame: value } }
            })
        }
    }
    const handleEnableVideoByProvider = (checked: boolean) => {
        setValues((state) => {
            return { ...state, ...{ enable_video_by_provider: checked } }
        })
    }
    const handleEnableActive = (checked: boolean) => {
        setValues((state) => {
            return { ...state, ...{ isActive: checked } }
        })
    }

    const RadioOptions = () => {
        return (
            <><Radio value="INCLUDE">Include</Radio><Radio value="EXCLUDE">Exclude</Radio><Radio value="REQUIRED">Required</Radio></>
        )
    }
    const { errors: consultancyTitleErrors, helper: consultancyTitleHelper } = useConsultancyTitleValidator(values.title)
    const { errors: consultancyShortDescriptionErrors, helper: consultancyShortDescriptionHelper } = useConsultancyShortDescriptionValidator(values.short_description);
    const { errors: consultancyLongDescriptionErrors } = useConsultancyLongDescriptionValidator(values.long_description);
    const [editorValue, setEditorValue] = useState('')
    const { errors: maxAttachmentsCountErrors, helper: maxAttachmentsCountHelper } = useMaxAttachmentCountValidator(values.max_attachment_count)
    const { errors: maxTimeInMinutesErrors, helper: maxTimeInMinutesHelper } = useMaxTimeInMinutesValidator(values.max_time_minuets)
    const { errors: enableVideoErrors, helper: enableVideoHelper } = useCheckboxValidator(values.enable_video_by_provider)
    useEffect(() => {
        setValues((state) => {
            return { ...state, ...{ long_description: editorValue } }
        })
    }, [editorValue])
    return (<div>
        <Container>

            <div style={{ width: '600px', margin: 'auto', marginTop: '20px' }}>
                {serverErrors?.length > 0 && serverErrors.map((item, i)=> {
                    return (<Text key={item + i}css={{ color: '$red600', fontSize: 12, mt: 6 }}>{item}</Text>)})}
            
                <Text css={{ 'mt': 20 }} h3>Add consultancy</Text>
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
                        label="Max attachments count *"
                        type="number"
                        min={0}
                        defaultValue={0}
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
                        isSelected={values.enable_video_by_provider}

                        defaultSelected={values.enable_video_by_provider}>
                        <span style={enableVideoErrors ? { ...{ fontSize: '14px', color: 'var(--nextui--inputHelperColor)' } } : { fontSize: '14px', color: 'var(--nextui-colors-default)' }}>
                            {enableVideoErrors || 'Allow live video'}
                        </span>
                    </Checkbox> <br />
                    <Checkbox
                        label=""
                        color={"default"}
                        css={{ 'mt': 40 }} onChange={handleEnableActive}
                        isSelected={values.isActive}

                        defaultSelected={values.isActive}>
                             <span style={{ fontSize: '14px', color: 'var(--nextui-colors-default)' }}>
                            {'Is active consultancy'}
                        </span>
                    </Checkbox>
                    <Text css={{ 'mt': 20 }} h3>Request form options</Text>
                    <Text css={{ 'mt': 10 }} h6>The options which should be applied to form of consultancy. The form will be filled by consultancy requesting users.</Text>
                    <br />
                    <Radio.Group value={values.allow_name_surname} onChange={handle_allow_name_surname} size="xs" css={{ 'mt': 20 }} label='Allow "Name-Surname"' defaultValue="EXCLUDE">
                        {RadioOptions()}
                    </Radio.Group>
                    <br />

                    <Radio.Group value={values.allow_age_check} onChange={handle_allow_age_check} size="xs" css={{ 'mt': 20 }} label='Allow "Age"' defaultValue="EXCLUDE">
                        {RadioOptions()}
                    </Radio.Group>
                    <br />

                    <Radio.Group value={values.allow_email_check} onChange={handle_allow_email_check} size="xs" css={{ 'mt': 20 }} label='Allow "Email"' defaultValue="EXCLUDE">
                        {RadioOptions()}
                    </Radio.Group>
                    <br />

                    <Radio.Group value={values.allow_expectations_check} onChange={handle_allow_expectations_check} size="xs" css={{ 'mt': 20 }} label='Allow "Expectations"' defaultValue="EXCLUDE">
                        {RadioOptions()}
                    </Radio.Group>
                    <br />

                    <Radio.Group value={values.allow_expertise_in_problem_field_check} onChange={handle_allow_expertise_in_problem_field_check} size="xs" css={{ 'mt': 20 }} label='Allow "Expertise in filed"' defaultValue="EXCLUDE">
                        {RadioOptions()}
                    </Radio.Group>
                    <br />

                    <Radio.Group value={values.allow_gender_check} onChange={handle_allow_gender_check} size="xs" css={{ 'mt': 20 }} label='Allow "Gender"' defaultValue="EXCLUDE">
                        {RadioOptions()}
                    </Radio.Group>
                    <br />

                    <Radio.Group value={values.allow_ongoing_support_check} onChange={handle_allow_ongoing_support_check} size="xs" css={{ 'mt': 20 }} label='Allow "Ongoing support"' defaultValue="EXCLUDE">
                        {RadioOptions()}
                    </Radio.Group>
                    <br />

                    <Radio.Group value={values.allow_profession_check} onChange={handle_allow_prefession_check} size="xs" css={{ 'mt': 20 }} label='Allow "Your profession"' defaultValue="EXCLUDE">
                        {RadioOptions()}
                        <Radio value="REQUIRED">Required</Radio>
                    </Radio.Group>
                    <br />

                    <Radio.Group value={values.allow_previous_consultancy_experience_check} onChange={handle_allow_previous_consulancy_experience_check} size="xs" css={{ 'mt': 20 }} label='Allow "Previous consultancy experience"' defaultValue="EXCLUDE">
                        {RadioOptions()}
                    </Radio.Group>
                    <br />
                    <Radio.Group value={values.allow_time_spent_issue_resolution_check} size="xs" css={{ 'mt': 20 }} onChange={handle_allow_time_spent_issue_resolution_check} label=' Allow "Time spent on issue resolution"' defaultValue="EXCLUDE">
                        {RadioOptions()}
                    </Radio.Group>
                    <br />
                    <Checkbox size={"xs"} isSelected={values.allow_enable_video_by_requester} onChange={handle_allow_enable_video_by_requester} css={{ 'mt': 20 }} color="primary" defaultSelected={values.allow_enable_video_by_requester}>
                        <span style={{ fontSize: '14px', color: 'var(--nextui-colors-primary)' }}>
                            Allow "Live video"
                        </span>
                    </Checkbox>

                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: '20px' }}>
                        <Button color={"primary"} type="submit" disabled={loading}>
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