import React, { useState } from "react";
import axios from 'axios';
import { FormGroup, Stack, TextInput, Button } from '@carbon/react';
import { Toast } from "../Toast/Index";

type FormRegisterProps = {
    handleModalKind: (bol: Boolean) => {};
}

export const FormRegister: React.FC<FormRegisterProps> = ({ handleModalKind }: FormRegisterProps) => {
    const [title, setTitle] = useState('');
    const [autor, setAutor] = useState('');

    const register = async (title: string, autor: string) => {
        const book = await axios.post('http://localhost:3090/book', { title, autor });
        if(book.status) {
            handleModalKind(true);
        } else {
            handleModalKind(false);
        }
    }

    return (
        <FormGroup
            legendId="form-group-1"
        >
            <Stack gap={7}>
                <TextInput
                    id="one"
                    labelText="Selecionar capa"
                />
                <TextInput
                    id="two"
                    labelText="Titulo"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextInput
                    id="tree"
                    labelText="Autor"
                    onChange={(e) => setAutor(e.target.value)}
                />
                <Button
                    onClick={() => register(title, autor)}
                >
                    Submit
                </Button>
            </Stack>
        </FormGroup>
    );
};