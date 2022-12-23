const sections = ["Main", "Formations", "Career", "Projects", "Contact"];
var isTemplateBoxChecked = false;

function switchSection(sectionName) {

    const listList = document.getElementsByClassName("link");
    const sectionList = document.getElementsByTagName("section");

    for(let i = 0; i < listList.length; i++) {
        listList[i].style.color = "var(--color-secondary)";
    }

    for(let i = 0; i < sectionList.length; i++) {
        sectionList[i].style.display = "none";
    }

    document.getElementById(`link${sectionName}`).style.color = "var(--color-orange)";
    document.getElementById(`section${sectionName}`).style.display = "flex";
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