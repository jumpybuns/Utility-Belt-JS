// delete child elements, all the content that is passed in

const deleteChildElements = (parentElement) => {
  let child = parentElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
};

export default deleteChildElements;

// EXAMPLE:
// deleteChildElements(body)
