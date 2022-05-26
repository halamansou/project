import Login from "./components/Login";
import Posts from "./components/Posts";
import { Routes, Route ,} from "react-router-dom";
import Notfound from "./components/Notfound";
import Home from "./components/Home";
import Navbar from './components/Navbar';
import Protectedrout from "./components/Protectedrout";
 import Date_ from "./components/Date_";
const app = () => {
  
  return(
     <div>
    <Navbar />
    <Routes>
      <Route path="/date" element={<Date_/>} />
      <Route path="/login" element={<Login/>} />
      <Route element={<Protectedrout />}>
        <Route path="/home" element={<Home/>} />
        <Route path="/posts" element={<Posts/>} />
      </Route>
      <Route path="*" element={<Notfound/>} />
    </Routes>
    
    </div>
  
 
  );
  
};
export default app;
