const hour = +prompt('Enter number of hours?');


if(!isNaN(hour)){
     const mathematicalOperation = hour * 3600;
    alert(`${hour} hour * 3600 = ${mathematicalOperation} second`);

} else {
    alert('Not a valid number.')
}



