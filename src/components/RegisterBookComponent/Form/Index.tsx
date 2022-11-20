import React, { useState } from "react";
import axios from 'axios';
import { FormGroup, Stack, TextInput, Button } from '@carbon/react';
import { toast } from "react-toastify";
import './Style.scss'

export const FormRegister: React.FC = () => {
    const [title, setTitle] = useState('');
    const [autor, setAutor] = useState('');

    const register = async (title: string, autor: string) => {
        const book = await axios.post('http://localhost:3090/book', { title, autor });
        book.status == 200 ? toast.success('Livro Cadastrado com sucesso') : toast.error('Não conseguimos salvar seu livro');
        setTitle('');
        setAutor('');
    }

    return (
        <FormGroup
            legendId="form-group-1"
            className='form-style'
        >
            <Stack gap={7}>
                <TextInput
                    id="one"
                    labelText="Titulo"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextInput
                    id="two"
                    labelText="Autor"
                    onChange={(e) => setAutor(e.target.value)}
                />
                <Button
                    onClick={() => register(title, autor)}
                >
                    Cadastrar
                </Button>
            </Stack>
        </FormGroup>
    );
};