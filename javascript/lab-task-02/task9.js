var mark1,mark2,mark3,totalno,total,percent;
mark1=prompt("Enter the marks you obtained in subject one:");
if(mark1>=0 && mark1<=100)
{   
}
else
{
    alert("you entered incorrect marks.");
}
mark2=prompt("Enter the marks you obtained in subject two:");
if(mark2>=0 && mark2<=100)
{   
}
else
{
    alert("you entered incorrect marks.");
}
mark3=prompt("Enter the marks you obtained in subject three:");
if(mark3>=0 && mark3<=100)
{   
}
else
{
    alert("you entered incorrect marks.");
}
totalno=prompt("Enter the total number:");
if(mark1<=100 && mark2<=100 && mark3<=100)
{
total = parseInt(mark1) + parseInt(mark2) + parseInt(mark3);
percent = parseInt((total/totalno)*100);
document.write("<h1>Marks Sheet</h1>");
document.write("<br />");
if(percent>=80 && percent<=100)
{
    document.write("Total marks: "+totalno);
    document.write("<br />");
    document.write("Obtained marks: "+total);
    document.write("<br />");
    document.write("Percentage:"+percent+"%");
    document.write("<br />");
    document.write("Grade: A-one");
    document.write("<br />");
    document.write("Remarks: Excellent");
}
else if(percent>=70 && percent<=79)
{
    document.write("Total marks:"+totalno);
    document.write("<br />");
    document.write("Obtained marks:"+total);
    document.write("<br />");
    document.write("Percentage:"+percent+"%");
    document.write("<br />");
    document.write("Grade: A");
    document.write("<br />");
    document.write("Remarks: Good");
}
else if(percent>=60 && percent<=69)
{
    document.write("Total marks:"+totalno);
    document.write("<br />");
    document.write("Obtained marks:"+total);
    document.write("<br />");
    document.write("Percentage:"+percent+"%");
    document.write("<br />");
    document.write("Grade: B");
    document.write("<br />");
    document.write("Remarks: You need to improve.");
}
else if(percent>=0 && percent<=59)
{
    document.write("Total marks:"+totalno);
    document.write("<br />");
    document.write("Obtained marks:"+total);
    document.write("<br />");
    document.write("Percentage:"+percent+"%");
    document.write("<br />");
    document.write("Grade: Fail");
    document.write("<br />");
    document.write("Remarks: Sorry..!");
}
else
{
    alert("Please enter a correct numbers.");
}
}
else if(mark1<0 || mark1>100)
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
    alert("you did something wrong..!");
}

