import axiosConfig from '../utils/config/axios.config';

// Obtener tecnologías
export const getTecnologias = async (token, setTecnologiasOptions) => {
    const headers = {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token).token}`,
    };
    return await axiosConfig
        .get('api/tecnologias', { headers })
        .then((response) => {
            if (response.data) {
                const res =response.data.data.data;
                setTecnologiasOptions(res.map(opt=>opt.nombre))
            }
            return response.data;
        });
};

export const getTecnologiasPure = async (token, setTecnologiasPure) => {
    const headers = {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token).token}`,
    };
    return await axiosConfig
        .get('api/tecnologias', { headers })
        .then((response) => {
            if (response.data) {
                const res =response.data.data.data;
                setTecnologiasPure(res);
            }
            return response.data;
        });
};

// Obtener idiomas
export const getIdiomas = async (token, setLanguagesOptions) => {
    const headers = {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token).token}`,
    };
    return await axiosConfig
        .get('api/idiomas', { headers })
        .then((response) => {
            if (response.data) {
                const res =response.data.data.data;
                setLanguagesOptions(res.map(opt=>opt.nombre))
            }
            return response.data;
        });
};

export const getIdiomasPure = async (token, setLanguagesPure) => {
    const headers = {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token).token}`,
    };
    return await axiosConfig
        .get('api/idiomas', { headers })
        .then((response) => {
            if (response.data) {
                const res =response.data.data.data;
                setLanguagesPure(res)
            }
            return response.data;
        });
};


// Obtener candidatos
export const getCandidatesInfo = async(token, setCandidates, candidates, setCandidatesFilter,setTotalCandidates, page) => {
    const headers = {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token).token}`,
    };
    return await axiosConfig
        .get(`api/candidatos?page=${page}`, { headers })
        .then((response) => {
            if (response.data) {
                setCandidates(response.data.data.data);
                setCandidatesFilter(candidates);
                const res = response.data.data.meta.total;
                setTotalCandidates(res);
            }

            return response.data;
        });
};

// Obtener candidato por ID
export const getCandidateById = async (token,id,setCandidate) => {
    const headers = {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token).token}`,
    };
    return await axiosConfig
        .get(`api/candidatos/${id}`, { headers })
        .then((response) => {
            if (response.data) {
               setCandidate(response.data.data)
            }

            return response.data;
        });
};



//Crear candidato
export const postCandidate= (token,body) => {
    const headers = {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token).token}`,
    };

    return axiosConfig.post('api/candidatos', 
    
    body

    ,{ headers }) ; 

};

//Actualizar candidato candidato
export const putCandidate= (token,id,name,country,city,phonenumber,mail,remote,transfer,linkedin,status) => {
    const headers = {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token).token}`,
    };

    return axiosConfig.put(`api/candidatos/${id}`, 
    { 
        nombreCompleto: name,
        pais:country,
        ciudad:city,
        telefono: phonenumber, 
        email:mail,
        remoto:remote,
        disponibilidadTraslado:transfer,
        enlaceLinkedin:linkedin,
        estado:status
    } 
    ,{ headers }) ; 

};

export const putCandidateTecAndLanguage= (token, id, body) => {
    const headers = {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token).token}`,
    };

    return axiosConfig.put(`api/candidatos/${id}`, 
    
        body
    
    ,{ headers }) ; 

};