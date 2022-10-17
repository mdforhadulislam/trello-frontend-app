const GetLocalStoreData = () => {
  try {
    const tokens = localStorage.getItem("auth_token");

    if (tokens) {
      return JSON.parse(tokens);
    } else {
      return { token: "" };
    }
  } catch (error) {
    return { token: "" };
  }
};

export default GetLocalStoreData;
