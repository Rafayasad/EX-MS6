// unshift for 1
// push for 2
// unshift foe 3
// shift for 4
// pop for 5
// splice for 6
// splice for 7
var colourNames = ["red","yellow","blue","black"];
var color = prompt("what color you wants to add in a color array : ");
document.write("The updated array list is(Color add in Beginning): "+(colourNames.unshift(color)));
document.write("<br />");
document.write(colourNames);
document.write("<br />");
document.write("<br />");
var colorr = prompt("what color you wants to add at last in a color array : ");
document.write("The updated array list is(Color add in Beginning): "+(colourNames.push(colorr)));
document.write("<br />");
document.write(colourNames);
document.write("<br />");
document.write("<br />");
var colorrr = prompt("what color you wants to add in a beginning color array : ");
var colorrrr = prompt("Add one more color please : ");
document.write("The updated array list is(Color add in Beginning): "+(colourNames.unshift(colorrr,colorrrr)));
document.write("<br />");
document.write(colourNames);
document.write("<br />");
document.write("<br />");
alert("deleted from beginning item is :");
document.write("The updated array list is(Color delelte in Beginning): "+(colourNames.shift(colorrrr)));
document.write("<br />");
document.write(colourNames);
document.write("<br />");
document.write("<br />");
alert("deleted from last item is :");
document.write("The updated array list is(Color delelte in last): "+(colourNames.pop(colorrrr)));
document.write("<br />");
document.write(colourNames);
document.write("<br />");
document.write("<br />");
var AddRandomColor = prompt("Which position you wants to add a colorName : ");
var Colors = prompt("what color you wants to add : ");
document.write("Randomly Add color is : "+(colourNames.splice(AddRandomColor,"0",Colors)));
document.write("<br />");
document.write(colourNames);
document.write("<br />");
document.write("<br />");
var delColor = prompt("Which position you wants to delete a colorName : ");
var colordell = prompt("how many colors you wants to delete : ");
document.write("deleting color is : "+(colourNames.splice(delColor,colordell,0)));
document.write("<br />");
document.write(colourNames);
document.write("<br />");
document.write("<br />");


