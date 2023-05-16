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


//spawning- - - - - - - - - - - - - - - - - - - - - - - - - - - -


const elmnt1 = document.getElementsByClassName('content-1');
const elmnt2 = document.getElementsByClassName('content-2');
const elmnt3 = document.getElementsByClassName('content-3');

const elmnt1targetMargin = 150;
const elmnt2targetMargin = 150;
const elmnt3targetMargin = 250;

const maxIterations = 25;

let curIteration1 = -1;
let curIteration2 = -1;
let curIteration3 = -1;

let opacity1 = 0.0;
let opacity2 = 0.0;
let opacity3 = 0.0;

// elmnt1[0].style.opacity  = opacity1.toString();  
// elmnt2[0].style.opacity  = opacity2.toString();  
// elmnt3[0].style.opacity  = opacity3.toString();  

function iterate1(){
    curIteration1++;
    opacity1 += 1 / maxIterations;
    if(curIteration1 == maxIterations) return;

    
    //calculate new position
    const curPosEl1 = parseFloat(window.getComputedStyle(elmnt1[0]).getPropertyValue("margin-right"))
    const newPosEl1 = curPosEl1 + (elmnt1targetMargin - curPosEl1) * 0.2;

    //assign new posotion and opacity
    elmnt1[0].style.marginRight = newPosEl1.toString() + "px";
    elmnt1[0].style.opacity  = opacity1.toString();  

    setTimeout(iterate1, 30);
}

function iterate2(){
    curIteration2++;
    opacity2 += 1 / maxIterations;
    if(curIteration2 == maxIterations) return;
    
    //calculate new position    
    const curPosEl2 = parseFloat(window.getComputedStyle(elmnt2[0]).getPropertyValue("margin-left"))
    const newPosEl2 = curPosEl2 + (elmnt2targetMargin - curPosEl2) * 0.2;

    //assign new posotion and opacity
    elmnt2[0].style.marginLeft = newPosEl2.toString() + "px";
    elmnt2[0].style.opacity = opacity2.toString();  

    setTimeout(iterate2, 30);
}

function iterate3(){
    curIteration3++;
    opacity3 += 1 / maxIterations;
    if(curIteration3 == maxIterations) return;

    
    //calculate new position    
    const curPosEl3 = parseFloat(window.getComputedStyle(elmnt3[0]).getPropertyValue("margin-right"))
    const newPosEl3 = curPosEl3 + (elmnt3targetMargin - curPosEl3) * 0.2;

    //assign new posotion and opacity
    elmnt3[0].style.marginRight = newPosEl3.toString() + "px";   
    elmnt3[0].style.opacity  = opacity3.toString();   

    setTimeout(iterate3, 30);

}




// setTimeout(iterate1, 500);
// setTimeout(iterate2, 850);
// setTimeout(iterate3, 1200);


