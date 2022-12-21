const hour = +prompt('Enter number of hours?');
let mathematicalOperation;

if(!isNaN(hour)){
    mathematicalOperation = hour * 3600;
    alert(mathematicalOperation);
    console.log(mathematicalOperation)
} else {
    alert('You entered incorrect data.')
}



