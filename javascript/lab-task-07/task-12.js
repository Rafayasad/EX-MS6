var string = prompt("Enter a string which start from java .");
function tocheck(name)
{
    return name.startsWith('java');
}
alert(tocheck(string));