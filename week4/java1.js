/*Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name,
geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y,
and married to Z with N kids."
Call that function 3 times with 3 different values for the
arguments.
© 2020*/
/*
function tellForture(childrin, partner, city, job){
    return "You will be a "+job+ " in" +city+", and married to "+partner+" with"+childrin+" kids.";
}
console.log(tellForture(2," Tharaa", " Bern", "Programmer"));
*/

/*Create an array to hold your top choices (colors, presidents,
whatever).
For each choice, log to the screen a string like: "My #1 choice is
blue."
Change it to log "My 1st choice, "My 2nd choice", "My 3rd
choice", picking the right suffix for the number based on what it
is.
We did not have loops yet, but you can try to use one with help of tutorials*/
/*
var colors=["red", "blue", "yellow", "black"];
var presidents=["kann", "kosai", "delbrin", "asma"];
var  car=["BMW","fiat"];

function favorite (colors, car, presidents){
    
    return "My First Color is "+ colors +" The president of world is "+presidents+" My Car is form brand "+car;
}
console.log(favorite(colors[0],car[0],presidents[1]));*/
/*

var languages =["hello world", "jksdabhklsal"];

function helloWourld(lang){
    switch(lang){
        case "DE":
            return "Hallo Welt";
        case "Spa":
            return "hsofhkolsdahfg";
        default:
            return "Hello World";
    }
}
document.write(helloworld("spa"))



function compsion(num1, num2){
    return num1 > num2 ? num1: num2;
}
document.write(compion(6,7));

function greatName(name, age, loca){
    return "My name is "+ name+" i'm "+ age +" years old and I live in "+loca;
}
console.log(greatName("kosai", 29, "bern"));

var name="gh";

var person={
    name: "kosai",
    age: 29,
    loca:"bern",
    hello: function(){
        return "hello "+ this.name;
    }
};
console.log(person.age.length);*/



function person(name, age, isMarried) {
    this.name= name;
    this.age= age;
    this.isMarried= isMarried;
    this.hello= function(){
        return "Hello "+this.name; 
    }
}
var kosai= new person("kosai", 38, true);
console.log(kosai.age);
console.log(Object.keys(kosai));
console.log(Object.values(kosai));


