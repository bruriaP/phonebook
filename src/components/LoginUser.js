import React from 'react';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import CardAction from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import classes from './LoginUser.module.css';
import {makeStyles} from '@material-ui/core/styles';
import  TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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
  
  
  

  


const LoginUser = porps => {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

      const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
       
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
        
      };

      const handleClicksubmit = () => {
        alert('Passwort Was Clicked!');
        
      };
      
      const handleMouseDownPassword = event => {
        event.preventDefault();
      };

      const [name, setName] = React.useState('Composed TextField');
      const classes1 = useStyles();
    return (
        // <Container maxWidth="xs" className={classes.loginContainer}>
          
            <Card className={classes1.card} variant="outlined" >
                <CardContent >
                  
                    <TextField
                        id="standard-basic"
                        className={classes1.textField}
                        label="שם משתמש"
                        margin="normal"
                    />
                    <InputLabel htmlFor="standard-adornment-password">סיסמא</InputLabel>
          <Input
            id="standard-adornment-password"
            className={classes1.textField}
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />


                </CardContent>
                <CardAction>
                    <Button variant="contained" color="primary" className={classes.buttonl} >
                    {/* <Button  className={classes.buttonl}>   */}
                    {/* onClick {handleClicksubmit} */}
                        כניסה
                    </Button>
                </CardAction>
            </Card>
        // </Container>
    );
};

export default LoginUser;