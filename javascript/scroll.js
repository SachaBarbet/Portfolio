function runOnScroll(elements) {
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        const rect = element.getBoundingClientRect();
        if (rect.y < 250) {
            linkClicked(element.getAttribute("id").split('-')[1]);
        }
    }
};
  
const childElements = document.getElementsByTagName("section");

window.addEventListener("scroll", () => runOnScroll(childElements));