document.write("<h1>Task-02</h1>");
var d = new Date();
var mm = d.getMonth()+1;
var dd = d.getDate();
if(mm<10)
{
    mm = '0' + mm;
}
if(dd<10)
{
    dd = '0' + dd;
}
document.write("i ) "+mm+"-"+dd+"-"+d.getFullYear());
document.write("<br />");
document.write("ii ) "+mm+"/"+dd+"/"+d.getFullYear());
document.write("<br />");
document.write("iii ) "+dd+"-"+mm+"-"+d.getFullYear());
document.write("<br />");
document.write("iv ) "+dd+"/"+mm+"/"+d.getFullYear());
