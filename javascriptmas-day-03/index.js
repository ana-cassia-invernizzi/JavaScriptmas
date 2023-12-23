function calcTotalCandies(children, candy) {
 children = 6;
 candy = 25;
 const candyForChildren = Math.floor(candy / children);
 totalCandiesEaten = candyForChildren * children;
 
 console.log(totalCandiesEaten)
}

calcTotalCandies(3, 10)
calcTotalCandies(4, 20) 
calcTotalCandies(6, 25) 