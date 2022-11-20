import React, { useState } from "react";
import axios from 'axios';
import {UpdateNow} from '@carbon/icons-react'
import { Select, SelectItem, Button, TextInput } from "@carbon/react";
import { Book } from "../types/BookType";
import './Styles.scss';
import { toast } from "react-toastify";

type SelectOptionProps = {
    currentBook: Book
}

export const SelectOptionComponent: React.FC<SelectOptionProps> = ({ currentBook }: SelectOptionProps) => {

    const [value, setValue] = useState('Quero Ler');
    const [note, setNote] = useState(0);

    const handleOption = async () => {
        if (value == 'Lendo' || value == 'Quero Ler') {
            const newBook = { ...currentBook, status: value }
            const res = await axios.put(`http://localhost:3090/book/${newBook._id}`, newBook);
            res.status == 200 ? toast.success('Livro atualizado com sucesso') : toast.error('Não conseguimos atualizar o livro');
            setValue('')
        } else {
            const newBook = {
                ...currentBook,
                status: value,
                note: note,
                completionDate: new Date()
            }
            const res = await axios.put(`http://localhost:3090/book/${newBook._id}`, newBook);
            res.status == 200 ? toast.success('Livro atualizado com sucesso') : toast.error('Não conseguimos atualizar o livro');
            setValue('')
            setNote('')
        }
    };

    return (
        <div className="container">
            <Select
                defaultValue="placeholder-item"
                id="select-1"
                invalidText="A valid value is required"
                labelText="Select"
                onChange={(e) => setValue(e.target.value)}
            >
                <SelectItem
                    text="Escolha uma opção"
                />
                <SelectItem
                    text="Quero Ler"
                    value="Quero Ler"
                />
                <SelectItem
                    text="Lendo"
                    value="Lendo"
                />
                <SelectItem
                    text="Lido"
                    value="Lido"
                />
            </Select>
            {
                value == 'Lido' ?
                    <>
                        <TextInput
                            id="test2"
                            invalidText="A valid value is required"
                            labelText="Dê a sua nota"
                            placeholder="Nota"
                            onChange={(e) => setNote(e.target.value)}
                        />
                        <Button
                        className='btnStyle'
                            size='sm'
                            kind='ghost'
                            onClick={() => handleOption()}
                        >
                            <UpdateNow />
                        </Button>
                    </>
                    :
                    <Button
                        size='sm'
                        kind='secondary'
                        onClick={() => handleOption()}
                    >
                        Atualizar
                    </Button>
            }
        </div>
    );
};