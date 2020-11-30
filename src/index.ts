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

let crewmateColor =`
<span id="cmColor">
<p>What Color Would You like Your Crewmate to be?</p>   
  <select name="cmColor dropdown">
    <option value="Red" label="Red"></option>
    <option value="Blue"label="Blue"></option>
    <option value="Green" label="Green"></option>
    <option value="Custom" label="Custom Paintjob (+$8)"></option>
    <option value="Unpainted" label="Unpainted"></option>
  </select>
<br><br>
<input onClick="customPaint()" id="paint button" type="checkbox"> Custom Paintjob? (+8$)
<input type="text" id= "desc paint" placeholder="Describe Custom Paintjob Here" size="30">
</span>
`;

let cmHat = `
<span>
<p>Which Hat Would You Like? (please type a description)</p>
<input type="text" id="hat_type" name="hat_type"> 
</span>
`;

let cmMini = `
<span id="cmMiniColor">
<p>What Color Would You like Your Mini Crewmate to be?</p>   
  <select name="minicm dropdown">
    <option value="Red" label="Red"></option>
    <option value="Blue"label="Blue"></option>
    <option value="Green" label="Green"></option>
    <option value="Custom" label="Custom Paintjob (+$5)"></option>
    <option value="Unpainted" label="Unpainted"></option>
  </select>
</span>
`;

console.log("console test");

window.onload = document.onload = () => { //loads in 1 set of questions when the page first loads automatically
  console.log('Logged on document ready');
  console.log(document.getElementById("mainForm").children)
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

window.addElement = function addElement() {
//use this function later to condense code
//basically pass in a product type and it will build the whole add function
//so one function for all 3
}

window.rmItem = function rmItem()  { //adds a new set of questions when the button is pressed
  console.log("run rmItem"); 
  let elements = document.getElementById("mainForm").children; //list of all elements in form
  let target = elements.length-1; //target last item in form
  if (target>2) { //without the check, user could just delete everything including the buttons. number in check is total
    //of all elements you dont want them to be able to remove (buttons, inputs, etc)
  elements[target].remove() //remove said item
  console.log(document.getElementById("mainForm").children)
  }
};