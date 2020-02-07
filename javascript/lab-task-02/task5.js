var col = prompt("Enter the colour of Road Signal:")
if(col=='green' || col=='GREEN')
{
    alert("Vehicles can move now..");
}
else if(col=='red' || col=='RED')
{
    alert("Vehicles must stop..!");
}
else if(col=='yellow' || col=='YELLOW')
{
    alert("Vehicles should get ready to move");
}
else{
    alert("You Entered Invalid Colour");
}