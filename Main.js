import React from 'react';
import './Main.css';

const date = new Date(2023,2,1,2);
const hour = date.getHours();
let greeting="";
let obj={};

if(hour>0 && hour<12){
  greeting="Good Morning";
  obj.color="Green";
}

else if(hour>=12 && hour<16){
  greeting="Good Afternoon";
  obj.color="Red";
}

else if(hour>=16 && hour<20){
  greeting="Good Evening";
  obj.color="Blue";
}

else if(hour>=20 && hour<=24){
  greeting="Good Night";
  obj.color="Purple";
}

function Main() {
  return (
    <div className="parent">
        <div className="child">
            <h1>Hello Priti <span style={obj}>{greeting}</span></h1>
        </div>
    </div>
  )
}

export default Main