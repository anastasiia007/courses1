let num;
do {
  num = prompt("Vvedite chislo bolshe 100 ", "");
  if (isNaN(num)) alert("Error!");
  if (num == null) break;
  if (num >= 100) alert("Thank you!");
} while (num <= 100 || isNaN(num));
