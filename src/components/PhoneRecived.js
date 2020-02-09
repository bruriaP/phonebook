import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
// import SvgIcon from '@material-ui/core/SvgIcon';
// import Student from "../components/Student";
import data from "./data.json"; 
import PhoneDetail from '../components/phoneDetail'
// import PhoneRec from '../components/phoneDetail'







export default function phoneOne() {
    const dataList = data.phonebooklist; 
    console.log({dataList})
  return (
    <div >

       <PhoneDetail {...dataList}  />  
    </div>
  );
}