import React, { useState } from "react";
import axios from 'axios';
import { Select, SelectItem, Button } from "@carbon/react";
import { Book } from "../types/BookType";
import './Styles.scss';
import { toast } from "react-toastify";

type SelectOptionProps = {
    currentBook: Book
}

export const SelectOptionComponent: React.FC<SelectOptionProps> = ({ currentBook }: SelectOptionProps) => {

    const [value, setValue] = useState('Quero Ler');

    const handleOption = async() => {
        const newBook = {...currentBook, status: value}
        const res = await axios.put(`http://localhost:3090/book/${newBook._id}`, newBook);
        res.status == 200 ? toast.success('Livro atualizado com sucesso') : toast.error('Não conseguimos atualizar o livro');
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
            <Button 
                size='sm' 
                kind='secondary' 
                onClick={() => handleOption()}
            >
                Atualizar
            </Button>
        </div>
    );
};