import React, {useState, useEffect} from 'react';

const Tagcomponent = () => {
    const [tags, setTags] = useState([]);
    const [focus, setFocus] = useState(false);
    let onRemove = true;

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

    const removeTag = (arr, tag) =>{
        var i = arr.indexOf(tag);
        if(onRemove === true && i !== -1 ){
            arr.splice(i, 1);
            onRemove=false;
        }
        setTags(arr);
        console.log(arr);
    }

    return (
        <div className='tags-main'>
            <i className="bi bi-chevron-down tags"></i>
            <label className='credentials '>Etiquetas</label>
            <input onClick={() => setFocus((f) => !f)} className='input-text' type='text' placeholder='Escribe para buscar...'/>
            {focus ? 
            (<div className="tag-container">
                <select multiple size={3} onChange={onChangeHandler} className="select">
                    <option value="HTML&CSS">HTML&CSS</option>
                    <option value="REACT">REACT</option>
                    <option value="ANGULAR">ANGULAR</option>
                    <option value="VUEJS">VUEJS</option>
                </select>
            </div>) 
                : null
                }
                <div>
            {tags &&
                tags.map((tag) => 
                <p key= {tag} id={tag}  className="selected_tags">{tag}
                    <svg onClick={() => removeTag(tags, tag)} id={tag + "_closed"}  className="delete_tag bi bi-x-lg" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </p>
                )}
            </div>
            </div>
    );
}

export default Tagcomponent;
