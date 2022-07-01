const aliceBobGreet = (inName) => {
  if(['Alice', 'Bob'].includes(inName)) {
    console.log(`Hello ${inName}`);
  }
}

console.log(aliceBobGreet("Alice"));
