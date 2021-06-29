// UTILITY BELT MAIN PAGE
// EXAMPLES AND SOME MORE DETAILS IN THE INDIVIDUAL COMPONENT PAGES

//console log

const log = (content) => {
  console.log(content);
};

//proper case function

const properCase = (string) => {
  return `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;
};

// query selector with optional scope

const select = (selector, scope) => {
  return (scope || document).querySelector(selector);
};

// addEventListener wrapper
// capture is optional
// !!capture insists the capture is a boolean

const listen = (target, event, callback, capture = false) => {
  target.addEventListener(event, callback, !!capture);
};

// sanitize input - alternative to RegEx
// ensures data conforms to expected results before submission

const sanitizeInput = (inputValue) => {
  const div = document.createElement("div");
  div.textContent = inputValue;
  return div.innerHTML;
};

// create an element
// className is optional
// this can be easily appended to add ids and other tags

const createElement = (tag, className) => {
  const el = document.createElement(tag);
  if (className) el.classList.add(className);
  return el;
};

// delete child elements, all the content that is passed in

const deleteChildElements = (parentElement) => {
  let child = parentElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
};

// add class with optional query scope

const addClass = (selector, className, scope) => {
  (scope || document).querySelector(selector).classList.add(className);
};

// check for iOS
// as oppsed to windows or linux
// MSStream to avoid IE11

const isIOS = () => {
  return (
    (/iPad|iPhone|iPod/.test(navigator.platform) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) &&
    !window.MSStream
  );
};

// get parameters by name from url
// regex looks for "?" or "&" or "#"

const getParameterValue = (paramName, url) => {
  if (!url) url = window.location.href;
  const regex = new RegExp(`[?&]${paramName}(=([^&#]*))`);
  const results = regex.exec(url);

  // console.log(results)
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};
