function randomPin(){
    const randomNumber=Math.random()*10000;
    const pinNumber=Math.round(randomNumber);
    return pinNumber;
}


function createPin(){
    const inputPin=document.getElementById('generate-pin');
    inputPin.value=randomPin();
}


const btnClick=document.getElementById('cliked-btn');
btnClick.addEventListener('click',function(event){
    const digit=event.target.innerText;
    console.log(digit);
   if(isNaN(digit)){
        if('C'==digit){
            const typedInput=document.getElementById('typed-input');
            typedInput.value="";
        }
   }
   else{
    const typedInput=document.getElementById('typed-input');
    typedInput.value=typedInput.value+digit
   }
})


function verifyPin(){
    const typedInput=document.getElementById('typed-input').value;
    const inputPin=document.getElementById('generate-pin').value;
    if(typedInput==inputPin){
        displayNotification('block','none');
    }
    else{
        displayNotification('none','block');
    }
}

function displayNotification(a,b){
    const currectPin=document.getElementById('currect');
    const inCurrectPin=document.getElementById('incurrect');

    currectPin.style.display=a;
    inCurrectPin.style.display=b;
}