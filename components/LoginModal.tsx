import React, {useRef, useState} from "react";
import { Modal, Input, Row, Checkbox, Button, Text, useInput, FormElement, Grid } from "@nextui-org/react";
import { Mail } from "../components/icons/Mail";
import { signIn } from "next-auth/react";
import * as yup from "yup";
const schema = yup.object().shape({
  email: yup.string().email().required(),
});

interface LoginFormValues {
    email: string;
  }
interface Props {
    show: boolean,
     setShow:  React.Dispatch<React.SetStateAction<boolean>>

 }
const LoginModal: React.FC<Props> = ({show, setShow})=> {
  const { value, reset, bindings } = useInput("");
  const [isValitEmail, setIsValidEmail] = useState(false)
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const [email, setEmail] = useState('')
  const closeHandler = () => {
    setShow(false)
  };
  const handleInputChange = (e: React.ChangeEvent<FormElement>)=> {
        
  }
  const validateEmail = (value:string) => {
    schema.validate({ email: value}).then(()=> setIsValidEmail(true)).catch(()=> setIsValidEmail(false));
  };
  const helper = React.useMemo(() => {
   
    if (!value)
      return {
        text: "",
        color: "",
      };
   validateEmail(value);
    if(isValitEmail)  {
      setEmail(value)
    }
    return {
      text: isValitEmail ? "" : "Enter a valid email",
      color: isValitEmail ? "default" : "error",
    };
  }, [value]);
  const handleFormSubmit = (e:React.FormEvent)=> {
    e.preventDefault()

    isValitEmail && signIn("email", { redirect: false, email: email}).then(()=>{
      setEmail('')  
      closeHandler()
        
     }).catch((error)=>{
      setEmail('')
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
          {...bindings}
          clearable
          value={email}
          shadow={false}
          onClearClick={reset}
          status={helper.color as "default" | "error"}
          color={helper.color as "default" | "error"}
          helperColor={helper.color as "default" | "error"}
          helperText={helper.text}
          type="email"
          fullWidth
          labelPlaceholder="Your Email"
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