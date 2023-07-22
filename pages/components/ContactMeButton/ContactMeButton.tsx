import React, {FunctionComponent} from 'react';
import Button from "@mui/material/Button";

type Props = {
    variant: string
}

const ContactMeButton: FunctionComponent<Props> = ({variant}: Props) => {
    return (
        <Button className={`bg-transparent text-${variant} border-${variant} border border-solid rounded-none px-6`}>Contact
            Me</Button>
    );
};

export default ContactMeButton;
