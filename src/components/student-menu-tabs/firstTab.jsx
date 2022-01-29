import React from 'react';
import TagComponentAvanced from '../derivados/tags/tagComponent';


const FirstTab = (props) => {

    
    return (
    <div className="FirstTab">
        <TagComponentAvanced
            options={props.tecOptions}
            suboptions={props.tecSubOptions}
            tagname = 'Tecnologías'
            tags = {props.tags}
            setTags = {props.setTags}
            length = "4"
        ></TagComponentAvanced>
        <TagComponentAvanced
            options={props.lenguageOptions}
            suboptions={props.lenguageSubOptions}
            tagname = 'Idiomas'
            tags = {props.languages}
            setTags = {props.setLanguages}
            length="5"
        ></TagComponentAvanced>
    </div>
    );
}

export default FirstTab;
