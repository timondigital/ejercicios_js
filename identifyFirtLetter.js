function areYouPlayingBanjo(name) {
  // Implement me
  return (
    name +
    (name.toLowerCase().startsWith("r") ? " plays " : " does not play ") +
    "banjo"
  );
}

console.log(areYouPlayingBanjo("RPaul"));
