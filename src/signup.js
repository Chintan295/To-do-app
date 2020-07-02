import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

class Signup extends Component {

    constructor(props)
    {
        super(props);
        this.state ={
            name:'',
            password:'',
            email:'',
            user:null,
            go:'no'
        }
      //  this.check = this.check.bind(this);
        this.setusername= this.setusername.bind(this);
        this.setemail= this.setemail.bind(this);
        this.setpassword= this.setpassword.bind(this);
    }
    check = (e)=>
    {
        
       
    console.log(this.state.user);
    }
    submit= () =>
    {
      
        const data= 
        {
            "username":this.state.name,
            "email":this.state.email,
            "password":this.state.password
        }
        const data1=
        {
            "username":this.state.name
        }
        console.log(data);
        axios.post('http://localhost:5000/activity/add/',
        data1,  {headers:{'Content-Type': 'application/json','Accept': 'application/json'}
    } ) .then(res => {})
    .catch(function(error){console.log(error.message);console.log("RR");});
    
     axios.post('http://localhost:5000/registers/add/',
        data,  {headers:{'Content-Type': 'application/json','Accept': 'application/json'}
    } ) .then(res => {this.setState({user:res.data});})
    .catch(function(error){console.log(error.message);console.log("RR");});
    
    
           
    
    }
   setemail=(e)=>
   {
       this.setState({email:e.target.value});
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
      
    if(this.state.user!=null)
    {
       return(<Redirect to="/To-do-app/user/activity/"></Redirect>);
    }
   return (<div>
     Username:
     <input type="text" onChange={this.setusername} />  <br></br>
       <hr></hr> 
       Email
       <input type="text" onChange={this.setemail} />  <br></br>
       <hr></hr> 
       password:
     <input type="text" onChange={this.setpassword} /><br></br><br></br>
     {this.state.name!='' && this.check(this.state.name)}



     <button onClick={this.submit} > Submit</button>
     
    

   </div>);
    

    
  }
}

export default Signup;
