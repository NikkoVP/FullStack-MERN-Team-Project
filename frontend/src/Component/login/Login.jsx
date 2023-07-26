 import style from "./login.module.css";
import { Link} from "react-router-dom";
function Login() {
    return ( 
    <div id={style.container}>
<div id={style.LoginContainer}>
    <div id={style.formContainer}>
        
       <form>
       <h1>WanderList</h1>
       <br />
  <input type="Username"  placeholder="username"></input>
  <br />

  <br />
  <input type="password"   placeholder="password"></input>
  <br />
  <br />
  <button id= {style.buttonLogin}>Login</button>
  <div id={style.line}></div>
  <p id={style.mobileSignup}>Dont have an account? <Link to= '/register'>Sign Up</Link></p>
       </form>
    </div>

    <div id={style.welcome}>
        <h1>
Welcome To Wanderlist ! <br />
Start Planning Your Day.
        </h1>
    </div>
  
</div>
<footer id={style.footer}>@WanderList</footer>
</div>
     );
}

export default Login;