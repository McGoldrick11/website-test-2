// Importing all the styles from index.scss
//
// You don't need this now
import './index.scss';

/*
let i: number = 0;
setInterval(() => {
  i++;

  document.getElementById("mainForm").innerHTML = `Seconds since load ${i}`;
  if (i%2==0){
  document.getElementById("mainForm").innerHTML = questions;
  }
  //throw new Error("Some error");
}, 1000);
*/

let questions = `
<ul>
  <li> <!--main color selector-->
  <p>What Color Would You like Your Crewmate to be?</p>   
  <input list ="colors1">            
  <datalist id="colors1">
      <option value="Red ($10)">
      <option value="Blue ($10)">
      <option value="Green ($10)">
      <option value="Custom Paintjob ($18)">
      <option value="Unpainted ($10)">

  </li>
  
  <li> <!--mini crewmates-->
  <p>Would You Like a Mini Crewmate Companion?</p>
  <input list="minis">
  <datalist id="minis">
      <option value="Yes ($5)">
      <option value="No">
  </li>

  
  <li> <!--hats-->
  <p>Would You Like a Hat for Your Crewmate?</p>
  <input list="hat_opt">
  <datalist id="hat_opt">
      <option value="Yes ($5)">
      <option value="No">
  
  </li>
  <ul>
  <li>
  <p>Which Hat Would You Like? (please type a description)</p>
  <input type="text" id="hat_type" name="hat_type">
  </li>
  </ul>

  <p></p>
  <li class = "button">
      <button type="button">Submit Order</button>
      <!--Change type to Submit when you actually have a place for that button to take you-->
  </li>
</ul>
`;

//document.getElementById("mainForm").innerHTML = questions;

console.log("console test");

function addCrewmate()  {
  console.log("run addCrewmate");
  document.getElementById("mainForm").innerHTML = questions;
};

function buttonTest()  {
  console.log("run buttonTest");
  document.getElementById("yoink").innerHTML = 'it worked';
};