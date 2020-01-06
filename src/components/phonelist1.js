import React from 'react';
import MaterialTable from 'material-table';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
// import classes from './phonelist.module.css';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'שם פרטי', field: 'name'  },
      { title: 'שם משפחה', field: 'surname' },
      { title: 'שם פרטי-אנגלית', field: 'nameEng' },
      { title: 'שם משפחה -אנגלית', field: 'surnameEng' },
      // { title: 'נשוי/אה', field: 'isMarried', type: 'boolean' },
      
      // { title: 'Tipi', field: 'type', removable: false, editable: 'never' },
      {title: 'סלולרי',field:'cellolar'},
      {title:'טלפון בית',field:'phoneH'},
      {title: 'טלפון עבודה',field:'phoneW'},
      { title: 'מין', field: 'sex',lookup:{1:'זכר',2:'נקבה'}, disableClick: true, editable: 'onAdd' },
      {title:'כתובת',field:'adress'},
      // {title:'איזור',filed:'Area',lookup:{11:'מרכז',22:'צפון',33:'ירושלים',44:'דרום'},disableClick: true, editable: 'onAdd'},
      {
        title:'איזור',
        filed:'Area',
        lookup:{11:'מרכז',22:'צפון',33:'ירושלים',44:'דרום'},
      },
      
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'באר שבע', 63: 'תל אביב' },
      },
    ],

    data: [
      { id: 1, name: 'רגב', surname: 'פטשניק',nameEng: 'Regev', surnameEng: 'Ptashnik', isMarried: true, birthDate: new Date(1987, 1, 1), birthCity: 63, sex: 1, type: 'adult', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35),cellolar:'052855766',phoneH:'08645123',phoneW:'08640999' ,adress:'חולון',Area: 11},
      { id: 2, name: 'נועה', surname: 'פטשניק', isMarried: false, birthDate: new Date(1987, 1, 1), birthCity: 34, sex: 2, type: 'adult', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 1,Area:11 },
      { id: 3, name: 'סיון', surname: 'פטשניק', isMarried: true, birthDate: new Date(1987, 1, 1), birthCity: 34, sex: 2, type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 1 },
      { id: 4, name: 'שרה', surname: 'לוי', isMarried: true, birthDate: new Date(1987, 1, 1), birthCity: 34, sex: 2, type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 3 },
      { id: 5, name: 'טל', surname: 'כהן', isMarried: false, birthDate: new Date(1987, 1, 1), birthCity: 34, sex: 2, type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35) },
      { id: 6, name: 'רות', surname: 'זלצמן', isMarried: true, birthDate: new Date(1989, 1, 1), birthCity: 34, sex: 2, type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 5 },
    ],
    // data: [
    //   { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    //   {
    //     name: 'Zerya Betül',
    //     surname: 'Baran',
    //     birthYear: 2017,
    //     birthCity: 34,
    //   },
    // ],
  });

  return (
    
    <MaterialTable
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
  );
}