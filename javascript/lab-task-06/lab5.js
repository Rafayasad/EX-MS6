function doHomework(abc)
{
    alert("start Work");
}
function call(callback)
{
 var abc=alert("work done");
 callback(abc)
}
doHomework();
setTimeout(call,500);