// create an element
// className is optional
// this can be easily appended to add ids and other tags

const createElement = (tag, className) => {
  const el = document.createElement(tag);
  if (className) el.classList.add(className);
  return el;
};

export default createElement;

// EXAMPLE:
// const root = createElement("main", "root");
// body.appendChild(root);
