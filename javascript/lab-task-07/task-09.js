var userInp = prompt("Enter a positive number : ");
if(userInp %3==0 && userInp %7==0)
{
    alert("yes its multiple of both 3 and 7");
}
else if(userInp %3==0)
{
    alert("yes its multiple of 3");
}
else if(userInp %7==0)
{
    alert("yes its multiple of 7");
}
else
{
    alert("invalid..");
}