// question
//  <script>
//  alert( “I’m JavaScript!’);
//  </script>
//  Whats the error in this ?

alert("i'm javascript")

// Q.2
// alert(“I’m invoked!”);

alert("Im invoked!");


// Q.3
alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`World`)
alert(3 +
1
+ 2); // this is multiple line code and its working

//ans: javascript is synchronous process its executing the code line by line

// Q.4
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
console.log(admin);
alert( admin ); // "Guvi geek"

// Q.5 Fix the below to alert hello Guvi geek
let Fname=10.5; 
fname = "Guvi";
lname = "geek"
let Name = fname+lname;
alert(`hello ${Name}` ); //use template literal to concat

// Q.6 the below to alert sum of two numbers
let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);

// Q.7 How to get the success in console.
let c = prompt("Enter a number?");
//Don't modify any code below this
if (c) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

//Q.8 How to get the correct score in console.
let value = prompt('How many runs you scored in this ball');
if (value == 4) {
      console.log("You hit a Four");
} else if (value == 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
} //ans use ==

// Q.9 Fix the code to welcome the Employee
let login = 'Employee';
let message1 = (login == 'Employee') ? 'welcome' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' : '';
console.log(message1);

// Q.10 Fix the code to welcome the boss

// You cant change the value of the msg
let message = "welcome boss";
if (null || 2 || undefined )
{
 let message = "welcome boss";
}
else
{
 let message = "Go away";
}
  console.log(message);


//   Change the code to print even numbers
  //You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 2) {
    console.log(num)
  }
// ans change num 2