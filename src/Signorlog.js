import { Link } from "react-router-dom";
import "./Signorlog.css";
export default function Signorlog(props){
return(
    <>
    <div class="cont">
        <div class="text">
    <h1>Welcome,{props.name}</h1>
    </div>
    <Link to="/signup"><button class="sign1">Signup</button></Link>
    <Link to="/login"><button class="login1">Login</button></Link>
    </div>
    </>
)

}