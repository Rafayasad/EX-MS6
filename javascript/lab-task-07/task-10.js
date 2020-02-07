var inp = prompt("enter a string to check its palindrome or not?");
function tocheck(name)
{
    var revstr = name.split("").reverse().join("");
    return name === revstr;
   
}
alert("palindrome = "+tocheck(inp));