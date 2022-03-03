function table(number, limit) {
  if (limit === 0) {
    return;
  }
  table(number, limit - 1);
  console.log(number + " * " + limit + " = " + (number * limit));
}

function main() {
  console.log("Table of 2 till 10");
  table(2, 10);
  console.log("Table of 3 till 5");
  table(3, 5);
}

main();