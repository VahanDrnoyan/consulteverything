import React, {useRef, useState} from "react";
import { Modal, Input, Row, Checkbox, Button, Text, useInput, FormElement, Grid } from "@nextui-org/react";
import { Mail } from "../components/icons/Mail";
import { signIn } from "next-auth/react";
import { useLoginFormValidator } from "../Validators/LoginFormValidator";



interface Props {
    show: boolean,
     setShow:  React.Dispatch<React.SetStateAction<boolean>>

 }
const LoginModal: React.FC<Props> = ({show, setShow})=> {
  const closeHandler = () => {
    setShow(false)
  };
  const [errors, email, onChange, setEmail, helper] = useLoginFormValidator()
  
  const handleFormSubmit = (e:React.FormEvent)=> {
    e.preventDefault()

    !errors && signIn("email", { redirect: false, email: email}).then(()=>{
      setEmail(()=>{
        return ''
      })
      closeHandler()
        
     }).catch((error)=>{
      setEmail(()=>{
        return ''
      })
        closeHandler()
     })
  }
  return (
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={show}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Sign In<br />
            <Text b size={14}>
            We will send the sign in link to you.
            </Text>
          </Text>
        </Modal.Header>
        <form onSubmit={handleFormSubmit}>
        <Modal.Body >
        <Grid.Container css={{minWidth: '100%'}}gap={2}>
      <Grid css={{minWidth: '100%'}}>
          <Input
          clearable
          value={email}
          shadow={false}
          status={helper.color as "default" | "error"}
          color={helper.color as "default" | "error"}
          helperColor={helper.color as "default" | "error"}
          helperText={errors}
          onChange={onChange}
          fullWidth
          labelPlaceholder="Your Email"
          />
          </Grid>
          <Grid css={{width: '100%'}}>
          <Button color={"default"} css={{width: '100%', 'bg': '$accents9'}} type="submit">
            Send
          </Button>
          </Grid>
          </Grid.Container>
        </Modal.Body>
        </form>
      </Modal>
  );
}
export default LoginModal