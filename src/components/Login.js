import React from 'react';
import '../App.css';
import { Button } from 'antd';

function Login(){
    return (
        <div>
            <form className="divBorder">
                <div className="formdata">
                <h3>Username</h3>
                <input type="text" placeholder="Username" />
                <h3>Password</h3>
                <input type="password" placeholder="Password" />
                <Button type="primary">Log In</Button>
                </div>
            </form>
        </div>
    )
}





export default Login;