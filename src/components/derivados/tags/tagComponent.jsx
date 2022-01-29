import React, {useState} from 'react';

const TagComponentAvanced = (props) => {
    const [focus, setFocus] = useState(false);
    const [search, setSearch] = useState('');
    const [tagsOptions, setTagsOptions] = useState(props.options);
    const [tagsSubOptions, setTagsSubOptions] = useState(props.suboptions);
    const [tagsIDs,setTagsIDs] = useState(props.ids)
    //Añadir etiquetas
    const onChangeHandler = (event) => {
        const selectedOptions = event.currentTarget.selectedOptions;
        const newTags = [];
        for (let i = 0; i < selectedOptions.length; i++) {
            newTags.push(selectedOptions[i].value);
        }
        props.setTags(newTags);
    };

    //Eliminar etiquetas
    const removeTag = (index) =>{
        setFocus(false);
        props.setTags(prevState => prevState.filter((tag, i) => i !== index))
    }

    

    //Buscar etiquetas
    const tagsFilter = tagsOptions.filter((tag)=>{
        if(tag.toLocaleLowerCase().includes(search.toLowerCase())){
            return tag;
        }
    });

    // Focus y activarFiltros

    const inputFoucus=()=>{
        setFocus((f)=>!f);
    }


    return (
        <div className='tags-main'>
        
            <i className="bi bi-chevron-down tags"></i>
            <label className='credentials '>{props.tagname}</label>

            <input onClick={inputFoucus} className='input-text' value={search}  onChange={(e)=> setSearch(e.target.value)} type='text' placeholder='Escribe para buscar...'/>
            {focus ? 
            
            (<div className="tag-container">
                <select multiple size={props.length} onChange={onChangeHandler} className="select">
                {tagsFilter.map(opt =>
                <optgroup label={opt} key={opt}> 
                {tagsSubOptions.map((subopt,index) =>
                    <option key={opt+"-" + subopt} value={opt +" "+subopt +" " + index}>{subopt}</option>
                )};
               
                </optgroup>
                )};

                </select>
            </div>) 
                : null
                }
                <div>
            {props.tags &&
                props.tags.map((tag, index) => 
                <p key= {tag} id={tag}  className="selected_tags">{tag.split(' ')[0]}
                    <svg onClick={() => removeTag(index)} id={tag + "_close"}  className="delete_tag bi bi-x-lg" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                    <span>{tag.split(' ')[1]}</span>
                </p>
            )}
            </div>



            </div>
    );
}

export default TagComponentAvanced;
