import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './Login.css'
class Login extends Component {

    constructor(props)
    {
        super(props);
        this.state ={
            name:'',
            password:'',
            user:null,
            go:'no'
        }
      //  this.check = this.check.bind(this);
        this.setusername= this.setusername.bind(this);
        this.setpassword= this.setpassword.bind(this);
    }
    check = (e)=>
    {
        
        const data= 
        {
            "username":this.state.name
        }
     axios.post('http://localhost:5000/registers/fin/',
        data,  {headers:{'Content-Type': 'application/json','Accept': 'application/json'}
    } ) .then(res => {this.setState({user:res.data});})
    .catch(function(error){console.log(error.message)});
    
    console.log(this.state.user);
    }
    submit= () =>
    {
       const p=this.state.user.password;
       if(p==this.state.password)
       {
           this.setState({go:'yes'});
       }
    }
   
    setusername = (e)=>
    {
        
        this.setState({
            name:e.target.value
        });
        //this.check(e);
    }
    setpassword = (e) =>
    {
        this.setState({
            password:e.target.value
        });
    }
  render()
  {

    if(this.state.go=='yes')
    {
        return <h1>Login successfully</h1>
    }
   return (<div className="margin1"><div className="card border-dark mb-3 ">
        <div class="card-header text-center">
    <h1>LOGIN</h1>
  </div>
           <ul className="list-group list-group-flush">
     <p >Username:</p>
     <input className="size1" type="text" onChange={this.setusername} /> 
     <p>Password:</p>
     <input className="size1" type="text" onChange={this.setpassword} />
     {this.state.name!='' && this.check(this.state.name)}


 
    <button className="btn btn-primary size1" onClick={this.submit} > Submit</button>
     </ul>
     
     </div>

   </div>);
    

    
  }
}

export default Login;
