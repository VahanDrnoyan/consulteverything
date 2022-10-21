import { Container } from "@nextui-org/react"
import { NextPage } from "next/types"
import { useState } from "react";
import { Consultancy, Role, Field} from "../../../generated/graphql-frontend";

const ConsultancyEdit: NextPage = (props) =>{
    const initialvalues: Consultancy = {
        User: {
            __typename: undefined,
            accounts: [],
            email: undefined,
            id: "",
            role: Role.User
        },
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
        id: "",
        tags: [],
        max_attachment_count: 0,
        max_time_minuets: 0,
        short_description: ""
    }
    const [values, setValues] = useState<Consultancy>(initialvalues);
    return <div><Container>test</Container></div>
}
export default ConsultancyEdit