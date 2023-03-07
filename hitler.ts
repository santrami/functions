function sayHi(person){
    if (person==="adolf hitler"){
        return;
    }
    console.log('Oh hi ${person}')
}

console.log(sayHi("adolf hitler")); //undefined
