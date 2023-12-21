
function writeCards(names, event){
    let newArry = [];
    for (let i= 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    newArry.push(message);
}
return newArry;
}


function countDown(){
    for (let j = 10; j>=0; j--){
        console.log(j)

    }
}
countDown()