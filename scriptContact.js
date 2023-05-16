const copyableElements = document.getElementsByClassName('contact-value');
const CTCtooltip = document.getElementsByClassName('tooltip-text');
const emailInput = document.getElementById('email');
const textInput = document.getElementsByName('message')[0];
const loader = document.getElementsByClassName('loader');

let CTCtooltipIsRunning = false;
let CTCtooltipIsVisible = false;
let tooltipDisabled = false;

loader[0].style.opacity = 0;


for(let i = 0; i < copyableElements.length; i++){
    const element = copyableElements[i]
    element.addEventListener('click', (e) => {clickFunction(element.innerHTML)});
    element.addEventListener('mouseover', (e) => {startCTCtooltip(true)});
    element.addEventListener('mouseleave', (e) => {stopCTCtooltip()});
};

emailInput.addEventListener('blur', async function(){
    if(emailInput.value.length == 0){      
        emailInput.className = 'input-mail unfilled';
        return;
    } 
    loader[0].style.opacity = 1;
    await sleep(1200);    
    loader[0].style.opacity = 0;
    if(validateEmail(emailInput.value)){
  
        emailInput.className = 'input-mail filled';     
    }
    else{

        emailInput.className = 'input-mail incorrect';     
    }
})

//console.log(CTCtooltip.style.opacity);
function clickFunction(string) {
    navigator.clipboard.writeText(string);
    CTCtooltip[0].innerHTML = "zkopírováno!";

    tooltipDisabled = true;
    CTCtooltip[0].style.animation = "tooltip-transition-show 0.2s";
    CTCtooltip[0].style.opacity = "1";

    setTimeout(function(){
        CTCtooltip[0].style.animation = "tooltip-transition-hide 0.2s";
        CTCtooltip[0].style.opacity = "0";
        tooltipDisabled = false;
    }, 2000);

    setTimeout(function(){
        CTCtooltip[0].innerHTML = "zkopírovat do schránky";
    }, 2200);


}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startCTCtooltip(wait){
    if(tooltipDisabled) return;
    CTCtooltipIsRunning = true;
    if(wait)
    {
        await sleep(1000);
    }
    if (CTCtooltipIsRunning){    
        CTCtooltipIsVisible = true;
        CTCtooltip[0].style.animation = "tooltip-transition-show 0.2s";
        CTCtooltip[0].style.opacity = "1";
    }
    else{
        CTCtooltip[0].style.opacity = "0";
        CTCtooltipIsVisible = false;
    }
}

function stopCTCtooltip(){
    if(tooltipDisabled) return;
    if (CTCtooltipIsVisible){
        CTCtooltip[0].style.animation = "tooltip-transition-hide 0.2s";
        CTCtooltip[0].style.opacity = "0";
    }
    CTCtooltipIsRunning = false;
    CTCtooltipIsVisible = false;

}

const validateEmail = (email) => { //this should be later replaced with server-side check
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};


window.addEventListener('beforeunload', function (e) {  
    console.log('villager' + textInput.value)  
    if(textInput.value.length > 0){
        // Cancel the event
    e.preventDefault();
    // Chrome requires returnValue to be set
    e.returnValue = '';
    

    // Custom message to display to the user
    var confirmationMessage = '';

    // Display the confirmation message
    (e || window.event).returnValue = confirmationMessage;
    return confirmationMessage;
    }
    
});

