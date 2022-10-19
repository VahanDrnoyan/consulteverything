import {useSession} from "next-auth/react";

import Head from "next/head";
import React, {useState, useRef, useEffect} from "react";

import LoginModal from "../../../components/LoginModal";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import Link from "next/link";
import ConsultancyCard from "../../../components/ConsultancyCard";
import { Container } from "@nextui-org/react";
import { NextPage } from "next";
type NextPageWithAuth = NextPage & {
    auth?: {
        role: string
    }
};
const Consultancies:NextPageWithAuth = (_props) => {
    const {data: session, status} = useSession()
    const [showModal, setShowModal] = useState(false);
    const [showSearchModal, setShowSearchModal] = useState(false);
    const showModalhandler = () => {
        setShowModal(true)
    }
    const showSearchFormHandler = ()=> {
        setShowSearchModal(true)
    }
    return (
        <div>
            <Head>
                <title>Consult Everything | Consultanices</title>
                <meta name="description" content="Consultancies list"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Container css={{mt: 20}}>
<ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 1200: 3, 1400: 4, 2000: 5}}
            >
               
                <Masonry columnsCount={5} gutter="35px">
                   <ConsultancyCard />
                    <ConsultancyCard />
                     <ConsultancyCard />
                     <ConsultancyCard />
                     <ConsultancyCard />
                     <ConsultancyCard />
                     <ConsultancyCard />
                     <ConsultancyCard />
                     <ConsultancyCard />
                     <ConsultancyCard />
                     <ConsultancyCard />
                     <ConsultancyCard />
                     <ConsultancyCard />
                     <ConsultancyCard />
                     <ConsultancyCard />
                     <ConsultancyCard />
                     <ConsultancyCard />
                     <ConsultancyCard />
                     <ConsultancyCard />
                </Masonry>
            </ResponsiveMasonry>
            </Container>
        </div>
    )
}
Consultancies.auth = {
    role: 'guest'
}
export default Consultancies