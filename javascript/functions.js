const sections = ["main", "career", "formations", "projects", "contact"];

function switchSection(section, sectionID) {

    const listID = `link${section[0].toUpperCase() + section.slice(1)}`;

    const listList = document.getElementsByClassName("link");
    const sectionList = document.getElementsByTagName("section");
    for(let i = 0; i < sectionList.length; i++) {
        sectionList[i].style.display = "none";
        listList[i].style.color = "#ffffff";
    }

    document.getElementById(sectionID).style.display = "flex";
    document.getElementById(listID).style.color = "#fca311";
}

async function getSection(section) {

    const sectionID = `section${section[0].toUpperCase() + section.slice(1)}`;

    if(document.getElementById(sectionID) === null && section !== "main") {

        const fetchTable = await fetch(`./templates/${section}.html`);
        const fetchText = await fetchTable.text();
    
        const contentBox = document.getElementById("contentBox").innerHTML;
        document.getElementById("contentBox").innerHTML = contentBox + fetchText;
    }

    switchSection(section, sectionID);
}
