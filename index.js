// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }
// let names = ['bob', 'mary', 'milly']
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