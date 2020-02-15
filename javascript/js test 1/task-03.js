var arr = [
    {name: 'Asher', age: 22},
    {name: 'Zubair', age: 20},
    {name: 'Kashif', age: 23},
    {name: 'Wasif', age: 17},
    {name: 'Hanzala', age: 28}
    ]
function interchange()
{
    var b = arr.splice(3,1,{name :'siddiq',age :22});
    return b;
}
// console.log(interchange(arr));
// console.log(arr);

function pushh()
{
    var p = arr.push({name :'umair',age :19});
    return p;
}
// console.log(pushh(arr));
// console.log(arr);

function poop()
{
    var p = arr.shift({name :'umair',age :19});
    return p;
}
// console.log(poop(arr));
// console.log(arr);

var d = new Date();
function add_date()
{
    for(var i=0 ; i<5 ;i++){
        var x = arr[i].createdAt= d;
    }
    return x;
}
// console.log(add_date(arr));
// console.log(arr);