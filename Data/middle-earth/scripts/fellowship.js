console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

// Part 1


var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');

function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
var section_tag = document.createElement("section");        
section_tag.setAttribute('id', 'middle-earth');

for (var counter = 0; counter < lands.length; counter++){
  var land = lands[counter];
  // console.log(land)
  var article_tag = document.createElement("article");
  var inner_text = document.createTextNode(land);
  var h1 = document.createElement("h1");

  h1.appendChild(inner_text);
  article_tag.appendChild(h1); 
  section_tag.appendChild(article_tag);

}
// console.log(section_tag);
document.body.appendChild(section_tag);

}

makeMiddleEarth();


// Part 2

function makeHobbits() {

var hobbit_ul = document.createElement('ul')

for (var counter = 0; counter < hobbits.length; counter++){
    var hobbit = hobbits[counter];
    console.log(hobbit);

    var hobbit_li = document.createElement('li');
    hobbit_li.setAttribute('class', 'hobbit');
    var hobbit_name = document.createTextNode(hobbit);

    hobbit_li.appendChild(hobbit_name);
    hobbit_ul.appendChild(hobbit_li);
  }
  console.log(hobbit_ul)
  return hobbit_ul;
}

  // display an unordered list of hobbits in the shire (which is the second article tag on the page)

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {



  document.getElementById("myBtn").addEventListener("click", displayDate);

  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
