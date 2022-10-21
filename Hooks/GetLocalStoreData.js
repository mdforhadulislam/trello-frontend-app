const getLocalStoreData = () => {
  try {
    const tokens = JSON.parse(localStorage.getItem("auth_token"));
    if (tokens) {
      return tokens
    } else {
      return { token: "" };
    }
  } catch (error) {
    return { token: "" };
  }
};

export default getLocalStoreData;
