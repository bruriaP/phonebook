import React from 'React';
import data from './data';



const NonIdiomaticLis = porps => {
// export default function NonIdiomaticList(props) {
  // Build an array of items
  const dataList = data.phonebooklist;
  let array = [];
  for(let i = 0; i < props.items.length; i++) {
    array.push(
      <Item key={i} item={props.items[i]} />
   
    );
  }

  // Render it
  return (
    <div>
      {array}
    </div>
  );
}
export default NonIdiomaticLis