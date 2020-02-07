var day;
day = prompt("Enter the day name: ");
if(day==='monday' || day==='tuesday' || day==='wednesday' || day==='thursday'|| day==='friday')
{
    alert("It's a weekday.");
}
else if(day==='saturday')
{
    alert("It's a weekend.");
}
else if(day==='sunday')
{
    alert("Yay! It's a holiday.");
}
else
{
    alert("Enter a correct name in string..!");
}