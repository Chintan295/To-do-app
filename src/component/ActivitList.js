import React from 'react';  
import './style.css';  
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

class ActivityList extends React.Component{
    constructor(){
        super();
        this.state={
            checked:[],
            unchecked:["swimming","read","infytw","hello"]//this.props.list
        }
        this.handleToggle=this.handleToggle.bind();
    }
    handleToggle = (value,i) => () => {
      
    }
    /*handleToggle = (value) => () => {
        const currentIndex = this.state.checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
    };*/
    render(){
        return (
            <List>
              {this.state.unchecked.map((value,i) => {
                  return(
                      <ListItem key={i} button onClick={this.handleToggle(value,i)}>
                        <ListItemIcon><Checkbox ></Checkbox></ListItemIcon>
                        <ListItemText id={i} primary={value} />
                      </ListItem>
                  )
              })}  
            </List>
        )
        /*return (
            <List>
              {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-label-${value}`;
                return (
                  <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                  </ListItem>
                );
              })}
            </List>
          );*/
    }
}

export default ActivityList;