import axiosConfig from '../utils/config/axios.config';

const login = (email, password) => {
    return axiosConfig
        .post('authAPI/login', {
            email,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                sessionStorage.setItem('TOKEN_KEY', JSON.stringify(response.data.token));
            }

            return response.data;
        });
};

const loginRemember = (email, password) => {
    return axiosConfig
        .post('authAPI/login', {
            email,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem('TOKEN_KEY', JSON.stringify(response.data.token));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem('TOKEN_KEY');
    sessionStorage.removeItem('TOKEN_KEY');
};

const userService = {
    login,
    loginRemember,
    logout,
};

export default userService;
