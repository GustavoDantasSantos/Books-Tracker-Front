import './Style.scss';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { TrashCan } from '@carbon/icons-react';
import {
    ExpandableTile,
    TileAboveTheFoldContent,
    TileBelowTheFoldContent,
    Button
} from '@carbon/react';
import { SelectOptionComponent } from './SelectOptionComponent';
import { toast, ToastContainer } from 'react-toastify';
import { Book } from './types/BookType';
import { formateDate } from '../../helpers/utils';
import { NoteTooltipComponent } from './ToolTipComponent/NoteTolltipComponent';
import { CompleteDateTooltipComponent } from './ToolTipComponent/CompleteDateTooltipComponent/Index';

export const CardComponent: React.FC = () => {

    const [listBooks, setListBooks] = useState<Book[]>([]);

    useEffect(() => {
        getListBooks();
    }, [listBooks]);

    const getListBooks = async () => {
        const booksList = await axios.get('http://localhost:3090/book');
        setListBooks(booksList.data);
    }

    const deleteABook = async (id: string) => {
        const successDelete = await axios.delete(`http://localhost:3090/book/${id}`);
        successDelete.status == 200 ? toast.success('Livro deletado com sucesso') : toast.error('Não conseguimos deletar o livro');
    }

    return (
        <div className="container-cards">
            <ToastContainer />
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
                            <div>
                                <div>
                                    <h2 id='book-title'>
                                        {book.title}
                                    </h2>
                                </div>
                                <div className='details-book'>
                                    <div id='note'><NoteTooltipComponent note={book.note} /></div>
                                    <div className='date'>
                                        <p>Data de inclusão: {formateDate(book.addOnList)}</p>
                                        <p className='completedDate'>
                                            <span>Data de termino: </span>
                                            {
                                                book.completionDate !== null ? formateDate(book.completionDate) :
                                                    <CompleteDateTooltipComponent date={book.completionDate} />
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div id='autor-status'>
                                <p>Autor: <strong>{book.autor}</strong></p>
                                <p>Status: <strong>{book.status}</strong></p>
                            </div>
                        </TileAboveTheFoldContent>
                        <TileBelowTheFoldContent>
                            <div className="tile-below">
                                <SelectOptionComponent currentBook={book} />
                                <Button
                                    size='sm'
                                    kind='ghost'
                                    onClick={() => deleteABook(book._id)}
                                >
                                    <TrashCan />
                                </Button>
                            </div>
                        </TileBelowTheFoldContent>
                    </ExpandableTile>
                ))
            }
        </div>
    );
}