import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/53883371?s=460&u=0a08333623e5c50ddf49c362a76133bd341ec710&v=4" alt="Felipe"/>   
            <div>                    
            <strong>Felipe Ribeiro</strong>
            <span>Química</span>
            </div> 
        </header> 
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 
                pessoas já passaram por uma das minhas explosões.
             </p> 

        <footer>
            <p>Preço/hora
                <strong>R$ 100,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>   
    );
}

export default TeacherItem