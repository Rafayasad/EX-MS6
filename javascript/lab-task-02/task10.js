var item1,item2,q1,q2,p1,p2,totalCost;
var shippingCharge = 250;
item1 = prompt("Enter the name of an item one: ");
q1 = prompt("Enter the quantity of an item one: ");
p1 = prompt("Enter the price of an item one: ");
item2 = prompt("Enter the name of an item two: ");
q2 = prompt("Enter the quantity of an item two: ");
p2 = prompt("Enter the price of an item two: ");
totalCost = (parseInt(q1) * parseInt(p1)) + (parseInt(q2) * parseInt(p2));
document.write("<h1>Shopping Cart</h1>");
document.write("<br />");
document.write("Price of "+item1+" is: "+p1);
document.write("<br />");
document.write("Quantity of "+item1+" is: "+q1);
document.write("<br />");
document.write("Price of "+item2+" is: "+p2);
document.write("<br />");
document.write("Quantity of "+item2+" is: "+q2);
document.write("<br />");
document.write("<br />");
document.write("Shipping charges is: "+shippingCharge);
document.write("<br />");
document.write("<br />");
document.write("Total cost of your item is: "+totalCost+" PKR");
document.write("<br />");
if(totalCost>2000)
{
var Discount = parseInt(totalCost/10);
document.write("Discounted price is: "+parseInt(totalCost - Discount)+" PKR");
}
else
{
document.write("Thanks for shopping..!");
}

