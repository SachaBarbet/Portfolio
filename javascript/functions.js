var isTemplateBoxChecked = false;

function changeTheme() {
    const colorRel = document.getElementById("colorRel");
    isTemplateBoxChecked = !isTemplateBoxChecked;
    
    if (isTemplateBoxChecked) return colorRel.setAttribute("href", "css/colors/white.css");
    return colorRel.setAttribute("href", "css/colors/black.css");
}

async function generateTimeline(timeline) {
    const data = await fetch(`../assets/json/${timeline}.json`).then(data => data.json());
    for (let index = 0; index < data.length; index++) {
        const element = array[index];
        
    }
    return
}
