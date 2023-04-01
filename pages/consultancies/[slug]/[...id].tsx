import { useRouter } from "next/router"
import { GetServerSideProps, NextPage } from "next/types"
import { InferGetServerSidePropsType } from "next"

import { useEffect, useState } from "react"

import { GetConsultancyById } from "../../../Consultancy/nexus_types"
import {
  Button,
  Container,
  Input,
  Textarea,
  Text,
  Checkbox,
  Radio,
  FormElement,
  Badge,
} from "@nextui-org/react"

import {
  ConsultancyDataType,
  Field,
  GetConsultancyByIdDocument,
  GetConsultancyByIdQuery,
  GetConsultancyByIdQueryVariables,
  GetMyConsultanciesDocument,
  useGetConsultancyByIdQuery,
} from "../../../generated/graphql-frontend"
import { initializeApollo } from "../../../lib/client"

type NextPageWithAuth = NextPage & {
  auth?: {
    role: string
  }
}

const ConsultancyView: NextPageWithAuth = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const router = useRouter()
  const { slug, id } = router.query
  const { loading, error, data } = useGetConsultancyByIdQuery({
    variables: { id: parseInt(id && typeof id[0] === "string" ? id[0] : "") },
  })
  if (error) {
    return <div>{error?.graphQLErrors[0].extensions.originalError.message}</div>
  }
  return <div>{!loading && data && data.getConsultancyById?.data.title}</div>
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo()
  const id = context.query?.id ? parseInt(context.query?.id[0]) : 0
  if (id) {
    try {
      await apolloClient.query<
        GetConsultancyByIdQuery,
        GetConsultancyByIdQueryVariables
      >({
        query: GetConsultancyByIdDocument,
        variables: { id },
      })
    } catch (err) {}
  }
  return { props: { initialApolloState: apolloClient.cache.extract() } }
}
ConsultancyView.auth = {
  role: "guest",
}

export default ConsultancyView
