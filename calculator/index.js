function getNumber(num)
{
    var Number=num;
    if(num==='=')
    {
        document.getElementById('input').value=eval(document.getElementById('input').value);
    }
    else if(num==='AC')
    {
        document.getElementById('input').value="";
    }
    else if(num==='x^​2')
    {
        document.getElementById('input').value=Math.pow(document.getElementById('input').value,2);
    }
    else
    {
        document.getElementById('input').value+=num;
    }

}