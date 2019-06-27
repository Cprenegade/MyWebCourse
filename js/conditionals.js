let numOne = 1;
let stringOne = '1';
console.log('double ==', numOne == stringOne);
console.log('triple ===', numOne === stringOne);

const day = new Date().getDay();

if (day==1){console.log('Back to work');}
 else if (day==3){console.log('What day is it???  Its hump day!');}
  else if (day==6 || day==7){console.log('Party on.....its a weekend');}
   else {console.log('Its a weekday');}