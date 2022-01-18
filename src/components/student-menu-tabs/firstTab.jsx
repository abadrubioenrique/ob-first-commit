import React, {useState} from 'react';
import Tagcomponent from '../tagComponent';

const FirstTab = (props) => {
    const [onFilter, setOnFilter] = useState();
    return (
    <div className="FirstTab">
        <Tagcomponent
            options={['HTML&CSS','REACT', 'ANGULAR', 'VUEJS']}
            tagname = 'Tecnologías'
            tags = {props.tags}
            setTags = {props.setTags}
            setOnFilter={setOnFilter}
        ></Tagcomponent>
        <Tagcomponent
            options={['INGLÉS','ESPAÑOL', 'FRANCÉS', 'ALEMÁN']}
            tagname = 'Idiomas'
            tags = {props.languages}
            setTags = {props.setLanguages}
            setOnFilter={setOnFilter}
        ></Tagcomponent>
    </div>
    );
}

export default FirstTab;
