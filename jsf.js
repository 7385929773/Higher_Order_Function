//Progression 1
const modifiedfood= ["pizza", "burger", "fingerShips", "donuts", "springRoll"];
var val = modifiedfood.slice(1,4);
console.log(val);
//Progression 2
const modifiedfood=["pizza", "burger", "fingerShips", "donuts", "springRoll"];
modifiedfood.splice(2, 0, "noodles", "icecream");
console.log(modifiedfood);
//Progression 3
const numberArray = [12,324,213,4,2,3,45,4234];
var num;
var Even = numberArray.filter(isEven);
function isEven(num)
{
 return num%2==0;
}
console.log(Even);
//Progression 4 
const numberArray = [12,324,213,4,2,3,45,4234];
const nonPrime=numberArray.filter(nonprime);
    function nonprime (num)
    {
    for (let i = 2; i < num; i++)
     {
        if (num % i === 0) return true;
      }
      return null;
}
console.log(nonPrime);
//OROROOOOOOOOOOOOOOORRRRRRRRRRRRRRRRR
var nonPrime = _.reject([12,324,213,4,2,3,45,4234], function (num){
    for (let i = 2; i < num; i++)
     {
        if (num % i === 0) return null;
      }
      return true;

});
console.log(nonPrime);

//Progression 5
const numberArray = [12,324,213,4,2,3,45,4234];
const isEven=numberArray.filter((num)=>(num%2)==0);
    console.log(isEven);
    //Progression 6
    const myarray = [11,34,20,5,53,16];
    const  findSqureOfNumbers = myarray.map((num)=> num*num);
    console.log(findSqureOfNumbers);
//Progression 7

const myarray = [2,3,5,10];
const multiply=myarray.reduce(function (initial,item)
{
    return initial*item;
})
console.log(multiply);







