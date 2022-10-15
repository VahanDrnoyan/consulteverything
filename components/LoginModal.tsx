import React, {useRef, useState} from "react";
import { Modal, Input, Row, Checkbox, Button, Text, useInput, FormElement, Grid } from "@nextui-org/react";
import { Mail } from "../components/icons/Mail";
import { signIn } from "next-auth/react";


interface LoginFormValues {
    email: string;
  }
interface Props {
    show: boolean,
     setShow:  React.Dispatch<React.SetStateAction<boolean>>

 }
const LoginModal: React.FC<Props> = ({show, setShow})=> {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const [email, setEmail] = useState('')
  const closeHandler = () => {
    setShow(false)
  };
  const handleInputChange = (e: React.ChangeEvent<FormElement>)=> {
        setEmail(e.target.value)
  }
  const handleFormSubmit = (e:React.FormEvent)=> {
    e.preventDefault()
    signIn("email", { redirect: false, email: email}).then(()=>{
        closeHandler()
     }).catch((error)=>{
        closeHandler()
     })
  }
  return (
    <div>
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
            status="default" 
            fullWidth={true}
            onChange={handleInputChange}
            labelPlaceholder="Email"
            contentLeft={<Mail fill="currentColor" />}
          />
          </Grid>
          <Grid css={{width: '100%'}}>
          <Button color={"gradient"} css={{width: '100%'}} type="submit">
            Send
          </Button>
          </Grid>
          </Grid.Container>
        </Modal.Body>
        </form>
      </Modal>
    </div>
  );
}
export default LoginModal