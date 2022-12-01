async function getSection(section) {
    if(!(section in sections)) return;

    const sectionID = `section${section[0].toUpperCase() + section.slice(1)}`;
    alert(sectionID);

    if(document.getElementById(`section${sectionID}`) !== null) return;

    const fetchTable = await fetch(`localhost/templates/${section}.html`);
    const fetchText = await fetchTable.text();

    const contentBox = document.getElementById("contentBox").innerHTML;
    document.getElementById("contentBox").innerHTML = contentBox + fetchText;

    switchSection(sectionID);
}
