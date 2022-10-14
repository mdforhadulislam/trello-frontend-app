import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer/Footer.jsx";
import Navbar from "../components/Nav/Navbar.jsx";
import Spinner from "../components/util/Spinner.jsx";
import localStorageToGetTokenUser from "../hooks/getLocalStore.js";

function App({ children }) {
  const [storeToken, setStoreToken] = useState(localStorageToGetTokenUser());
  const dispatch = useDispatch();
  const spinner = useSelector((state) => state.auth.spring);

  useEffect(() => {
    dispatch({ type: "ADD_TOKEN", payload: { token: storeToken } });
  }, [storeToken]);

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
