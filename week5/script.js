// user login
// news feed
/*
let database = [
    {
        username: "Susanne",

        password: "supersecret"
    },
    {
        username: "Mark",

        password: "secretive"

    },
    {
        username: "Hussam",

        password: "allaham"

    }
];

let newsfeed = [
    {
        author: "Mark",
        title: "This is Mark's title",
        summary: "This is the summary of Mark's new entry."
    },
    {
        author: "Hussam",
        title: "This is Hussam's title",
        summary: "This is the summary of Hussam's new entry."
    },
    {
        author: "Andrena",
        title: "This is Andrena's title",
        summary: "This is the summary of Andrena's new entry."
    }
];

//check if user login is correct then show news feed.
let username = prompt("What is your username?");
let password = prompt("What is your password?");
signIn(username, password);

function signIn(user, pass){
    if(isUserVAlid(user,pass)){
        console.log(newsfeed);
        for (let i =0; i< newsfeed.length; i++){
            let obj=newsfeed[i];
            Object.keys(obj).forEach(function(news){
                document.write
            })
            document.write(Object.keys(newsfeed[i])+'<br>'+Object.values(newsfeed[i]));
        }
    }else {
        alert("Your login details are not correct.");
    }
    
}
*/
/*
function isUserVAlid(usr,pw){
    for(i=0;i<database.length;i++){
        if(usr === database[i].username && pw ===database[i].password){
            return true;
        }
        return false;
    }
}
/*
   let isUserVAlid= database.forEach(function(user){   
        if(usr === user.username && pw === user.password) {
            return true;
        } 
    });
    return isUserVAlid;
}
*/


/* while */
/*let counter =0;
while(counter <10){
    console.log(counter);
    counter++;
}
console.log("after whilke loop");
*/

/* do while*/
/*let counter1 =10;
do {
    console.log(counter1);
    counter1--;
}
while(counter1 >0)
console.log("after whilke loop");
*/

/* for loop */
/*for (let counter2 =10; counter2 >0; counter2--){
    console.log(counter2);
}
*/
//exercise 1
/*
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array[2]);
array.shift();
array.sort();
array.push("Kiwi");
array.shift();
array.reverse();

console.log(array);
*/
// exercise 2
/*
for(i=0;i<=20;i++){
    if(i%2===0){
        console.log(i +" is Even");
    }else{
        console.log(i +" is Odd");
    }
}
*/




/*Exercise: Multiplication tables
Write a for loop that will iterate from 0 to 10.
For each iteration of the for loop, it will multiply the number by 9.
Log the result (e.g. "2 * 9 = 18").
*/


// Multiplication tables
/*for (var multiplier = 0; multiplier <= 10; multiplier++) {
 for (var i = 0; i <= 10; i++) {
   var result = multiplier * i;
   console.log(multiplier + ' * ' + i + ' = ' + result);
 }
}
*/

/*Exercise: Arrays
// using this array,
  // var array = ["Banana", "Apples", "Oranges", "Blueberries"];
Access and output Oranges.
Remove the Banana from the array.
Sort the array in order.
Put "Kiwi" at the end of the array.
Remove "Apples" from the array.
Sort the array in reverse order, i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
You should at the end have ["Kiwi", "Oranges", "Blueberries"]
*/
/*
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array[2]);
array.shift();
array.sort();
array.push("Kiwi");
array.shift();
array.reverse();
array.splice(0,1); delete 
console.log(array);

*/

/*Exercise
Odd / even reporter
Write a for loop that will iterate from 0 to 20.
For each iteration, it will check if the current number is even or odd.
Report the result to the screen (e.g. "2 is even").
*/


/*Exercise
Odd / even reporter
Write a for loop that will iterate from 0 to 20.
For each iteration, it will check if the current number is even or odd.
Report the result to the screen (e.g. "2 is even").
*/

let  c=2;
if (true){
     c=5;
    console.log(c);
}
console.log(c);



















