import { faCheck, faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Input, Textarea, Text, Checkbox, Radio, FormElement, Badge } from "@nextui-org/react"
import { NextPage } from "next/types"
import { ChangeEvent, useEffect, useState, MouseEvent } from "react";
import { Value } from "react-quill";
import Editor from "../../../components/Editor";
import Footer from "../../../components/Footer";
import { PressEvent } from '@react-types/shared';

import { Consultancy, Role, Field, useCreateConsultancyMutation, MutationCreateConsultancyArgs } from "../../../generated/graphql-frontend";

type NextPageWithAuth = NextPage & {
    auth?: {
        role: string
    }
};



const ConsultancyEdit: NextPageWithAuth = (props) => {
    const [createConsultancy, { loading, error }] = useCreateConsultancyMutation({
        onCompleted: (data) => {
            console.log(data, 88888)
        },
    });

    const handleFormSubmit = async (e: React.FormEvent) => {
        console.log(values, 'values', 2222)

        e.preventDefault()
        await createConsultancy({ variables: { ...values } })

    }
    const handleInputChange = (e: ChangeEvent<FormElement>) => {
        const id = e.target.name
        setValues((state) => {
            return { ...state, ...{ [id]: e.target.value } }
        })
    }
    const removeTagItem = (e: PressEvent) => {

        const tag = e.target.id

        setValues((state) => {
            const tags = state.tags.filter((item) => {
                return item !== tag
            });
            return { ...state, ...{ tags: tags } }
        })
    }
    const handleTagsChange = (e: ChangeEvent<FormElement>) => {
        const hasCommat = e.target.value.endsWith(',')

        setValues((state) => {
            if (hasCommat) {
                const tags = state.tags;
                tags.push(e.target.value.slice(0, -1))
                e.target.value = ''
                return { ...state, ...{ tags } }
            }
            return state
        })
    }
    const handleNumberInputChange = (e: ChangeEvent<FormElement>) => {
        const id = e.target.name
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
    const handle_allow_name_surneame: (value: string) => void = (value) => {
        if (value === Field.Include || value === Field.Exclude || value === Field.Required) {
            setValues((state) => {
                return { ...state, ...{ allow_name_surneame: value } }
            })
        }
    }
    const handeleEnableVideoByProvider = (checked: boolean) => {
        setValues((state) => {
            return { ...state, ...{ enable_video_by_provider: checked } }
        })
    }
    const initialvalues: Omit<MutationCreateConsultancyArgs, "User" | "id"> = {
        title: '',
        allow_age_check: Field.Exclude,
        allow_email_check: Field.Exclude,
        allow_enable_video_by_requester: false,
        allow_expectations_check: Field.Exclude,
        allow_expertise_in_problem_field_check: Field.Exclude,
        allow_gender_check: Field.Exclude,
        allow_name_surneame: Field.Exclude,
        allow_ongoing_support_check: Field.Exclude,
        allow_prefession_check: Field.Exclude,
        allow_previous_consulancy_experience_check: Field.Exclude,
        allow_time_spent_issue_resolution_check: Field.Exclude,
        enable_video_by_provider: false,

        max_attachment_count: 0,
        max_time_minuets: 0,
        short_description: "",
        long_dscription: '',
        tags: []
    }
    const RadioOptions = () => {
        return (
            <><Radio value="INCLUDE">Include</Radio><Radio value="EXCLUDE">Exclude</Radio><Radio value="REQUIRED">Required</Radio></>
        )
    }
    const [values, setValues] = useState<Omit<MutationCreateConsultancyArgs, "User" | "id">>(initialvalues);
    const [editorValue, setEditorValue] = useState('')
    useEffect(() => {
        setValues((state) => {
            return { ...state, ...{ long_dscription: editorValue } }
        })
    }, [editorValue])
    return (<div>
        <Container>

            <div style={{ width: '600px', margin: 'auto', marginTop: '20px' }}>
                <Text css={{ 'mt': 20 }} h3>Add consultancy</Text>
                <form onSubmit={handleFormSubmit}>
                    <Input
                        css={{ 'mt': 40 }}
                        labelPlaceholder="Title"
                        status="primary"
                        required
                        bordered
                        clearable
                        animated
                        value={values.title}
                        name="title"
                        fullWidth
                        onChange={handleInputChange}
                    />

                    <Input
                        css={{ 'mt': 40 }}
                        labelPlaceholder="Tags"
                        status="primary"
                        required
                        bordered
                        type="text"
                        clearable
                        animated
                        fullWidth
                        helperText="Comma separated list of tags"
                        onChange={handleTagsChange}
                    />
                    {values.tags.length > 0 ? values.tags.map((item: string, key) => {
                        if (item) {
                            return (<Badge isSquared size={"xs"} key={key} css={{ m: '$1','pl': 10, 'mt': '$4', 'bg': '$accents4', 'color': '$accents8', 'border': 'none' }}>
                                {item}
                                <Button
                                    id={item}
                                    onPress={removeTagItem}

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
                    <Input type="hidden" name="tags" value={values.tags}/>
                    <Textarea
                        css={{ 'mt': 40 }}
                        labelPlaceholder="Short description"
                        status="primary"
                        required
                        bordered
                        animated
                        value={values.short_description}
                        name="short_description"
                        fullWidth
                        onChange={handleInputChange}
                    />
                    <Text css={{ 'mt': 40, 'color': '$primary', 'fontSize': 14 }}>Long description</Text>
                    <Editor value={values.long_dscription as Value} placeholder="(optional)" setValue={setEditorValue} />
                    <Input
                        labelPlaceholder="Max attachments count"
                        type="number"
                        required
                        min={0}
                        css={{ 'mt': 40 }}
                        bordered
                        status="primary"
                        animated
                        fullWidth
                        name="max_attachment_count"
                        value={values.max_attachment_count}
                        onChange={handleNumberInputChange}
                    />
                    <Input
                        labelPlaceholder="Max time in minutes"
                        type="number"
                        required
                        min={0}
                        step={5}
                        css={{ 'mt': 40 }}
                        bordered
                        status="primary"
                        animated
                        name="max_time_minuets"
                        fullWidth
                        value={values.max_time_minuets}
                        onChange={handleNumberInputChange}
                    />
                    <Checkbox css={{ 'my': 20 }} onChange={handeleEnableVideoByProvider} color="primary" isSelected={values.enable_video_by_provider} defaultSelected={values.enable_video_by_provider}>
                        <span style={{ fontSize: '14px', color: 'var(--nextui-colors-primary)' }}>
                            Allow live video
                        </span>
                    </Checkbox>
                    <Text css={{ 'mt': 20 }} h3>Request form options</Text>
                    <Text css={{ 'mt': 10 }} h6>The options which should be applied to form of consultancy. The form will be filled by consultancy requesting users.</Text>
                    <br />
                    <Radio.Group value={values.allow_name_surneame} onChange={handle_allow_name_surneame} size="xs" css={{ 'mt': 20 }} label='Allow "Name-Surname"' defaultValue="EXCLUDE">
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

                    <Radio.Group value={values.allow_prefession_check} onChange={handle_allow_prefession_check} size="xs" css={{ 'mt': 20 }} label='Allow "Your profession"' defaultValue="EXCLUDE">
                        {RadioOptions()}
                        <Radio value="REQUIRED">Required</Radio>
                    </Radio.Group>
                    <br />

                    <Radio.Group value={values.allow_previous_consulancy_experience_check} onChange={handle_allow_previous_consulancy_experience_check} size="xs" css={{ 'mt': 20 }} label='Allow "Previous consultancy experience"' defaultValue="EXCLUDE">
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