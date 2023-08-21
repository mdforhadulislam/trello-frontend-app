export const rootURL ="https://tsp-xdth.onrender.com/"
export const API_HEALTH_URL = "https://tsp-xdth.onrender.com/health"

export const API_V_1 = "https://tsp-xdth.onrender.com/api/v1/"

export const LOGIN_URL = `${API_V_1}auth/login/`
export const LOGOUT_URL = `${API_V_1}auth/logout/`
export const REGISTER_URL = `${API_V_1}auth/register/`

export const ACCOUNTS_URL = (username)=>`${API_V_1}auth/account/${username}/`
export const TOKEN_TO_USER = (token)=>`${API_V_1}auth/account/token/${token}/`


export const BOARD_URL = `${API_V_1}boards/`
export const BOARD_DELETE_URL= (id) => `${API_V_1}boards/${id}`
export const BOARD_PUT_URL= (id) => `${API_V_1}boards/${id}`

export const LIST_URL=(id) =>`${API_V_1}lists/?bi=${id}`
export const Task_URL=(id) =>`${API_V_1}tasks/?bi=${id}`
