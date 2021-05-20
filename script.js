function randomPin(){
    const randomNumber=Math.random()*10000;
    const pinNumber=Math.round(randomNumber);
    return pinNumber;
}


function createPin(){
    const inputPin=document.getElementById('generate-pin');
    inputPin.value=randomPin();
    resetAll();
}

function resetAll(){
    const typedInput=document.getElementById('typed-input');
    typedInput.value="";
    const currectPin=document.getElementById('currect');
    const inCurrectPin=document.getElementById('incurrect');

    currectPin.style.display='none';
    inCurrectPin.style.display='none';
}



const btnClick=document.getElementById('cliked-btn');
btnClick.addEventListener('click',function(event){
    const digit=event.target.innerText;
    if(isNaN(digit)){
        if('C'==digit){
            const typedInput=document.getElementById('typed-input');
            typedInput.value="";
        }
        if('E'==digit){
            const typedInput=document.getElementById('typed-input');    
            typedInput.value = typedInput.value.substring(0, typedInput.value.length - 1);
        }
   }
   else{
    const typedInput=document.getElementById('typed-input');
    typedInput.value=typedInput.value+digit
   }
   const count=document.getElementById('count');
   count.innerText=i;

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