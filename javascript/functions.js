
var isTemplateBoxChecked = false;

function changeTheme() {
    const colorRel = document.getElementById("rel-color").getAt;
    isTemplateBoxChecked = !isTemplateBoxChecked;
    
    if (isTemplateBoxChecked) return colorRel.setAttribute("href", "css/colors/white.css");
    return colorRel.setAttribute("href", "css/colors/black.css");
}

function linkClicked(id) {
    const links = document.getElementsByClassName("link");
    for (let index = 0; index < links.length; index++) {
        const element = links[index];
        element.setAttribute("class", "link");
    }
    document.getElementById(`link-${id}`).setAttribute("class", "link link-selected");
}
