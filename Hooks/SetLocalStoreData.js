const SetLocalStoreData = (key,value) => {
    try {
        localStorage.setItem(key,value)
    } catch (error) {
        console.log(error);
    }
}

export default SetLocalStoreData