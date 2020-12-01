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
    <option value="Unpainted" label="Unpainted"></option>
  </select>
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

let subtotal:number = 10;
console.log("subtotal: "+subtotal);
let prod:Array<string> = ["crewmate"];
console.log("prod: "+prod);



window.onload = document.onload = () => { //loads in 1 set of questions when the page first loads automatically
  console.log('Logged on document ready');
  console.log(document.getElementById("mainForm").children)
  document.getElementById("mainForm").innerHTML += crewmateColor;   
 }



window.addCrewmate = function addCrewmate()  { //adds a new set of questions when the button is pressed
  console.log("run addCrewmate"); 
  document.getElementById("mainForm").innerHTML += crewmateColor;
  subtotal += 10;
  prod.push("crewmate");
  window.updateSubtotal();
};

window.addHat = function addHat() {
  console.log("adding hat");
  document.getElementById("mainForm").innerHTML += cmHat;
  subtotal += 5;
  prod.push("hat");
  window.updateSubtotal();
};

window.addMini = function addMini() {
  console.log("adding mini");
  document.getElementById("mainForm").innerHTML += cmMini;
  subtotal += 5;
  prod.push("mini");
  window.updateSubtotal();
};

window.updateSubtotal = function updateSubtotal(){
  document.getElementById("subtotalCounter").innerHTML = subtotal.toString();
};

window.rmItem = function rmItem()  { //adds a new set of questions when the button is pressed
  console.log("run rmItem"); 
  let elements = document.getElementById("mainForm").children; //list of all elements in form
  let target = elements.length-1; //target last item in form
  if (target>2) { //without the check, user could just delete everything including the buttons. number in check is total
    //of all elements you dont want them to be able to remove (buttons, inputs, etc)
    elements[target].remove(); //remove said item
    console.log(document.getElementById("mainForm").children);

    console.log(prod)
    switch(prod[prod.length-1]){
      case "crewmate": 
        subtotal -=10;
        break;
      case "hat":
        subtotal -=5;
        break;
      case "mini":
        subtotal -=5;
        break;      
    }
    prod.length = prod.length-1; //trim off the last thing in array since that element is being removed
    console.log(prod);
    window.updateSubtotal();
    //document.getElementById("subtotalCounter").innerHTML = subtotal.toString();
    //after the switch case updates subtotal, 
    //update html with new subtotal
  }
};