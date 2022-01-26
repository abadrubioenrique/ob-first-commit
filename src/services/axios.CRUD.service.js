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


// Obtener candidatos
export const getCandidatesInfo = async(token, setCandidates, candidates, setCandidatesFilter) => {
    const headers = {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token).token}`,
    };
    return await axiosConfig
        .get('api/candidatos', { headers })
        .then((response) => {
            if (response.data) {
                //localStorage.setItem('CANDIDATES', JSON.stringify(response.data.data.data));
                setCandidates(response.data.data.data);
                setCandidatesFilter(candidates);
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
export const postCandidate= (token,name,country,city,phonenumber,mail,remote,transfer,linkedin) => {
    const headers = {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token).token}`,
    };

    return axiosConfig.post('api/candidatos', 
    { 
        nombreCompleto: name,
        pais:country,
        ciudad:city,
        telefono: phonenumber, 
        email:mail,
        remoto:remote,
        disponibilidadTraslado:transfer,
        enlaceLinkedin:linkedin
    } 
    ,{ headers }) ; 

};