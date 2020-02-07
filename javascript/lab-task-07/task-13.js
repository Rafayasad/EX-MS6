var userInp = prompt("enter a string: ");
function toupper(str)
{
    var a = str.split(' ');
    var newWord = [];
    for(var i = 0 ; i < a.length ; i++)
    {
        newWord.push(a[i].charAt(0).toUpperCase()+a[i].slice(1));
    }
    return newWord.join(' ');
}
alert(toupper(userInp));

