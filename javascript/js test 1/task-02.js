var Student_One =
{
Student_Name : 'Ahmed Abbasi',
Student_ID : 'J30052425300',
Subject_HTML : 80,
Student_CSS : 90,
Student_JAVASCRIPT : 90,
Student_BOOTSTRAP : 70,
Total_Marks : 400
}

var Student_Two =
{
Student_Name : 'Javed Akhtar',
Student_ID : 'J30052425300',
Subject_HTML : 60,
Student_CSS : 70,
Student_JAVASCRIPT : 65,
Student_BOOTSTRAP : 85,
Total_Marks : 400
}

var percent = ((330/400) * 100);
var percents = ((340/400) *100);
document.write("Name :"+Student_One.Student_Name);
document.write("<br />");
document.write("Student one percentage is :"+percent);
document.write("<br />");
document.write("<br />");
document.write("Name :"+Student_Two.Student_Name);
document.write("<br />");
document.write("Student two percentage is :"+percents);
document.write("<br />");
document.write("<br />");
if(percent > percents)
{
    document.write("Name :"+Student_One.Student_Name);
    document.write("<br />");
    document.write("Student one percentage is greater.He is eliage for solarship");
}
else if(percents > percent)
{
    document.write("Name :"+Student_Two.Student_Name);
    document.write("<br />");
    document.write("Student two percentage is greater.He is eliage for solarship");
}
else{
    document.write("invalid");
}

