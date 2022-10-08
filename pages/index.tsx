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
import {Toast, ToastProps} from 'primereact/toast';
import Image from 'next/image'
import heroPic from "../public/galaxy.jpeg"
interface LoginFormValues {
   email: string;
 }
const Home: NextPage = () => {
    const router = useRouter();
    const [showLoginRequiredMessage, setShowLoginRequiredMessage] = useState(false)
    const [showModal, setShowModal] = useState(false);
     const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
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
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate: (data) => {
            let errors :FormikErrors<LoginFormValues> = {};

            if (!data.email) {
                errors.email = 'Email is required.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Invalid email address.';
            }

            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);
            setShowMessage(true);
            //send email link
            console.log(formik.values.email)
            formik.resetForm();
        }
    });
    const isFormFieldValid = (name :string) => !!(formik.touched[name as keyof LoginFormValues] && formik.errors[ name as keyof LoginFormValues]);
    const getFormErrorMessage = (name:string) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name as keyof LoginFormValues]}</small>;
    };
    const showCaptchaResponse = (response: string) => {
//call to a backend to verify against recaptcha with private key
    }
    const hideModalhandler = () => {
        setShowModal(false);
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
            <Toast ref={toast}></Toast>
            <div className="relative grid grid-nogutter surface-0 min-h-screen text-800">
                <Image className="w-full h-full"
        src={heroPic} layout="fill"></Image>
                <div className="relative col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <section className="flex align-content-start flex-column">
                        <span className="bg-white-alpha-40 p-2 block text-900 text-5xl font-bold mb-2">consulteverything<i
                            className="pi pi-circle text-3xl"></i>com</span>
                        <div className="bg-white-alpha-40 p-2 text-l text-900 font-normal mb-2">Push your boundaries to
                            horizons!
                        </div>
                        <div className="text-right mt-8 bg-white-alpha-40 p-2"
                        ><Button label="Browse consultancies" type="button" className="min-w-full mr-3"/>

                        </div>
                        <Button icon="pi pi-arrow-down" onClick={handleScrolltobottom}
                                className="mt-4 text-white-alpha-70 align-self-center p-button-rounded  p-button-primary p-button-icon-only p-button-text"/>
                    </section>
                </div>
                x
            </div>
            <div className="surface-200 text-left p-6">
                <div className="grid">
                    <div className="col">
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
                    <div className="col">

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
                <div className="p-6">
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
            <Dialog onHide={hideModalhandler} visible={showModal}
                    style={{width: '24vw'}}>
                <h2 className="text-center text-600 text-primary-600 text-xl mt-0 pt-0 mb-2">Sign In</h2>
                <div className="text-sm mb-4 text-500 text-center">We will send the sign in link to your email.</div>
                <form onSubmit={formik.handleSubmit} className="p-fluid">
                <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={ classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                <label htmlFor="email" className={'text-500 '+ classNames({ 'p-error': isFormFieldValid('email') })}>Your email*</label>
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
                     <Button type="submit" label="Send" className="mt-2" />
                    </form>
                <div className="flex align-items-center justify-content-center mt-4"><Captcha siteKey="YOUR_SITE_KEY"  onResponse={showCaptchaResponse}></Captcha></div>
            </Dialog>
        </div>
    )
}

export default Home
