function isTriangle(a, b, c) {
  //   return (a + b > c) & (a + c > b) & (b + c > a) ? true : false;

  return a + b > c && a + c > b && b + c > a;
}

console.log(isTriangle(1, 2, 2));
