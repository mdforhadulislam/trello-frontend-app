const setLocalStoreData = (key,value) => {
    try {
        localStorage.setItem(key,`{"token":"${value}"}`)
    } catch (error) {
        console.log(error);
    }
}

export default setLocalStoreData