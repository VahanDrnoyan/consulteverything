import {useSession} from "next-auth/react";

import {Menubar,} from 'primereact/menubar';
import {NextPage} from "next";
import Head from "next/head";
import React, {useState, useRef, useEffect} from "react";
import { Messages } from 'primereact/messages';
import { InputText } from 'primereact/inputtext';

import Logo from "../../../components/Logo"
import {Button} from "primereact/button";
import LoginModal from "../../../components/LoginModal";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ConsultancyCard from "../../../components/ConsultancyCard";
import SearchForm from "../../../components/SearchForm";
import {MenuItem, MenuItemCommandParams} from "primereact/menuitem";

const Consultancies: NextPage = () => {
    const {data: session} = useSession()
    const [showModal, setShowModal] = useState(false);
    const [showSearchModal, setShowSearchModal] = useState(false);
    const message = useRef<Messages>(null)
    const showModalhandler = () => {
        setShowModal(true)
    }
    const items: MenuItem[] =
[
    {
        label: 'Blog',
        className: 'text-white',
        command: (event:  MenuItemCommandParams) => {
        }
    },
    {
        label: 'FAQ',
        className: 'text-white',
        command: (event:  MenuItemCommandParams) => {

        }
    }
];
    const showSearchFormHandler = ()=> {
        setShowSearchModal(true)
    }
    useEffect(() => {
        if(message && message.current){
            message.current.show({closable:false, sticky:true,severity: 'info', summary: "We welcome you on our board! Create as much consultancies as you feel comfortable to provide, its free! Let\'s get started by logging in."});
        }
        return () => {

        };
    }, []);
    const menuEnd = () => {
        return (
            <>
            <Button icon="pi pi-search" onClick={showSearchFormHandler} className=" mr-2 p-button-outlined"/>
                {session && session?.user ? (<span>Go to dashboard</span>) :
                    (<Button label="Create consultancy" onClick={showModalhandler}
                             className="font-bold px-3 p-button-outlined bg  white-space-nowrap mr-2"/>)
                }</>
        )
    }
    // session is always non-null inside this page, all the way down the React tree.
    return (
        <div>
            <Head>
                <title>Consult Everything | Consultanices</title>
                <meta name="description" content="Consultancies list"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Menubar className=" border-round-xs"
                     model={items}
                start={(<div className="flex w-full align-items-center"><Logo color="text-black"/></div>)}
                end={menuEnd }/>
            <div className="lg:pt-2 md:pt-2  pt-2p-4 md:p-6 lg:p-8">
                <Messages ref={message}></Messages>

<ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 1200: 3, 1400: 5}}
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
                </Masonry>
            </ResponsiveMasonry>
                </div>
            {session && session.user?'':(<LoginModal show={showModal} setShow={setShowModal}/>)}
            <SearchForm show={showSearchModal} setShow={setShowSearchModal}/>
        </div>
    )
}
export default Consultancies