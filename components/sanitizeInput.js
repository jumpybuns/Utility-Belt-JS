// sanitize input - alternative to RegEx
// ensures data conforms to expected results before submission

const sanitizeInput = (inputValue) => {
  const div = document.createElement("div");
  div.textContent = inputValue;
  return div.innerHTML;
};

//EXAMPLE:
// const dirtyInput = "<script>alert('xss attack')</script>";
// const cleanInput = sanitizeInput(dirtyInput);
// console.log(cleanInput);
