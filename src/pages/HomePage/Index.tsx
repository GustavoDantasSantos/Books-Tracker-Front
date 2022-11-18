import React from 'react';
import { RegisterBookComponent } from '../../components/RegisterBookComponent/Index';
import './Style.scss'

export const HomePage: React.FC = () => {
    return(
        <div className='container'>    
            <div className='container-text-describe'>
                <h2>Book Tracker</h2>
                <p>
                    É seu web aplicativo, feito para amantes de leitura, nele você pode, <strong>Ver livros</strong>, 
                    <strong>Ler Livros</strong>, <strong>Ver todos os livros concluidos</strong>, aproveite o máximo da leitura, com
                    qualidade, se quiser cadastrar um livro novo, clique no botão ao lado direito, ou veja as lista de livros;
                </p>
            </div>
            <div className='container-addbook'>
                <RegisterBookComponent />
            </div>
        </div>
    );
};
