import React, { useState } from 'react';
import LoginBox from './LoginBox';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function checkAuth(ev){
        ev.preventDefault();
        const url = "http://localhost:3030/login";
        axios.post(url, {user, pass})
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate('/home');
            }
        })
        .catch(err => {
            console.log(err);
            setError("An error occured while trying to log in")
        })
    }

    return (
        <main>
            <div className='header'>
                <h1>
                Book <span className='hspan'> Best Friend </span>
                </h1>
                <div>
                <button className='signbtn'>
                Sign Up
                </button>
                </div>
            </div>
            <div className='login'>
                <div>
                <div className="login-header">
                    <h2>Login</h2>
                </div>
                    <LoginBox>
                        <form onSubmit={checkAuth}>
                            <div className='user'>
                                <input
                                    className='userinput'
                                    type='text'
                                    value={user}
                                    onChange={ev => setUser(ev.target.value)}
                                    placeholder='User'
                                    required
                                />
                            </div>
                            <div className='pass'>
                                <input
                                    className='passinput'
                                    type='password'
                                    value={pass}
                                    onChange={ev => setPass(ev.target.value)}
                                    placeholder='Password'
                                    required
                                />
                            </div>
                            <div>
                                <button className='loginbtn' type='submit'>
                                    Login
                                </button>
                            </div>
                        </form>  
                    </LoginBox>
                </div>
            </div>
            {error && <p className="error">{error}</p>}
        </main>
    );
}

export default Login;
