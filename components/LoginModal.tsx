import {InputText} from "primereact/inputtext";
import {classNames} from "primereact/utils";
import {Button} from "primereact/button";
import {Captcha} from "primereact/captcha";
import {Dialog} from "primereact/dialog";
import React, {useRef, useState} from "react";
import {FormikErrors, useFormik} from "formik";
import { signIn } from "next-auth/react"
import { Messages } from 'primereact/messages';
interface LoginFormValues {
   email: string;
 }
 interface Props {
    show: boolean,
     setShow:  React.Dispatch<React.SetStateAction<boolean>>

 }

const LoginModal: React.FC<Props> = ({show, setShow})=> {

    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const messages = useRef<Messages>(null)
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
            signIn("email", { redirect: false, email: formik.values.email}).then(()=>{
               if(messages && messages.current){
                    messages.current.show({ severity: 'success', summary: 'Please sheck your email.' });
               }
                    
                const timeout = setTimeout(()=> {
            
                    setShowMessage(false)
                }, 3000)
            }).catch((error)=>{
                if(messages && messages.current){
                    messages.current.show({ severity: 'error', summary: error });
               }
                const timeout = setTimeout(()=> {
                    setShowMessage(false)
                }, 3000)
            })
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
        setShow(false);
    }

    return (
        <Dialog onHide={hideModalhandler} visible={show} dismissableMask={true}
                     closable={false} draggable={false}>
                        <Messages ref={messages}></Messages>
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
    )
}
 export default LoginModal