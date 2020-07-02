import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class server extends Component {



  render()
  {
    const mongoose = require("mongoose");
    mongoose.connect("mongodb://locahost:27017/Todo", (error)=>{
      if(!error){console.log("Connected");}
      else
      console.log("Error")

    });
    

    return ;  
  }
}

export default server;
