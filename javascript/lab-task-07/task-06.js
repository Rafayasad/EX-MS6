var userInp = prompt("Enter a user file name with extension: ");
document.write("File name is: "+userInp);
document.write("<br />");
var result = userInp.split(".").pop();
document.write("Extension is: "+result);