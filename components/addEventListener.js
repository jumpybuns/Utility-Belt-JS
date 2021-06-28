// addEventListener wrapper
// capture is optional
// !!capture insists the capture is a boolean

const listen = (target, event, callback, capture = false) => {
  target.addEventListener(event, callback, !!capture);
};

// EXAMPLE:
// const eventLog = (e) => console.log(e.target);

// listen(body, "click", eventLog);
