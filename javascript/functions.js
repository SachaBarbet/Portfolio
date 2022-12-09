const sections = ["main", "formations", "career", "projects", "contact"];

function switchSection(secCap) {

    const listList = document.getElementsByClassName("link");
    const sectionList = document.getElementsByTagName("section");

    for(let i = 0; i < sectionList.length; i++) {
        sectionList[i].style.display = "none";
        listList[i].style.color = "var(--color-secondary)";
    }

    document.getElementById(`section${secCap}`).style.display = "flex";
    document.getElementById(`link${secCap}`).style.color = "var(--color-orange)";
}

async function getSection(section) {

    const secCap = section[0].toUpperCase() + section.slice(1);

    if(document.getElementById(`section${secCap}`) === null && section !== "main") {

        const fetchTable = await fetch(`./templates/${section}.html`);
        const fetchText = await fetchTable.text();
    
        const contentBox = document.getElementById("contentBox").innerHTML;
        document.getElementById("contentBox").innerHTML = contentBox + fetchText;
    }

    switchSection(secCap);
}

function buttonClick(buttonName) {
    getSection(buttonName);
}