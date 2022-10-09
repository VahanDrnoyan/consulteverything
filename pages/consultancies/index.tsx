import {useSession} from "next-auth/react";

import {Menubar} from 'primereact/menubar';
import {NextPage} from "next";
import Head from "next/head";
import React, {useState, useRef, useEffect} from "react";
import { Messages } from 'primereact/messages';

import Logo from "../../components/Logo"
import {Button} from "primereact/button";
import LoginModal from "../../components/LoginModal";

const Consultancies: NextPage = () => {
    const {data: session} = useSession()
    const [showModal, setShowModal] = useState(false);
    const message = useRef<Messages>(null)
    const showModalhandler = () => {
        setShowModal(true)
    }
    useEffect(() => {
        if(message && message.current){
            message.current.show({sticky:true,severity: 'info', summary: "We welcome you on our board! Create as much consultancies as you feel comfortable to provide, its free! Let\'s get started by logging in."});
        }
        return () => {

        };
    }, []);

    // session is always non-null inside this page, all the way down the React tree.
    return (
        <div>
            <Head>
                <title>Consult Everything | Consultanices</title>
                <meta name="description" content="Consultancies list"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Menubar
                start={<Logo/>}
                end={session && session.user ?(<span>Go to dashboard</span>): (<Button label="Enter with email" onClick={showModalhandler}
                             className="font-bold px-3  white-space-nowrap mr-2"/>)}/>
            <div className="p-8 pt-2">
                <Messages ref={message}></Messages>
            </div>
            {session && session.user?'':(<LoginModal show={showModal} setShow={setShowModal}/>)}

        </div>
    )
}
export default Consultancies