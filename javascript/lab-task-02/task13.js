var team1,team2,scores1,scores2;
team1 = prompt("Enter the name of team one: ");
team2 = prompt("Enter the name of team two: ");
scores1 = prompt("Enter the scores of "+team1+": ");
scores2 = prompt("Enter the scores of "+team2+": ");
if(scores1==scores2)
{
    alert("The match is Tie.");
}
else if(scores1>scores2)
{
    alert(team1+"have won the match.");
}
else if(scores1<scores2)
{
    alert(team2+"have won the match.");
}
else
{
    alert("Invalid value.");
}
