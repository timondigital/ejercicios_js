const orderedCount = function (text) {
  // Implement me!

  return Array.from(
    text
      .split("")
      .reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map())
  );
};

console.log(orderedCount("abracadabra"));
