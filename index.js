const display = document.getElementById("display");
let Sin = false
let Cos = false
let Tan = false
var displayLength = 0
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function appendToDisplay(input){
    if (display.value == "sin("){
        
        Sin = true
    } else if (display.value == "cos("){
        Cos = true

    } else if (display.value == "tan("){
        Tan = true

    }
    display.value += input;
    displayLength = display.value.length;

}



function clearDisplay(){
    Sin = false
    Tan = false
    Cos = false
    display.value = "";
    displayLength = 0


}

function calculate(){
    let lastCharacter = display.value[display.value.length -1];
    let paranthasesRight = "("
    let paranthesesLeft = ")"
    var radians


    if (Sin == true){
        if (lastCharacter == ")"){
             radians = toRadians(display.value.slice(4, displayLength -1));
        }else{
            radians = toRadians(display.value.slice(4, displayLength));
        }


        const sinValue = Math.sin(radians).toFixed(10);
        

        display.value = sinValue
        Sin = false
    } else if (Cos == true){

        if (lastCharacter == ")"){
            radians = toRadians(display.value.slice(4, displayLength -1));
       }else{
           radians = toRadians(display.value.slice(4, displayLength));
       }

        const cosValue = Math.cos(radians).toFixed(10);

        display.value = cosValue
        Cos = false

  
    }else if (Tan == true){
       if (lastCharacter == ")"){
             radians = toRadians(display.value.slice(4, displayLength -1));
        }else{
            radians = toRadians(display.value.slice(4, displayLength));
        }

        const tanValue = Math.tan(radians).toFixed(10);

        display.value = tanValue
        Tan = false

    }else if (display.value.includes(paranthasesRight) && !display.value.includes(paranthesesLeft)){
        try{
            display.value = display.value + paranthesesLeft
            display.value = eval(display.value)
        }
        catch(error){
            display.value = "Error"
        }

    }else{
        try{
            display.value = eval(display.value)
        }
        catch(error){
            display.value = "Error"
        }


    }


    displayLength = display.value.length;


}
function deleteNumber(){
     display.value = display.value.slice(0, -1);
     displayLength = display.value.length;

}