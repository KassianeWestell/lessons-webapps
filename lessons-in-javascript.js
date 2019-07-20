//Lessons in Javascript

//Print name properly in alert popup
var name = prompt("What is your name");
name = name.toLowerCase();
name = name[0].toUpperCase() + name.slice(1);
alert(name);
