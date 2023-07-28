import style from "./login.module.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorUsername, setErrorUsername] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username === '') {
            setErrorUsername(true);
        } else {
            setErrorUsername(false);
        }

        if (password === '') {
            setErrorPassword(true);
        } else {
            setErrorPassword(false);
        }

        if (username != '' && password != '') {
            try {
                // Send login request to the server
                const response = await fetch('http://127.0.0.1:3000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                });

                const data = await response.json();

                if (response.ok) {
                    const { token } = data;
                    localStorage.setItem('token', token);

                    fetch('http://127.0.0.1:3000/protected', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                            // Add any other custom headers here
                        },
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            localStorage.setItem('UserID', data);
                            window.location.href = '/Homepage';

                        })
                        .catch((error) => {
                            console.error(data.error);
                        });
                } else {
                    alert(data.error);
                }
            } catch (error) {
                console.error(error);
            }

        }
    };

    return (
        <div id={style.container}>
            <div id={style.LoginContainer}>
                <div id={style.formContainer}>

                    <form onSubmit={handleSubmit}>
                        <h1>WanderList</h1>
                        <br />
                        <input type="Username" placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>
                        <br /> <div className="errorLabel"> {errorUsername && <label>Enter  Username!</label>}</div>

                        <br />
                        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
                        <br />  <div className="errorLabel"> {errorPassword && <label>Enter  Password!</label>}</div>
                        <br />
                        <button id={style.buttonLogin} type="submit" className="loginButton">Login</button>
                        <div id={style.line}></div>
                        <p id={style.mobileSignup}>Dont have an account? <Link to='/register'>Sign Up</Link></p>
                    </form>
                </div>

                <div id={style.welcome}>
                    <h1>
                        Welcome To Wanderlist ! <br />
                        Start Planning Your Day.
                    </h1>
                    {/*  */}
                </div>

            </div>
            <footer id={style.footer}>@WanderList</footer>
        </div>
    );
}

export default Login;