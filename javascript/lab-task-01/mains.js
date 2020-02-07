
// var name = prompt("Enter your name dude !");
// alert(name);

// var number = prompt("enter a number : ");
// if(number%2==0)
// {
//     alert("Number is Even.");
// }
// else{
//     alert("Number is ODD.");
// }

//task 3:-
/*var num = 5;
var Newnum = ++num;
alert(Newnum);
Newnum = Newnum + num--;
alert(Newnum);
Newnum = Newnum + --num;
alert(Newnum);
Newnum = Newnum + --num;
alert(Newnum);
Newnum = Newnum + num;
alert(Newnum);
alert("22==22 proved !");
*/


// var day;
// day = prompt("Enter a number : ");
// if(day==1){
//     alert("Today is monday");
// }
// else if(day==2){
//     alert("Today is Tuesday");
// }
// else if(day==3){
//     alert("Today is Wednesday");
// }
// else if(day==4){
//     alert("Today is Thursday");
// }
// else if(day==5){
//     alert("Today is Friday");
// }
// else if(day==6){
//     alert("Today is Saturday");
// }
// else if(day==7){
//     alert("Today is Sunday");
// }
// else{
//     alert("The number is invalid please insert a correct number (1-7).");
// }


// var num,nums;
// nums=9;
// for(num=1;num<=10;num++){
//     document.write(nums + "*" + num + "=" + " " + nums*num);
//     document.write("<br />");
// }


alert("Welcome To Farenheit/Celcius Convertor.");
var num;
num = prompt("Choose anyone number : 1. farenhite to celcius 2. celcius to farenhite");
if(num==1)
{
    var f = prompt("Enter a value of farenhite :");
    alert("Temp (farenhite to celcius)= " + (f-32)*(5/9));
}
else if(num==2)
{
    var c = prompt("Enter a value of celcius :");
    alert("Temp (celcius to farenhite)= " + (c*9/5)+(32) );
}
else{
    alert("Invalid number! (1-2)");
}

