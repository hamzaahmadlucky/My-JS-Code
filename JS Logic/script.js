function objReturn(firstName, ...args) {
  let arr = [];
  args.forEach((arg) => arr.push(arg));
  let obj = {
    FirstName: firstName,
    others: arr,
  };
  return obj;
}

console.log(objReturn("Hamza", "Ali", "Ahmad"));
