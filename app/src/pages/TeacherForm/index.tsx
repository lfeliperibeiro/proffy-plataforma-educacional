import React from 'react'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css'

function TeacherForm(){
    return(
        <div id="page-teacher-form" className="container">
        <PageHeader 
          title="Que incrivel que você quer dar aulas." 
          description="O primeiro passo é preenscher esse formmulário de inscrição"
          />

          <main>
            <fieldset>
              <legend>Seus daddos</legend>
              
              <Input name="name" label="Nome Completo"/>
              <Input name="avatar" label="Avatar"/>
              <Input name="whatsapp" label="Whatsapp"/>
              <Textarea name="bio" label="Biografia"/>
           </fieldset>

           <fieldset>
              <legend>Sobre a Aula</legend>
              
              <Select 
                name="subject" 
                label="Matéria"
                options={[
                  {value: 'Artes', label: 'Artes'},
                  {value: 'Biologia', label: 'Biologia'},
                  {value: 'Ciências', label: 'Ciências'},
                  {value: 'Física', label: 'Física'},
                  {value: 'Química', label: 'Artes'},
                  {value: 'Geografia', label: 'Geografia'},
                  {value: 'História', label: 'História'},
                  {value: 'Matemática', label: 'Matemática'},
                  {value: 'Português', label: 'Português'}
                ]}
                />
              <Input name="cost" label="Custo da sua hora por aula"/>
             
           </fieldset>

           <fieldset>
             <legend>Horários Disponíveis
             <button type="button">+ Novo Horário</button>
             </legend>

             <div className="schedule-item">
             <Select 
                name="week_day" 
                label="Dia da semana"
                options={[
                  {value: '0', label: 'Domingo'},  
                  {value: '1', label: 'Segunda-feira'},
                  {value: '2', label: 'Terça-feira'},
                  {value: '3', label: 'Quarta-feira'},
                  {value: '4', label: 'Quinta-feira'},
                  {value: '5', label: 'Sexta-feira'},
                  {value: '6', label: 'Sábado'}
                                  
                ]}
                /> 

                <Input name="from" label="Das" type="time"/>
                <Input name="to" label="Até" type="time"/>
             </div>
            
           </fieldset>

           <footer>
             <p>
               <img src={warningIcon} alt="Aviso importante"/>
               Importante! <br />
               Preencha todos os dados
             </p>
             <button type="button">Salvar Cadastro</button>
           </footer>
          </main>
      </div>
    )
}

export default TeacherForm