import React, { useState } from "react"

import { ModalWrapper } from '@carbon/react';
import { FormRegister } from "./Form/Index";

export const RegisterBookComponent: React.FC = () => {
    const [modalSuccess, setModalSuccess] = useState(false);

    const handleModalKind = (bol: boolean) => {
        console.log(bol);
        setModalSuccess(bol);
    }

    return (
        <ModalWrapper
            buttonTriggerText="Cadastrar Livro"
            modalHeading="Cadastrar livro"
            size='lg'
            passiveModal
        >
            <p>{modalSuccess}</p>
            <FormRegister handleModalKind={() => handleModalKind}/>
        </ModalWrapper>
    );
};
