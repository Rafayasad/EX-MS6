document.write("<h1>Task-01</h1>");
var d = new Date();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
document.write("Today is: "+days[d.getDay()]);
document.write("<br />");
document.write("Current time is:"+d.getHours()+" Hours :"+d.getMinutes()+" Minutes :"+d.getSeconds()+" Seconds ");
