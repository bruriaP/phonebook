import React from "react";
import PhoneNumbers from "./PhoneNumbers";

export function PhoneDetail(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <PhoneNumbers {...props} />
    </div>
  );
}

export default PhoneDetail;