function validateInput(){
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);

    let operator = document.getElementById("operator").value;

    let msg = "";
    let result = 0;

    if(isNaN(num1)){
        msg = "Number 1 input is invalid";
    }else if(isNaN(num2)){
        msg = "Number 2 input is invalid";
    }
    else if(operator == 0){
        msg = "Please select your operator for the calculation";
    }else{
        msg = "";
        if(operator == "+"){
            result = num1 + num2;
        }else if(operator == "-"){
            result = num1 - num2;
        }else if(operator == "*"){
            result = num1 * num2;
        }else if(operator == "/"){
            result = num1 / num2;
        }
        document.getElementById("result").value = result;
        document.getElementById("msg").innerHTML = msg;
        return;
    }
    if(msg != ""){
        document.getElementById("msg").style.display = "block";
        document.getElementById("msg").innerHTML = msg;
        document.getElementById("result").value = "";
    }
    
}