var userInp = prompt("Enter a number from 1-10 :");
var rand = Math.floor(Math.random() * 11) + 1;
if(userInp == rand)
{
    alert("Good Work..");
}
else
{
    alert("Not matche..");
}
