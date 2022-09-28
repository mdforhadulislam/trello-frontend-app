import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Boards from "../pages/Boards";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Doc from "../pages/Doc";
import Home from "../pages/Home";
import Lists from "../pages/Lists";
import SingIn from "../pages/SingIn";
import SingUp from "../pages/SingUp";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doc" element={<Doc />} />
        <Route path="/contact" element={<Contact />} /> {/* complited */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/boards" element={<Boards />} />
        <Route path="/dashboard/boards/:boards_id" element={<Lists />} />
        <Route path="/auth/singup" element={<SingUp />} />{/* complited */}
        <Route path="/auth/singin" element={<SingIn />} />{/* complited */}

      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
