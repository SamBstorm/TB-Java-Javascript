let text = "Finalement, nous ne saurons pas qui a gagné la final, entre les finlandais et les belges. Enfin, cela ne change rien.";

let regex = /\bfin[a-z]*/gi;

console.log(text.match(regex));

text = "Pour avoir du cash, ils ne faut pas hésiter à avoir un cashflow! Attention, cash flows, mais bien cashflows! Pas des cashflowers non plus...."

regex = /cash(?=flows?[\W])/gi;

console.log(text.match(regex));

text = "1000 milliards de 1000 sabords! Cela fait 18 millions d'euros! Je vous ai dit + de 10 milles fois, qu'il fallait vendre 1 million à la fois!";

// regex = /\d+ mill(ion|iard)s?(?=\W)/gi;
regex = /[0-9]+ mill(ion|iard)s?(?=\W)/gi;

console.log(text.match(regex));

