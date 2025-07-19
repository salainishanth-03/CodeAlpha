let display=document.getElementById("display");
document.addEventListener("keydown",function(e){
    const btn=e.key;
    if("+-/*.0123456789".includes(btn)){
        append(btn);
    }
    else if(btn=="Enter"){
        e.preventDefault();
        calculate();
    }
    else if(btn=="Escape"){
        clearDisplay();
    }
});
function append(value){
    display.value+=value;
}
function clearDisplay(){
    display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="Error";
    }
}
window.onload=function(){
    display.focus();
}