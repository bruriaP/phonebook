import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import data from './data';
const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
     
    },
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    
  }));
  
  
  

  


const test = porps => {

    const dataList = data.phonebooklist;
  let array = [];
  for(let i = 0; i < props.items.length; i++) {
    array.push(
      <Item key={i} item={props.items[i]} />
    );
  }
    return (
        <Container maxWidth="xs" >
          
          {array}
        </Container>
    );
};

export default test;