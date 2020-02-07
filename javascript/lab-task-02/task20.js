var num1,num2;
num1 = prompt("Enter a number one : ");
num2 = prompt("Enter a number two : ");
if(num1==num2)
{
    alert(num1+" is equal to "+num2);
}
else if(num1>num2)
{
    alert("The greater number of "+num1+" and "+num2+" is "+num1);
}
else if(num1<num2)
{
    alert("The greater number of "+num1+" and "+num2+" is "+num2);
}
else
{
    alert("Entered a number variable.");
}
