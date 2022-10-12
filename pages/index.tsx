import type {NextPage} from 'next'
import Head from 'next/head'
import {Captcha} from 'primereact/captcha';
import styles from '../styles/Home.module.css'
import React, {useState, useRef, useEffect} from 'react';
import {Dialog} from 'primereact/dialog';
import { useFormik, FormikErrors } from 'formik';
import {Button} from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import {useRouter} from "next/router";
import Link from 'next/link'
import {Toast, ToastProps} from 'primereact/toast';
import Image from 'next/image'
import heroPic from "../public/galaxy.jpeg"
import Logo from "../components/Logo";
import LoginModal from "../components/LoginModal";
const Home = () => {
    const router = useRouter();
   const [showModal, setShowModal] = useState(false);

    const endBlock = useRef<HTMLDivElement | null>(null)
     const toast = useRef<Toast>(null)
    useEffect(()=>{
     if(router.query.loginRequired === 'true'){
         if(toast && toast.current) {
             toast.current.show({severity: 'warn', summary: 'Warning!', detail: 'You should be logged in to perform this action.', sticky: true});
         }
    }
    },[])

    const handleScrolltobottom = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (endBlock && endBlock.current) {
            endBlock.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
        }
    }
    const showModalhandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setShowModal(true);
    }

    return (
        <div>
            <Head>
                <title>Consult Everything | Home</title>
                <meta name="description" content="Someone in the world is ready to provide the
                            necessary and highly qualified answers to all of your questions!"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Toast ref={toast} className="absolute z-1"></Toast>
            <div className="relative grid grid-nogutter surface-0 min-h-screen text-800">
                <Image className={"w-full h-full " + styles.objectCover}
        src={heroPic} layout="fill"></Image>
                <div className="relative w-full text-center md:text-left flex align-items-center  justify-content-center">
                    <section className="flex flex-column align-items-center">
                        <Logo  color="text-white"/>
                        <div className=" p-2 text-2xl text-white font-normal mt-6">Push your boundaries to
                            horizons!
                        </div>
                        <div className="text-right mt-2  w-full"
                        ><Link href="/consultancies/search"><Button label="Browse consultancies" type="button" className="min-w-full mr-3 p-button-outlined text-white"/></Link>

                        </div>
                        <Button icon="pi pi-arrow-down" onClick={handleScrolltobottom}
                                className="mt-4 text-white-alpha-70 align-self-center p-button-rounded  p-button-primary p-button-icon-only p-button-outlined"/>
                    </section>
                </div>
            </div>
            <div className="surface-200 text-left p-4 md:p-6 lg:p-8">
                <div className="grid">
                    <div className={styles.extra_s_12 + " col md:col-6 lg:col-6 sm:col-12 "}>
                        <div className="text-900 font-bold text-xl mb-2"><i className="pi pi-home text-xl pr-2 "></i>Our
                            mission
                        </div>
                        <div className="text-700 text-m mb-5"><p>Are you a specialist or a beginner seeking knowledge
                            development in your field of activity?</p>
                            <p>Are you in need of consulting in various institutions such as embassies, universities,
                                medical and
                                municipal companies in rather overloaded situations?
                            </p>
                            <p>In this ever-changing world, it can be rather
                                time-consuming and tiresome.
                            </p>
                            <div className="text-700"><b>But not anymore!</b></div>

                        </div>
                    </div>
                    <div className="col md:col-6 lg:col-6 sm:col-12 ">

                        <div className="text-900 font-bold text-xl mb-2"><i
                            className="pi pi-arrow-right text-xl pr-2 "></i>Start solving your everyday problems...
                        </div>
                        <div className="text-700 text-m mb-5">
                            <p>This platform is designed to receive and provide consulting services for beginners and
                                professionals
                                from around the world.</p>
                            <p>It appears to be a boundless consulting company with constantly
                                growing information stream... </p>
                            <p>So don’t hesitate to take a chance and join the community.</p></div>
                        <div className="text-right">
                            <Button label="Enter with email" onClick={showModalhandler}
                                    className="font-bold px-3  white-space-nowrap mr-2"/>
                        </div>

                    </div>
                </div>
            </div>
            <br/>
            <div className="surface-0 text-center">
                <div className="p-4 md:p-6 lg:p-8">
                    <div className="mb-8 font-bold text-2xl">
                        <span className="text-700">Consult Everything provides the following features: </span>
                    </div>
                    <div className="grid">
                        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{borderRadius: '10px'}}>
                <i className="pi pi-list text-4xl text-blue-500"></i>
            </span>
                            <div className="text-900 mb-3 font-medium">Custom form creation</div>
                            <span className="text-700 text-sm line-height-3">To make the communication process more accurate and productive the platform enables you to create and fill a custom form.</span>
                        </div>
                        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{borderRadius: '10px'}}>
                <i className="pi pi-video text-4xl text-blue-500"></i>
            </span>
                            <div className="text-900 mb-3 font-medium">Video call consulting</div>
                            <span className="text-700 text-sm line-height-3">Contact the experts in person and ask your questions. This approach makes the communication more dynamic and productive and contributes to building strong business relationships.</span>
                        </div>
                        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{borderRadius: '10px'}}>
                <i className="pi pi-dollar text-4xl text-blue-500"></i>
            </span>
                            <div className="text-900 mb-3 font-medium">Get paid for info</div>
                            <span className="text-700 text-sm line-height-3">Our subscribers are enabled to establish the fee for their work considering a range of factors, such as time, difficulty, etc.</span>
                        </div>
                        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{borderRadius: '10px'}}>
                <i className="pi pi-users text-4xl text-blue-500"></i>
            </span>
                            <div className="text-900 mb-3 font-medium">Consultancy transcription recording</div>
                            <span className="text-700 text-sm line-height-3">Your live discussion will be recoded so later it will be available as a reference. Come back at any time to refresh your memory, sort out and highlight the key points of the consultancy.</span>
                        </div>
                        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{borderRadius: '10px'}}>
                <i className="pi pi-calendar-times text-4xl text-blue-500"></i>
            </span>
                            <div className="text-900 mb-3 font-medium">Time negotiations</div>
                            <span className="text-700 text-sm line-height-3">The E-mail notifications and calendar inserted into the website to help you plan and implement your arrangements and online meetings.</span>
                        </div>
                        <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{borderRadius: '10px'}}>
                <i className="pi pi-external-link text-4xl text-blue-500"></i>
            </span>
                            <div className="text-900 mb-3 font-medium">Sharable consultancy</div>
                            <span className="text-700 text-sm line-height-3">Get the shareable link of your form and place it on your social media to engage more requests for your consulting services.
Turn free social traffic into a consistent source of income!
</span>
                        </div>
                    </div>
                </div>
            </div>

            <footer ref={endBlock} className="text-center py-3">
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by &copy;consulteverything.com
                </a>
            </footer>
            <LoginModal show={showModal} setShow={setShowModal}/>
        </div>
    )
}
Home.auth = {
    role: 'guest'
}
export default Home
