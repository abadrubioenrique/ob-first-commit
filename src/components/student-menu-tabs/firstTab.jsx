import React, {useState} from 'react';
import { putCandidateTecAndLanguage } from '../../services/axios.CRUD.service';
import TagComponentAvanced from '../derivados/tags/tagComponent';


const FirstTab = (props) => {

    const handleSubmit = e => {
  
    const body = {
        tecnologias: {
            "1": {
                nivel: 1
            },
            "": {
                nivel: 1
            },
        }
    }
    console.log(body)

        putCandidateTecAndLanguage(props.token,props.id,body).then(() => {
            window.location.reload();
        })

    }

    return (
    <div className="FirstTab">
        <TagComponentAvanced
            options={props.tecOptions}
            id={props.tecnologiasID}
            suboptions={props.tecSubOptions}
            tagname = 'Tecnologías'
            tags = {props.tags}
            setTags = {props.setTags}
            length = "4"
        ></TagComponentAvanced>
        <TagComponentAvanced
            options={props.lenguageOptions}
            id={props.languagesID}
            suboptions={props.lenguageSubOptions}
            tagname = 'Idiomas'
            tags = {props.languages}
            setTags = {props.setLanguages}
            length="5"
        ></TagComponentAvanced>
         {props.cambios ?
                ( <div className='cambios-tec'>
                    <p>Se han detectado cambios</p>
                    <button onClick={handleSubmit} className='btn-upload'>Actualizar
                    <i className="bi bi-arrow-clockwise"></i>
                    </button>
                </div>)
                :
                    null
                }
    </div>
    );
}

export default FirstTab;
