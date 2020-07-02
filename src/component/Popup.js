import React from 'react';  
import './style.css';  
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {setCookie,getCookie} from '../App'

class Popup extends React.Component {
    
    constructor(props)
    {
        super(props);
        this.state ={
            name:'',
            password:'',
            user:null,
            go:'no'
        };
        this.setusername= this.setusername.bind(this);
        this.setpassword= this.setpassword.bind(this);
    }
    submit= () =>
    {
        const data= 
        {
            "username":this.state.name
        }
        axios.post('http://localhost:5000/registers/fin/',
            data,  {headers:{'Content-Type': 'application/json','Accept': 'application/json'}})
        .then(res => {
            this.setState({user:res.data});
            const p=this.state.user.password;
            if(p==this.state.password)
            {
                setCookie("username",this.state.name,36000)
                this.setState({go:'yes'});
            }
        })
        .catch(function(error){console.log(error.message)});
    }
   
    setusername = (e)=>
    {
        
        this.setState({
            name:e.target.value
        });
    }
    setpassword = (e) =>
    {
        this.setState({
            password:e.target.value
        });
    }



  render() {  
    if(this.state.go==='yes')
    {
        return <Redirect to='/To-do-app/user/activity'></Redirect>;
    }    
    return (  
        <div className='popup'>  
        <div className='popup\_inner'>  
        

        <div ><div>
                <div>
            <h1 className="popup-heading1"> LOGIN</h1>
        </div>
                <ul>
            <p className="popup-heading2">Username:</p>
            <input className="size1" type="text" onChange={this.setusername} /> 
            <p className="popup-heading2">Password:</p>
            <input className="size1" type="text" onChange={this.setpassword} />

            <br></br>
            <button  onClick={this.submit}  className="popup-button1"> Submit</button>
            </ul>
            
            </div>

        </div>
        <button onClick={this.props.closePopup}>close me</button>  
        </div>  
        </div>  
        );
    }  
}  

export default Popup;