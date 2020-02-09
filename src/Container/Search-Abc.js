import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
// import classes1 from './Container/phoneabc.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import { red, green } from '@material-ui/core/colors';
import LangForm from '../components/selEngHeb';



// import data from './component.data.json';
// We can inject some CSS into the DOM.
const useStyles = makeStyles(theme => ({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  pagesdivision:{
    // background: '#9fb6b3',
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    marginTop:20,
    marginbottom:20,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: 40,
    borderright: '3px solid #73AD21',
    borderbottom:' 3px solid #cdcdcd',
    position: 'relative',
    textAlign:'center',
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  pagesdivisioncurr:{
    // background: '#9fb6b3',
    color: '#FFF',
    fontweight: 'bold',
    // display: 'inline-block',
    // padding: 10,
    padding: theme.spacing(2),
    textAlign: 'center',
    fontSize:14,
    // color: '#333',
    background:'rgba(70, 79, 80, 50)',
  },
  search:{
    position: 'relative',
    left: 450,
    // textAlign:'center',
    // border: '2px solid #73AD21',
    display:'flex',
    margin: 'auto',
    width: '50%',
  }
}));
export default function AbcContainer(props) {
  const classes = useStyles();
  let langNew=props.lang;
  let letters=[];
  function buildList(lang){

    let range = [];

    if(lang === 'Eng'){
      range =["A", "Z"];
    }else{
      range = [ "א", "ת"] ;
    }

    for(let i= range[0].charCodeAt(0);i<=range[1].charCodeAt(0);i++)
    {
      // letters.push(String.fromCharCode(i));
      if (i!==1498 || i!==1501 || i!==1503 || i!==1507 || i!==1509) 
      {
        const letter = String.fromCharCode(i);
        console.log(letter,i);
        const item =  <a className={classes.pagesdivisioncurr} href={`"#/data/?name=${letter}`}>{letter}</a>
        letters.push(item)
      }
      
    }

  }

  buildList(langNew);
  // const [spacing, setSpacing] = React.useState(2);
  // const styles = {
  //   root: {
  //     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  //     borderRadius: 3,
  //     border: 0,
  //     color: 'white',
  //     height: 48,
  //     padding: '0 30px',
  //     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  //   },
  //   pagesdivision:{
  //     background: '#f1f1f1',
  //     marginbottom:20,
  //   },
  //   pagesdivisioncurr:{
  //     background: '#008475',
  //     color: '#FFF',
  //     fontweight: 'bold',
  //   },
  // };
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.container}>
      <Grid item lg style={{paddingTop:'0.1rem', paddingBottom:'0.2rem'}}>
        <div className={classes.pagesdivision} >
             {/* <span>{lang}</span>   */}
            {letters}
        
							{/* <a className={classes.pagesdivisioncurr} href="./data/?name=א">א </a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=ב">ב</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=ג">ג</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=ד">ד</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=ה">ה</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=ו">ו</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=ז">ז</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=ח">ח</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=ט">ט</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=י">י</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=כ">כ</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=ל">ל</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=מ">מ</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=נ">נ</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=ס">ס</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=ע">ע</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=פ">פ</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=צ">צ</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=ק">ק</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=ר">ר</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=ש">ש</a>
								<a className={classes.pagesdivisioncurr} href="./data/?name=ת">ת</a> */}
                {/* <input type="hidden" name="act" value="phonesbook" />
			        	<input name="search" value="" />
				        <input type="submit" value="חפש" /> */}
						</div>
        {/* <Typography component="p" style={{ backgroundColor: '#cfe8fc', height: '10vh' }} /> */}
            </Grid>
      </Container>
                {/* <div className={classes.search}>
            
                <input type="hidden" name="act" value="phonesbook" />
			        	<input  name="search" value="" />
				        <input  type="submit" value="חפש" />
                </div> */}
                
    </React.Fragment>
  );
}