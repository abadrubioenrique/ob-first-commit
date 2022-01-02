import React, {useState} from 'react';

const Tagcomponent = () => {
    const [tags, setTags] = useState([]);
    const [focus, setFocus] = useState(false);
  
    //Añadir etiquetas
    const onChangeHandler = (event) => {
        const selectedOptions = event.currentTarget.selectedOptions;
        const newTags = [];
        for (let i = 0; i < selectedOptions.length; i++) {
            newTags.push(selectedOptions[i].value);
        }
        setTags(newTags);
        console.log(newTags)
    };

    //Resetear Valores
    function clearTags(){
        setTags([]);
        setFocus(false);
    }

    return (
        <div className='tags-main'>
            <i className="bi bi-chevron-down tags"></i>
            <label className='credentials '>Etiquetas</label>
            <input onClick={() => setFocus((f) => !f)} className='input-text' type='text' placeholder='Escribe para buscar...'/>
            {focus ? 
            (<div className="container">
                <select multiple size={3} onChange={onChangeHandler} className="select">
                    <option value="HTML&CSS">HTML&CSS</option>
                    <option value="REACT">REACT</option>
                    <option value="ANGULAR">ANGULAR</option>
                </select>
            </div>) 
                : null
                }
                <div>
            {tags &&
                tags.map((tag, index) => 
                <p id={tag} className="selected_tags">{tag}
                    <svg id={tag + "_closed"}  className="delete_tag bi bi-x-lg" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </p>
                )}
            </div>
            </div>
    );
}

export default Tagcomponent;
