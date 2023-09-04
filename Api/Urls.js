export const rootURL = 'https://ts-3xqu.onrender.com/';
export const API_HEALTH_URL = 'https://ts-3xqu.onrender.com/health';

export const API_V_1 = 'https://ts-3xqu.onrender.com/api/v1/';

export const LOGIN_URL = `${API_V_1}auth/login/`;
export const LOGOUT_URL = `${API_V_1}auth/logout/`;
export const REGISTER_URL = `${API_V_1}auth/register/`;

export const ACCOUNTS_URL = (username) => `${API_V_1}auth/account/${username}/`;
export const TOKEN_TO_USER = (token) => `${API_V_1}auth/account/token/${token}/`;

export const BOARD_URL = `${API_V_1}boards/`;
export const BOARD_DELETE_URL = (id) => `${API_V_1}boards/${id}`;
export const BOARD_PUT_URL = (id) => `${API_V_1}boards/${id}`;

export const LIST_URL = (id) => `${API_V_1}lists/?bd=${id}`;
export const S_LIST_URL = (id) => `${API_V_1}lists/${id}`;

export const Task_URL = (id) => `${API_V_1}tasks/?lt=${id}`;
