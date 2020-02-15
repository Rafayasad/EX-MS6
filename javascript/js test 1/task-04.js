var namm = "", arr = [
    {name: 'Asher', age: 22},
    {name: 'Zubair', age: 20},
    {name: 'Kashif', age: 23},
    {name: 'Wasif', age: 17},
    {name: 'Hanzala', age: 28}
    ]

function checkage(str)
{
    if(str.age>18 && str.age<28 && str.name.includes('f'));
    {
        namm+=str.name + " ";
    }
}
arr.filter(checkage);
console.log(namm);