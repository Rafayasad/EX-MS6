var temp;
alert("Weather checking program.");
temp = prompt("Enter a temperature of your city: ");
if(temp>40)
{
    alert("It is too hot outside.");
}
else if(temp>30)
{
    alert("The Weather today is Normal.");
}
else if(temp>20)
{
    alert("Today’s Weather is cool.");
}
else if(temp>10)
{
    alert("OMG! Today’s weather is so Cool.");
}
else
{
    alert("You entered incorrect value of temperature.");
}