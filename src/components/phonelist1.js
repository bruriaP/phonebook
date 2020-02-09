import React from 'react';
import MaterialTable from 'material-table';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
// import phonebooklist from './data.json'
import data from "./data.json"; 
// import {letter} from '../Container/Search-Abc';
import LangForm from '../components/selEngHeb';
import Grid from "@material-ui/core/Grid";

// import Alert from '@material-ui/lab/Alert';
  // import NonIdiomaticList from './listArray';

const dataList = data.phonebooklist;
// import classes from './phonelist.module.css';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    background: '#008475',
	color: '#fff',
	verticalalign: 'top',
	borderright: '1px solid #cdcdcd',
	borderbottom: '1px solid #cdcdcd',
  },
  body: {
    fontSize: 14,
    background: '#f1f1f1',
	padding: '1rem',
	border: '1px solid #ddd',
	marginbottom: '1.5rem',
  },
}))(TableCell);


export default function MaterialTableDemo() {
    // <AbcContainer />

  const [state, setState] = React.useState({
    columns: [
      { title: 'שם פרטי', field: 'name'  },
      { title: 'שם משפחה', field: 'surname' },
      { title: 'שם פרטי-אנגלית', field: 'nameEng' },
      { title: 'שם משפחה -אנגלית', field: 'surnameEng' },
       { title: 'מצב משפחתי', field: 'isMarried', type: 'enum' },
       {title:'מחלקה',field:'Department'},
      {title: 'סלולרי',field:'cellolar'},
      {title:'טלפון בית',field:'phoneH'},
      {title: 'טלפון עבודה',field:'phoneW'},
      { title: 'מין', field: 'sex',lookup:{11:'זכר',2:'נקבה'}, disableClick: true, editable: 'onAdd' },
      {title:'כתובת',field:'adress'},
      {title: 'ארץ לידה',field: 'birthCity',lookup: { 34: 'באר שבע', 63: 'תל אביב' },},
      { title: 'איזור', field: 'area',lookup:{11:'דרום',22:'צפון',33:'מזרח',44:'מערב'}, disableClick: true, editable: 'onAdd' },
      { title: 'ת.לידה', field: 'birthDate', type: 'numeric' },
      { title: 'ת.עבודה', field: 'createdOnTime', type: 'numeric' },
      
      
    ],

    // data: [
    //   { id: 1, name: 'רגב', surname: 'פטשניק',nameEng: 'Regev', surnameEng: 'Ptashnik', isMarried: true, birthDate: new Date(1987, 1, 1), birthCity: 63, sex: 1, type: 'adult', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35),cellolar:'052855766',phoneH:'08645123',phoneW:'08640999' ,adress:'חולון',Area: 11},
    //   { id: 2, name: 'נועה', surname: 'פטשניק', isMarried: false, birthDate: new Date(1987, 1, 1), birthCity: 34, sex: 2, type: 'adult', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 1,Area:11 },
    //   { id: 3, name: 'סיון', surname: 'פטשניק', isMarried: true, birthDate: new Date(1987, 1, 1), birthCity: 34, sex: 2, type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 1 },
    //   { id: 4, name: 'שרה', surname: 'לוי', isMarried: true, birthDate: new Date(1987, 1, 1), birthCity: 34, sex: 2, type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 3 },
    //   { id: 5, name: 'טל', surname: 'כהן', isMarried: false, birthDate: new Date(1987, 1, 1), birthCity: 34, sex: 2, type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35) },
    //   { id: 6, name: 'רות', surname: 'זלצמן', isMarried: true, birthDate: new Date(1989, 1, 1), birthCity: 34, sex: 2, type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 5 },
    // ],
    data:dataList
    
  });
  
//   console.log(this.props.data);
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
      <div>
          {/* <button>choose</button> */}
     {/* <AbcContainer /> */}
     <Grid  item lg container direction="row" alignItems="flex">
              <LangForm />
                
            </Grid>
    <MaterialTable 
    classname = {StyledTableCell.body}
      title="ספר טלפונים"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                // const writeJsonFile = require('write-json-file');
 
                //   (async () => {
                //          await writeJsonFile('./data.json', {newData:true});
                //     })();
                // state.data.splice('name', 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
    </div>
  );
  
  
}