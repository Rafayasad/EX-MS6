var fruits = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
  var userInp = prompt("Enter a fruit name?").toLowerCase();
  function match_fruits_name(str)
  {
      return str.name == userInp;
  }
  var userSearch = fruits.find(match_fruits_name);
  console.log(userSearch);