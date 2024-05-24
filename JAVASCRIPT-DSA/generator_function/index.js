function* simpleGenerator() {
  console.log("Simple generator function");
  yield 10;
  console.log("Second call started");
  yield 20;
  console.log("third call started");
  yield 30;
}

const sg = simpleGenerator();
console.log(sg.next());
console.log(sg.next());
console.log(sg.next());
console.log(sg.next());

// generate sequential on button click
function* generateSequentialId() {
  let number = 0;
  while (true) {
    number++;
    yield number;
  }
}
const generateID = generateSequentialId();

function getId() {
  document.getElementById("dynamic_id").innerText = generateID.next().value;
}
