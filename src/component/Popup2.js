import React from 'react';  
import './style.css';  
import axios from 'axios';
class Popup2 extends React.Component {  

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



  render() {  
return (  
<div className='popup'>  
<div className='popup\_inner'>  
<h1 className="popup-heading1">SIGNIN</h1>
<p className="popup-heading2">Username:</p>
     <input className="size1" type="text" onChange={this.setusername} />  
     
     <p className="popup-heading2">Email:</p>
       <input className="size1" type="text" onChange={this.setemail} />  
       
       <p className="popup-heading2">Password:</p>
     <input className="size1" type="text" onChange={this.setpassword} />
     {this.state.name!='' && this.check(this.state.name)}



     <button onClick={this.submit} className="popup-button1"> Submit</button>
     
    


<button onClick={this.props.closePopup}>close me</button>  
</div>  
</div>  
);  
}  
}  

export default Popup2;