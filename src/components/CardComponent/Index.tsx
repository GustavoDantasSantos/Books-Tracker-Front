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
import { SelectOptionComponent } from './SelectOptionComponent';
import { Book } from './types/BookType';

export const CardComponent: React.FC = () => {

    const [listBooks, setListBooks] = useState<Book[]>([]);

    useEffect(() => {
        getListBooks();
    }, []);

    const getListBooks = async () => {
        const booksList = await axios.get('http://localhost:3090/book');
        setListBooks(booksList.data);
    }

    const deleteABook = async (id: string) => {
        const successDelete = await axios.delete(`http://localhost:3090/book/${id}`);
    }

    return (
        <div className="container-cards">
            {
                listBooks.map(book => (
                    <ExpandableTile
                        className='ExpandableTile'
                        tabIndex={0}
                        tileCollapsedIconText="Interact to Expand tile"
                        tileExpandedIconText="Interact to Collapse tile"
                        tileMaxHeight={0}
                        tilePadding={0}
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
                                <SelectOptionComponent currentBook={book} />
                                <button
                                    onClick={() => deleteABook(book._id)}
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