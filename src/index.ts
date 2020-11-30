// Importing all the styles from index.scss
//
// You don't need this now
import './index.scss';


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

</ul> `;

let crewmateColor =
`<span> <!--main color selector-->
  <p>What Color Would You like Your Crewmate to be?</p>   
  <input list ="colors1">            
  <datalist id="colors1">
      <option value="Red ($10)">
      <option value="Blue ($10)">
      <option value="Green ($10)">
      <option value="Custom Paintjob ($18)">
      <option value="Unpainted ($10)">
  <br>
  </span>`;

let cmHat = `
<p>Which Hat Would You Like? (please type a description)</p>
<input type="text" id="hat_type" name="hat_type"> 
`;

let cmMini = `
<p>What Color Would You like Your Mini Crewmate to be?</p>   
  <input list ="colors1">            
  <datalist id="colors1">
      <option value="Red ($10)">
      <option value="Blue ($10)">
      <option value="Green ($10)">
      <option value="Custom Paintjob ($18)">
      <option value="Unpainted ($10)">
`;

console.log("console test");

window.onload = document.onload = () => { //loads in 1 set of questions when the page first loads automatically
  console.log('Logged on document ready');
  document.getElementById("mainForm").innerHTML += crewmateColor;   
 }

window.addCrewmate = function addCrewmate()  { //adds a new set of questions when the button is pressed
  console.log("run addCrewmate"); 
  document.getElementById("mainForm").innerHTML += crewmateColor;
};

window.addHat = function addHat() {
  console.log("adding hat");
  document.getElementById("mainForm").innerHTML += cmHat;
};

window.addMini = function addMini() {
  console.log("adding mini");
  document.getElementById("mainForm").innerHTML += cmMini;
};

window.buttonTest = function buttonTest() {
  console.log("run buttonTest");
  document.getElementById("yoink").innerHTML = 'it worked';
};