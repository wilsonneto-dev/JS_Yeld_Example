function* fibonacci(n) {
  var a = 0,
    b = 1,
    current;

  while (true) {
    current = a;

    yield current;
    console.log('yeld rolou...');

    a = b;
    b = current + b;
  }
}

const sequence = fibonacci(10);

for (let i = 0; i < 10; i++) {
  console.log(sequence.next().value);
  console.log('next chamado');
  console.log(sequence);
}
