import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { getRequestSend } from "../api/RequestSendMethod.js";
import Footer from "../components/Footer/Footer.jsx";
import Navbar from "../components/Nav/Navbar.jsx";
import Spinner from "../components/util/Spinner.jsx";
import localStorageToGetTokenUser from "../hooks/getLocalStore.js";

function App({ children }) {
  const [storeToken, setStoreToken] = useState(localStorageToGetTokenUser());
  const [board, setBoard] = useState([
    {
      name: "forhad",
      color: "hello",
      user: [],
      _id: "6347c49987a9c94af753e7a2",
      createdAt: "2022-10-13T07:56:10.056Z",
      updatedAt: "2022-10-13T07:56:10.056Z",
      __v: 0,
    },
  ]);
  const dispatch = useDispatch();
  const spinner = useSelector((state) => state.auth.spring);

  useEffect(() => {
    dispatch({ type: "ADD_TOKEN", payload: { token: storeToken } });

      getRequestSend("https://trello-apps.herokuapp.com/api/v1/boards/", {
        authorization: storeToken.token,
      }).then((response) => setBoard(response.data));
    
    dispatch({ type: "ALL_BOARD_FETCH", payload: board });
  }, [storeToken,board]);

  return (
    <div className="w-full h-auto">
      <Navbar />
      <ToastContainer />
      {children}
      {spinner && <Spinner />}
      <Footer />
    </div>
  );
}

export default App;
