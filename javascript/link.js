function linkClicked(id) {
    const links = document.getElementsByClassName("link");
    for (let index = 0; index < links.length; index++) {
        const element = links[index];
        element.setAttribute("class", "link");
    }
    document.getElementById(`link-${id}`).setAttribute("class", "link link-selected");
}