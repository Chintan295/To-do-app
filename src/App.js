import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Popup from './component/Popup';
import Popup2 from './component/Popup2';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {

  constructor(props){  
    super(props);  
    this.state = { showPopup: false, showPopup1:false };  
  }  
    
    togglePopup= ()=> {  
      this.setState({  
           showPopup: !this.state.showPopup  
      });  
       } 
       togglePopup1= ()=> {  
        this.setState({  
             showPopup1: !this.state.showPopup1 
        });  
         }   
       
  render()
  {
   return (<div className="app-background">
     <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<div class="content">
<div >
     <p className="font1">Make List And Complete Your Task</p>
     <div className="app-container">
    <ul>
  <li>
  <p onClick={this.togglePopup.bind(this)} className="font2 left"> Login</p>
  </li>
  <li>
 <p  onClick={this.togglePopup1.bind(this)} className="font2 left"> Signup</p>
  </li>

</ul>
</div>
</div>

  
   </div>
   
   {this.state.showPopup ?  
<Popup  
          text='Click "Close Button" to hide popup'  
          closePopup={this.togglePopup.bind(this)}  
/>  
: null  
}  
{this.state.showPopup1 ?  
<Popup2  
          text='Click "Close Button" to hide popup'  
          closePopup={this.togglePopup1.bind(this)}  
/>  
: null  
}  
   </div>)
    

    
  }
}

export function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
export function setCookie(cname, cvalue, expire) {
  var d = new Date();
  d.setTime(d.getTime() + (expire*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
export default App;
