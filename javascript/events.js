function runOnScroll(element) {
    // not the most exciting thing, but a thing nonetheless
    console.log(element.scrollHeight);
};
  
  // grab elements as array, rather than as NodeList
  const element = document.querySelector(`#box-content`);
  
  // and then make each element do something on scroll
window.addEventListener(
    "scroll",
    () => runOnScroll(element),
    { passive: true }
);