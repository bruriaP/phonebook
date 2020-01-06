import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import classes1 from './Container/phoneabc.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import { red, green } from '@material-ui/core/colors';

// We can inject some CSS into the DOM.
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  pagesdivision:{
    background: '#f1f1f1',
    marginbottom:20,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: 30,
    borderright: '3px solid #73AD21',
    borderbottom:' 3px solid #cdcdcd',
    position: 'relative',
    textAlign:'center',
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  pagesdivisioncurr:{
    background: '#008475',
    color: '#FFF',
    fontweight: 'bold',
    // display: 'inline-block',
    padding: 10,
    // color: '#333',
    //  background:'rgba(0, 0, 0, .1)',
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
});
export default function FixedContainer() {
  const classes = useStyles();
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
      <Container fixed>
      <div className={classes.pagesdivision}>
        
							<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=א">א</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=ב">ב</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=ג">ג</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=ד">ד</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=ה">ה</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=ו">ו</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=ז">ז</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=ח">ח</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=ט">ט</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=י">י</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=כ">כ</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=ל">ל</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=מ">מ</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=נ">נ</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=ס">ס</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=ע">ע</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=פ">פ</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=צ">צ</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=ק">ק</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=ר">ר</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=ש">ש</a>
								<a className={classes.pagesdivisioncurr} href="./phonesbook/?letter=ת">ת</a>
                {/* <input type="hidden" name="act" value="phonesbook" />
			        	<input name="search" value="" />
				        <input type="submit" value="חפש" /> */}
						</div>
        {/* <Typography component="p" style={{ backgroundColor: '#cfe8fc', height: '10vh' }} /> */}
      </Container>
                <div className={classes.search}>
            
                <input type="hidden" name="act" value="phonesbook" />
			        	<input  name="search" value="" />
				        <input  type="submit" value="חפש" />
                </div>
                
    </React.Fragment>
  );
}