import axiosConfig from '../utils/config/axios.config';

export const getTecnologias = (token, setTecnologiasOptions) => {
    const headers = {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token).token}`,
    };
    return axiosConfig
        .get('api/tecnologias', { headers })
        .then((response) => {
            if (response.data) {
                const res =response.data.data.data;
                setTecnologiasOptions(res.map(opt=>opt.nombre))
            }
            return response.data;
        });
};



export const getCandidatesInfo = (token, setCandidates, candidates, setCandidatesFilter) => {
    const headers = {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token).token}`,
    };
    return axiosConfig
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


export const getCandidateById = (token,id) => {
    const headers = {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token).token}`,
    };
    return axiosConfig
        .get(`api/candidatos/${id}`, { headers })
        .then((response) => {
            if (response.data) {
               console.log(response.data)
            }

            return response.data;
        });
};
