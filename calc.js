function display(num){
    result.value+=num       //result.value=result.value+num
}

function ac(){
    result.value=" "
}
function equal(){
    // eq=result.value      result.value=eval(eq)
    result.value=eval(result.value)     //eval()    =>  evaluates the expression
}
function backspace(){
   data=result.value
    result.value=data.slice(0,-1)
}