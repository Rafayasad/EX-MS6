var students = ['hassan', 'salman', 'kamran', 'rashid', 'faizan', 'noor'];
function check_an(name)
{
    return name.endsWith("an");
}
var find = students.filter(check_an);
console.log(find);