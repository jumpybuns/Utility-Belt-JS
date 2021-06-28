// add class with optional query scope

const addClass = (selector, className, scope) => {
  (scope || document).querySelector(selector).classList.add(className);
};

export default addClass;

// EXAMPLE:
// addClass("body", "purple");
