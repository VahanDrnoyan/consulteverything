import { useSession } from "next-auth/react"

import Head from "next/head"
import React, { useState, useRef, useEffect } from "react"

import LoginModal from "../../components/LoginModal"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Link from "next/link"
import ConsultancyCard from "../../components/ConsultancyCard"
import { Container, Text, Button } from "@nextui-org/react"
import { GetServerSideProps, NextPage } from "next/types";
import Footer from "../../components/Footer"
import { initializeApollo } from "../../lib/client"
import { InferGetServerSidePropsType } from "next";
import algoliasearch, { SearchClient } from 'algoliasearch/lite';
import { InstantSearch, Hits, ClearRefinements, RefinementList, Configure, Pagination } from 'react-instantsearch-dom';
// Include only the reset
import 'instantsearch.css/themes/reset.css';
// or include the full Satellite theme
import 'instantsearch.css/themes/satellite.css';

import {
  ConsultanciesDocument,
  ConsultanciesQuery,
  ConsultanciesQueryVariables,
  useConsultanciesQuery,
} from "../../generated/graphql-frontend"
import BackToTopButton from "../../components/BackToTopButton"
import SearchBox from "../../components/SearchBox"
import Search from "../../components/Search"
import { MultipleQueriesQuery } from "@algolia/client-search"
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
    fetchPolicy: 'cache-and-network'
  })
  let searchClient = null;
  if(process.env.NEXT_PUBLIC_SEARCH_APP_ID && process.env.NEXT_PUBLIC_SEARCH_ONLY_API_KEY){
    searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_SEARCH_APP_ID,
    process.env.NEXT_PUBLIC_SEARCH_ONLY_API_KEY,
  );
  
   }
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
    if (isBottom && data?.consultancies?.pageInfo?.hasNextPage && data?.consultancies?.pageInfo?.endCursor) {
      setIsBottom(false);
      console.log(2222)
      const fetch = fetchMore({
       variables: {
         cursor: data?.consultancies?.pageInfo?.endCursor,
         limit: 20,
       },
       updateQuery: (prevResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult.consultancies?.edges;
        const pageInfo = fetchMoreResult.consultancies?.pageInfo;
        return newEdges?.length
          ? {
            consultancies: {
                __typename: prevResult.consultancies?.__typename,
                edges: [... prevResult.consultancies?.edges || [], ...newEdges],
                pageInfo,
              },
            }
          : prevResult;
      },
      }
      )
      
      
      fetch.then((res) => {
       
        console.log(res)
      })
      
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
      <Container css={{ py: 20, maxWidth:'100%', m: 0,px:0,zIndex:100, position: 'fixed', top: 75, left: 0, right:0, w: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: "$accents3"}}>
        {searchClient && (<div style={{ display:'flex',maxWidth: '960px', width:'960px' }}><InstantSearch searchClient={searchClient} indexName="consulteverything.com">
          <Search/>
    </InstantSearch></div>)}
    </Container>
    <Container css={{ mt: 200,  mw: 960,}}>
        <Text h2>Most recently requested:</Text>
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 1,
            750: 2,
            1200: 2,
            1400: 2,
            2000: 2,
          }}
        >
          <Masonry columnsCount={2} gutter="12px">
            {data?.consultancies && data.consultancies.edges?.map((consultancy)=>{
                return (<ConsultancyCard key={consultancy?.node?.id} consultancy={consultancy?.node}/>)
            })}
            {/* Children */}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
      <BackToTopButton/>
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
