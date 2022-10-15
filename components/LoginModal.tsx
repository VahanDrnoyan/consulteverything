import React, {useRef, useState} from "react";

import { Modal, Input, Row, Checkbox, Button, Text, useInput } from "@nextui-org/react";
import { Mail } from "../components/icons/Mail";


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
  
  const closeHandler = () => {
    setShow(false)
  };

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
            <Text b size={18}>
            We will send the sign in link to your email.
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<Mail fill="currentColor" />}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button>
            Send
          </Button>
        </Modal.Footer>

      </Modal>
    </div>
  );
}
export default LoginModal