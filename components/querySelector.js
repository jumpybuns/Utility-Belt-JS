// query selector with optional scope

const select = (selector, scope) => {
  return (scope || document).querySelector(selector);
};

export default select;

// EXAMPLE:
// const body = select('body');
// log(body);
