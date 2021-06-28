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

export default isIOS;

// EXAMPLE:
// log(isIOS());
