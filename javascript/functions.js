const sections = ["career", "formation", "projects", "contact"];

function switchSection(sectionID) {
    document.getElementsByTagName("section").forEach(element => {
        element.style.display = "none";
    });

    document.getElementById(sectionID).style.display = "flex";
}
