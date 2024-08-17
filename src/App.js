import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/signup';
import Navbar from './Navbar';
import Signorlog from './Signorlog';
import "./logo.css";
import Adminpage from './components/Admin';
import Trainer from './components/Trainer';
import Student from './components/Student';
import Formupdation from './components/Formupdate';
import Profile from './components/profile';
export default function App(){

  return(
    <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="signup" element={<Signup />} />
    <Route path="login" element={<Login />} />
    <Route path="trainee" element={<Trainer />}/>
    <Route path="Adminpage/:id" element={<Adminpage/>}/>
    <Route path="student/:id" element={<Student/>}/>
    <Route path="Formupdation/:id" element={<Formupdation />}/>
    <Route path="signorlog" element={<Signorlog />}/>

  </Routes>
    </BrowserRouter>
  );
  }