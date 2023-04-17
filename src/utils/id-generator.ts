const idGenerator = (function* () {
  let id = 1;
  while (true) {
    yield id++;
  }
})();

export default idGenerator;
