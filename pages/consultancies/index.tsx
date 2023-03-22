import { useSession } from "next-auth/react"

import Head from "next/head"
import React, { useState, useRef, useEffect } from "react"

import LoginModal from "../../components/LoginModal"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import Link from "next/link"
import ConsultancyCard from "../../components/ConsultancyCard"
import { Container } from "@nextui-org/react"
import { GetServerSideProps, NextPage } from "next/types";
import Footer from "../../components/Footer"
import { initializeApollo } from "../../lib/client"
import { InferGetServerSidePropsType } from "next";
import {
  ConsultanciesDocument,
  ConsultanciesQuery,
  ConsultanciesQueryVariables,
  useConsultanciesQuery,
} from "../../generated/graphql-frontend"
type NextPageWithAuth = NextPage & {
  auth?: {
    role: string
  }
}
const Consultancies: NextPageWithAuth = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { data: session, status } = useSession()
  const [showModal, setShowModal] = useState(false)
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [isBottom, setIsBottom] = useState(false);
  const { loading, data, fetchMore } = useConsultanciesQuery({
    variables: {
      limit: 20,
    },
  })
  const handleScroll = () => {
    const scrollTop = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );

    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (isBottom && data?.consultancies?.pageInfo?.hasNextPage) {
      fetchMore({
        variables: {
          cursor: data?.consultancies?.pageInfo?.endCursor,
          limit: 20,
        },
      }).then((res) => console.log(res))
    }
  }, [isBottom, data?.consultancies, fetchMore])
  const showSearchFormHandler = () => {
    setShowSearchModal(true)
  }
  return (
    <div>
      <Head>
        <title>Consult Everything | Consultanices</title>
        <meta name="description" content="Consultancies list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container css={{ pt: 20 }}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 1,
            750: 2,
            1200: 3,
            1400: 3,
            2000: 3,
          }}
        >
          <Masonry columnsCount={3} gutter="35px">
            {data?.consultancies && data.consultancies.edges?.map((consultancy)=>{
                return (<ConsultancyCard key={consultancy?.node?.id} consultancy={consultancy?.node}/>)
            })}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
      <Footer />
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo()
  await apolloClient.query<ConsultanciesQuery, ConsultanciesQueryVariables>({
    query: ConsultanciesDocument,
    variables: { limit: 20 },
  })
  return { props: { initialApolloState: apolloClient.cache.extract() } }
}
Consultancies.auth = {
  role: "guest",
}
export default Consultancies
