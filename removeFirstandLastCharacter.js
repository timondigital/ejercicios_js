function array(arr) {
  //Good luck
  arr = arr.split(",");
  arr.pop();
  arr.shift();
  return arr.length ? arr.join(" ") : "null";

  //   return arr.split(",").slice(1,-1).join(" ") || null;
}
console.log(array("6,8,9,6,4"));
