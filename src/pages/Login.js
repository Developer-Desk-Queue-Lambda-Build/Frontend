import React, {useState} from 'react';
import '../App.css';
import { Form, Icon, Input, Button } from 'antd';
// import {NavLink} from 'react-router-dom';
import {axiosStudentAuth} from'../utils/axiosStudentAuth';


function Login(props) {
  const [login, setLogin] = useState({username: "", password: ""});
  const isLoggedIn = true;

  // function postLogin() {
  // }
  

  // if (isLoggedIn) {
  //   return <Redirect to="/bubbles" />;
  // }

  function handleSubmit(e){
      e.preventDefault();
      axiosStudentAuth()
      .post('/login', login)
      .then(res=>
        localStorage.setItem('token', res.data.payload))
        props.history.push('/dashboard')
  };

  console.log(login);

  const handleUsername= (e) => setLogin({...login, username: e.target.value,});
  const handlePass= (e) => setLogin({...login, password: e.target.value,})

  return (
    
    <div className="Login">
    {/* <img src={Logo} className="Logo" alt="logo"/> */}
      <div className="App-form">
      <Form onSubmit={handleSubmit}>
        <Input type = "text" placeholder="username" onChange={handleUsername}/>
        <Input type = "password" placeholder="password" onChange={handlePass}/>
        <Button type="primary" style={{textAlign:'center', margin: '0 auto'}}>Log in</Button>
      </Form>
      </div>
    </div>
  );
};

export default Login;