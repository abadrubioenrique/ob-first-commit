import React, {useState} from 'react';
import TagComponentAvanced from '../derivados/tags/tagComponent';


const FirstTab = (props) => {
    const [onFilter, setOnFilter] = useState();
    return (
    <div className="FirstTab">
        <TagComponentAvanced
            options={['HTML&CSS','REACT', 'ANGULAR', 'VUEJS']}
            suboptions={['INIC.','INTER.','AVAN.']}
            tagname = 'Tecnologías'
            tags = {props.tags}
            setTags = {props.setTags}
        ></TagComponentAvanced>
        <TagComponentAvanced
            options={['INGLÉS','ESPAÑOL', 'FRANCÉS', 'ALEMÁN']}
            suboptions={['BASICO','INTER.','NATIVO']}
            tagname = 'Idiomas'
            tags = {props.languages}
            setTags = {props.setLanguages}
        ></TagComponentAvanced>
    </div>
    );
}

export default FirstTab;
