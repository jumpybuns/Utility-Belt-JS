// get parameters by name from url
// regex looks for "?" or "&" or "#"

const getParameterValue = (paraName, url) => {
  if (!url) url = window.location.href;
  const regex = new RegExp(`[?&]${paramName}(=([^&#]*))`);
  const results = regex.exec(url);

  // console.log(results)
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

export default getParameterValue;

// EXAMPLE:
// const PARAM_TO_EXTRACT = 'paramTwo';
// const URL = 'https://www.testURL.com/?paramOne=one&paramTwo=Ethan+Pierce';
// log(getParameterValue(PARAM_TO_EXTRACT, URL));

// go to regexr.com to play with regex
