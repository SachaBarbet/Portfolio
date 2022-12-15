const sections = ["main", "formations", "career", "projects", "contact"];
const sectionsBis = ["enterprise", "task", "project"];
var isTemplateBoxChecked = false;

function switchSection(section) {

    const secCap = section[0].toUpperCase() + section.slice(1);

    const listList = document.getElementsByClassName("link");
    for(let i = 0; i < listList.length; i++) {
        listList[i].style.color = "var(--color-secondary)";
    }

    const sectionList = document.getElementsByTagName("section");
    for(let i = 0; i < sectionList.length; i++) {
        sectionList[i].style.display = "none";
    }

    document.getElementById(`link${secCap}`).style.color = "var(--color-orange)";
    document.getElementById(`section${secCap}`).style.display = "flex";
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