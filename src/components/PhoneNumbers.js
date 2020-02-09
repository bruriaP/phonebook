import React from "react";
// { title: 'שם פרטי', field: 'name'  },
// { title: 'שם משפחה', field: 'surname' },
// { title: 'שם פרטי-אנגלית', field: 'nameEng' },
// { title: 'שם משפחה -אנגלית', field: 'surnameEng' },
//  { title: 'מצב משפחתי', field: 'isMarried', type: 'enum' },
//  {title:'מחלקה',field:'Department'},
// {title: 'סלולרי',field:'cellolar'},
// {title:'טלפון בית',field:'phoneH'},
// {title: 'טלפון עבודה',field:'phoneW'},
// { title: 'מין', field: 'sex',lookup:{11:'זכר',2:'נקבה'}, disableClick: true, editable: 'onAdd' },
// {title:'כתובת',field:'adress'},
// {title: 'ארץ לידה',field: 'birthCity',lookup: { 34: 'באר שבע', 63: 'תל אביב' },},
// { title: 'איזור', field: 'area',lookup:{11:'דרום',22:'צפון',33:'מזרח',44:'מערב'}, disableClick: true, editable: 'onAdd' },
// { title: 'ת.לידה', field: 'birthDate', type: 'numeric' },
// { title: 'ת.עבודה', field: 'createdOnTime', type: 'numeric' },
export function PhoneNumbers(props) {
  return (
    <div>
        {props.name} {props.surname} {props.cellolar} {props.phoneH} {props.phoneW}
      
    </div>
  );
}

export default PhoneNumbers;