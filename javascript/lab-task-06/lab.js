var data = [
    {
        country: 'China',
        population: 140957,
    },
    {
        country: 'India',
        population: 1339,
    },
    {
        country: 'USA',
        population: 32445946355,
    },
    {
        country: 'Indonesia',
        population: 263991379,
    }
];
function popp(x)
{
    return x.population > 160000000;
}
console.log(data.filter(popp));