const localStorageSetToken =(token)=>{
    localStorage.setItem("auth_token",JSON.stringify(token))
}

export default localStorageSetToken