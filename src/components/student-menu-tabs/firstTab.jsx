import React from 'react';
import Tagcomponent from '../tagComponent';

const FirstTab = () => {
    return (
    <div className="FirstTab">
        <Tagcomponent
            options={['HTML&CSS','REACT', 'ANGULAR', 'VUEJS']}
            tagname = 'Tecnologías'
        ></Tagcomponent>
        <Tagcomponent
            options={['INGLÉS','ESPAÑOL', 'FRANCÉS', 'ALEMÁN']}
            tagname = 'Idiomas'
        ></Tagcomponent>
    </div>
    );
}

export default FirstTab;
