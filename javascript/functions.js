const sections = ["Main", "Formations", "Career", "Projects", "Contact"];
var isTemplateBoxChecked = false;

function switchSection(sectionName) {

    const listList = document.getElementsByClassName("link");
    const sectionList = document.getElementsByTagName("section");

    for(let i = 0; i < listList.length; i++) {
        listList[i].classList.remove("linkSelected");
    }

    for(let i = 0; i < sectionList.length; i++) {
        sectionList[i].classList.add("none");
    }

    document.getElementById(`link${sectionName}`).classList.add("linkSelected");
    document.getElementById(`section${sectionName}`).classList.remove("none");
}

function changeTheme() {
    const colorRel = document.getElementById("colorRel");
    isTemplateBoxChecked = !isTemplateBoxChecked;
    
    if (isTemplateBoxChecked) {
        colorRel.setAttribute("href", "css/colors/white.css");
    } else {
        colorRel.setAttribute("href", "css/colors/black.css");
    }
}