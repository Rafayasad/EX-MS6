var secretNum = 6,guessNum;
alert("GUESS GAME");
guessNum = prompt("Enter a number which you guessed: ");
if(secretNum==guessNum)
{
    alert("Bingo! Correct answer..");
}
else if(secretNum+1==guessNum || secretNum-1==guessNum)
{
    alert("Close enough to the correct answer");
}
else
{
    alert("Try again.");
}


if(mark1<0 || mark1>100)
    {
    alert("You entered incorrect marks in subject one.");
    }
    else if(mark2<0 || mark2>100)
    {
    alert("You entered incorrect marks in subject two.");
    }
    else if(mark3<0 || mark3>100)
    {
    alert("You entered incorrect marks in subject three.");
    }
    else
    {
    
    }