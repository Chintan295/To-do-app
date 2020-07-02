import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import { getCookie } from './App';

class Activity extends React.Component {

    constructor(props)
    {
        super(props);
        this.state ={
            username:getCookie('username'),
            activity:'',
            activities:null,
        }
        this.setactivity= this.setactivity.bind(this);
    }
    setactivity = (e)=>
    {
            this.setState({activity:e.target.value});
    }
    addin = ()=>
    {
        const data ={
            "username" : this.state.username,
            "activity" : this.state.activity
        }
        axios.post("http://localhost:5000/activity/fin/",
        data, {headers:{'Content-Type': 'application/json','Accept': 'application/json'}})
        .then(res => {
          if(res.data==null){
            axios.post("http://localhost:5000/activity/add/",
            data, {headers:{'Content-Type': 'application/json','Accept': 'application/json'}})
            .then(res => {
               this.setState({activities:res.data.activity});
            })
            .catch(function(error){console.log(error.message);console.log("RR");});
          }
          else{
            this.setState({activities:res.data.activity});
          }
        })
        .catch(function(error){console.log(error.message);console.log("RR");});
    }
  render()
  {
      let i=0
   return (<div>
      <h1>Welcome to Todo app. Make list and complete your task</h1>
      <h1>Add your Activity</h1>
      <input type="text" onChange={this.setactivity} />
      <button onClick={this.addin} >ADD</button>
      <button>DELETE  </button>
      <ol>
      {this.state.activities!=null && this.state.activities.map((activity) =>
        <li key={i}><label>{i=i+1} :</label>{activity}</li>
      )}
      </ol>
   </div>)
    

    
  }
}

export default Activity;
