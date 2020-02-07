var x = 32243;
function rev_num(a)
{
    a = a + "";
    return revNum = a.split("").reverse().join("");
}
document.write("Reverse number is: "+ rev_num(x));