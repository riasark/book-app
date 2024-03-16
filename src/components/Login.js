import React, { useState } from 'react';
import LoginBox from './LoginBox';

function Login() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    function checkAuth(ev){
        ev.preventDefault()

    }
    return (
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
                    placeholder='User'>
                    </input>
                </div>
                <div className='pass'>
                    <input
                        className='passinput'
                        type='text'
                        value={pass}
                        onChange={ev => setPass(ev.target.value)}
                        placeholder='Password'>
                    </input>
                <div>
                    <button className='loginbtn' type='submit'>
                        Login
                    </button>
                </div>
                </div>
            </form>  
        </LoginBox>
        </div>
    );
}

export default Login;
