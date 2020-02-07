const students = ['hassan', 'salman', 'kamran', 'rashid', 'faizan', "noor"];
const filterValues = (name) => {
    return students.filter(data => {
        return data.toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
}
document.write(filterValues('an'));