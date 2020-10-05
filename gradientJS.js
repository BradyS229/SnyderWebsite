let colorCount = 0;

function gradient(){
    let dom = document.getElementById("body");
    let a;

    a = document.getElementById("direction").value;

    //'-moz-linear-gradient(' + a + ', ' + x + ', ' + y + ')';
    let s = '-moz-linear-gradient(' + a;
    for(let i = 0; i < colorCount; i++){
        let d = 'color' + i;
        s = s + ', ' + document.getElementById(d).value;
    }
    s = s + ')';

    let p = document.getElementById("preMade").value;
    switch (p){
        case 'Default':
            s = '-moz-linear-gradient(' + a + ', ' + '#2a2a72' + ', ' + '#009ffd' + ')';
            break;
        case 'Rainbow':
            s = '-moz-linear-gradient(' + a + ', ' + 'red' + ', ' + 'orange' + ', ' + 'yellow' + ', ' + 'green' + ', ' + 'blue' + ', ' + 'purple' + ')';
            break;
        case 'Cotton Candy':
            s = '-moz-linear-gradient(' + a + ', ' + 'lightskyblue' + ', ' + 'lightpink' + ')';
            break;
        case 'Splatoon':
            s = '-moz-linear-gradient(' + a + ', ' + 'hotpink' + ', ' + 'greenyellow' + ')';
            break;
    }

    dom.style.backgroundImage = s;
}

function colors(){
    for(let i = 0; i < colorCount; i++){
        let h = 'color' + i;
        let j = 'break' + i;
        let gl = document.getElementById("gradientList");
        gl.removeChild(document.getElementById(h));
        gl.removeChild(document.getElementById(j));
    }

    colorCount = 0;
    let k = document.getElementById("num").value;
    for(let i = 0; i < k; i++){
        let l = document.getElementById("gradientList");
        let entry = document.createElement("input");
        entry.setAttribute("type", "color");
        entry.setAttribute("class", "boxes");
        let d = 'color' + colorCount;
        entry.setAttribute("id", d);
        let br = document.createElement("br");
        let u = 'break' + colorCount;
        br.setAttribute("id", u)
        l.appendChild(entry);
        l.appendChild(br);
        colorCount++;
    }
}

var currentImageIndex = -1,
    maxImageIndex = 0,
    images = [],
    changeInterval = 10000;

// prepares relevant variables to cycle throguh images
var setUp = function() {
    images = document.images;
    maxImageIndex = images.length;
    currentImageIndex = 0;
};

// changes the banner currently being displayed
var changeBanner = function() {
    var i;

    // either re-set the index to 0 if the max length was reached or increase the index by 1
    currentImageIndex = (currentImageIndex >= maxImageIndex - 1) ? 0 : currentImageIndex += 1;

    for (i = 0; i < maxImageIndex; i += 1) {
        images[i].hidden = (i !== currentImageIndex);
    }
};

// a function which is triggered following the `load` event
window.onload = function() {
    setUp();

    images[currentImageIndex].hidden = false; // show the first banner image;

    setInterval(changeBanner, changeInterval); // following a delay, keep changing the banner image by the specified interval
};