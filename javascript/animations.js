var boxDoc = document.querySelector('#background');
var navDoc = document.querySelector('nav');

const dotNumbers = 25, time = 10, dotSpawnY = boxDoc.offsetHeight - 20;
var dots = [];

for (let index = 0; index < dotNumbers; index++) {
    // Create the dot obj, this store his actual x and y pos, x generated randomly
    let dot = {
        divElement: document.createElement('div'),
        x: Math.round(boxDoc.offsetWidth*Math.random() + navDoc.offsetWidth),
        y: dotSpawnY

    }
    dot.divElement.setAttribute('class', 'box-dot-background');
    
    dot.divElement.style.top = dot.y;
    dot.divElement.style.left = dot.x;

    dots.push(dot);
    // Add the dot to the background
    boxDoc.appendChild(dot.divElement);

    
}

function dotAnimation() {
    for (let index = 0; index < dots.length; index++) {
        const element = dots[index];
        if (element.y < 40) {
            element.y = dotSpawnY;
            element.x = Math.round(boxDoc.offsetWidth*Math.random() + navDoc.offsetWidth);
        }
        
        element.y -= 3;
        element.divElement.style.top = element.y;
    }
    setTimeout("dotAnimation()", time);
}

dotAnimation();