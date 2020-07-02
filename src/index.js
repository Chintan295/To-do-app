import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter ,Route,Redirect,Switch} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './Login';
import signup from './signup';
import Activity from './Activity';
import ActivityList from './component/ActivitList';

ReactDOM.render(
<BrowserRouter>
   
    
   <Switch>
     <Route path="/To-do-app/" exact component={ActivityList} />
     <Route path='/To-do-app/login/' exact component={Login}></Route> 
     <Route path='/To-do-app/signup/' exact component={signup}></Route> 
     <Route path='/To-do-app/user/activity' exact component={Activity}></Route> 
   
 
   
    </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
