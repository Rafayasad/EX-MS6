const fruits =[
    {name: 'apples', quantity: 2},
      {name: 'bananas', quantity: 0},
       {name: 'cherries', quantity: 5}
   ];
   var inputName=prompt("Enter your Fruits name:").toLowerCase();
   function checkfruits(fruits)
   {
       return fruits.name==inputName;
   }
   var userSearch= fruits.find(checkfruits);
   document.write(userSearch);
   