const textElement = document.getElementById('text');

const texts = [
  "Teacher",
  "Czech language teacher",
  "English teacher",
  "German teacher",
  "French teacher",  
  "civics teacher",
  "history teacher",
  "geography teacher",
  "math teacher",
  "physics teacher",
  "chemistry teacher",
  "biology teacher",
  "IVT teacher",
  "art teacher",
  "music teacher",
  "physical education teacher",
  "available room on floor 1",
  "available room on floor 2",
  "available room on floor 3",
  "available room on floor 4"
];

let currentIndex = 0;
let currentText = "";
let isDeleting = false;

function firstType(){
  const currentString = "Find the";  
  
  currentText = currentString.substring(0, currentText.length + 1); 

  textElement.textContent = currentText;

  if (!isDeleting && currentText === currentString) {
    type();     
  } 
  else {
    setTimeout(firstType, 50);
  }
}


function type() {
  const currentString = texts[currentIndex];
  if (isDeleting) {
    currentText = "Find the " + currentString.substring(0, currentText.length - 10);
  } else {
    currentText = "Find the " + currentString.substring(0, currentText.length - 8);
  }

  textElement.textContent = currentText;

  if (!isDeleting && currentText === "Find the " + currentString) {
    isDeleting = true;
    setTimeout(type, 4000);
  } else if (isDeleting && currentText === "Find the ") {
    isDeleting = false;
    currentIndex = Math.floor(Math.random() * texts.length);
    setTimeout(type, 500);
  } else {
    setTimeout(type, 50);
  }
}

function chnageTitle(){
  document.title = "FTT domů";
}


textElement.textContent = currentText;
setTimeout(firstType, 500);
setTimeout(chnageTitle, 6000);

const activeElement = document.querySelector('.active');

activeElement.addEventListener('click', function() {
  this.classList.add('disabled');
});



