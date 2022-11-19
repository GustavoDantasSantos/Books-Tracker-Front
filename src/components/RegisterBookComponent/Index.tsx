import React, { useState } from "react"

import { ModalWrapper } from '@carbon/react';
import { FormRegister } from "./Form/Index";
import './Styles.scss';

export const RegisterBookComponent: React.FC = () => {

    return (
        <ModalWrapper
            buttonTriggerText="Cadastrar Livro"
            modalHeading="Cadastrar livro"
            size='lg'
        >
            <FormRegister />
        </ModalWrapper>
    );
};
