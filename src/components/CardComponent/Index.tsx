import './Style.scss';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { TrashCan } from '@carbon/icons-react';
import {
    ExpandableTile,
    TileAboveTheFoldContent,
    TileBelowTheFoldContent,
    Dropdown
} from '@carbon/react';

type Books = {
    _id: string
    addOnList: string,
    autor: string,
    note: number,
    status: string,
    title: string
}

export const CardComponent: React.FC = () => {

    const [listBooks, setListBooks] = useState<Books[]>([]);
    const items = ['Quero ler', 'Lendo', 'Lido'];

    useEffect(() => {
        getListBooks();
    }, []);

    const getListBooks = async () => {
        const booksList = await axios.get('http://localhost:3090/book');
        setListBooks(booksList.data);
    }

    const deleteABook = async (id: string) => {
        const successDelete = await axios.delete(`http://localhost:3090/book/${id}`);
        console.log(successDelete);
    }

    return (
        <div className="container-cards">
            {
                listBooks.map(book => (
                    <ExpandableTile
                        tabIndex={0}
                        tileCollapsedIconText="Interact to Expand tile"
                        tileExpandedIconText="Interact to Collapse tile"
                        tileMaxHeight={0}
                        tilePadding={0}
                        style={{
                            width: '30%'
                        }}
                    >
                        <TileAboveTheFoldContent>
                            <h4>{book.title}</h4>
                            <div>
                                <span>{book.autor}</span>
                                <span>Status: <strong>{book.status}</strong></span>
                            </div>

                        </TileAboveTheFoldContent>
                        <TileBelowTheFoldContent>
                            <div className="tile-below">
                                <div style={{ width: '300px', height: '100px' }}>
                                    <Dropdown
                                        ariaLabel="Mudar Status"
                                        id="carbon-dropdown-example"
                                        items={items}
                                        label="Opções de status"
                                        titleText="Mudar Status"
                                        size='sm' />
                                </div>
                                <button
                                    onClick={() => deleteItem(book._id)}
                                >
                                    <TrashCan />
                                </button>
                            </div>
                        </TileBelowTheFoldContent>
                    </ExpandableTile>
                ))
            }
        </div>
    );
}