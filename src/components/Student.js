import React from "react";
import Marks from "./marks";

export function Student(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <Marks {...props} />
    </div>
  );
}

export default Student;