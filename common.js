const hour = +prompt('Enter number of hours?');
let mathematicalOperation;

if(!isNaN(hour)){
    mathematicalOperation = hour * 3600;
    alert(`${hour} hour * 3600 = ${mathematicalOperation} second`);
} else {
    alert('Not a valid operation.')
}



