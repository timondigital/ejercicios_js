function digitize(n) {
  //code here
  return Array.from(n + "")
    .map((n) => +n)
    .reverse();
}

function digitize2(n) {
  return Array.from(String(n), Number).reverse();
}

function digitize3(n) {
  return (n + "").split("").map(Number).reverse();
}

console.log(digitize(1357));
