function findSmallestInt(args) {
  //   let small = args[0];
  //   args.map((a) => {
  //     a < small ? (small = a) : null;
  //   });
  //   return small;

  //   let small = args.sort((a, b) => a - b);
  //   return small[0];

  return Math.min(...args);
}
console.log(findSmallestInt([78, 56, 232, -12, 8]));
