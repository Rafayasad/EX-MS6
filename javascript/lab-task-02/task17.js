var num1,num2,op,result;
alert("Welcome To Calculator.");
num1 = prompt("Enter the first number: ");
num2 = prompt("Enter the second number: ");
op = prompt("Enter the operation(+ , - , * , /): ");
if(op === '+')
{
    result = parseInt(num1) + parseInt(num2);
    alert("The Addition of 2 number is : "+num1+" "+op+" "+num2+" = "+result);
}
else if(op === '-')
{
    result = parseInt(num1) - parseInt(num2);
    alert("The Substraction of 2 number is : "+num1+" "+op+" "+num2+" = "+result);
}
else if(op === '*')
{
    result = parseInt(num1) * parseInt(num2);
    alert("The Multiplication of 2 number is : "+num1+" "+op+" "+num2+" = "+result);
}
else if(op === '/')
{
    result = parseInt(num1) / parseInt(num2);
    alert("The Division of 2 number is : "+num1+" "+op+" "+num2+" = "+result);
}
else
{
    alert("you entered incorrect variable.");
}