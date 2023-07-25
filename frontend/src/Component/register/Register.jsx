import { useState } from 'react';
import style from './register.module.css';
import { Link } from 'react-router-dom';
function Register() {

    const [userName, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
//error message 
const [emailLength, setUserLength] = useState(false)
    const [passwordLength, setPasswordLength] = useState(false);
//AlreadyRegister 

    function signup (e) {
e.preventDefault();
console.log(`hello ${userName}`);
console.log(userName)
//USERNAME VALIDATION
if(userName.length <= 5) {
    setUserLength(true)
}
else {
    setUserLength(false)
}

// PASSWORD VALIDATION
if(password.length <=5) {
    setPasswordLength(true)
}
else {
    setPasswordLength(false)
}
//EMAIL VALIDATION  

    }
    return ( 
        <div>
             <div id={style.container}>
<div id={style.SignUpContainer}>
    <div id={style.formContainer}>
        
       <form onSubmit={signup}>
       <h1>WanderList</h1>
       <br />
  <input type="Username" id="userName" placeholder="username" onChange={(e) => setuserName(e.target.value)} ></input>
  <br />{emailLength?<span>Username should be atleast length of 6 character</span>:null}
  <br />
  
  <input type="email"  placeholder="email" onChange={(e) => setEmail(e.target.value)} required ></input>
  <br/>
  <br />
 
  <input type="password"   placeholder="password" onChange={(e)=> setPassword(e.target.value)} ></input>
  <br /> {passwordLength?<span>Password should be atleast of 6 character</span>:null}

  <br />
  <button type ='submit'id= {style.buttonSignUp}>SignUp</button>
  <div id={style.line}></div>
  <p id={style.mobileSignup}>Already have an account?<Link to='/login'>Login</Link></p>
       </form>
    </div>

    <div id={style.welcome}>
        <h1>
        "Join Wanderlist to plan your dream trips <br/>
effortlessly and explore personalized<br/>
 itineraries for your favorite destinations."<br/>
        </h1>
 
    </div>
  
</div>
<footer id={style.footer}>@WanderList</footer>
</div>
        </div>
     );
}

export default Register;