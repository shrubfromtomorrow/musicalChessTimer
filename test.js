let topDiv = document.querySelector("#top");
let topActive = false;
let audioTop = document.getElementById("audioTop");
audioTop.loop = true;
topDiv.onclick = codeTop;
function codeTop () {
    if (topActive) {
        audioTop.pause();
        // audioTop.currentTime = 0;
        topActive = false;
    }
    else {
        if (bottomActive) {
            bottomActive = false;
            audioBottom.pause();
            // audioBottom.currentTime = 0;
        }
        topActive = true;
        audioTop.play();
    }
}

let bottomDiv = document.querySelector("#bottom");
let bottomActive = false;
let audioBottom = document.getElementById("audioBottom");
audioBottom.loop = true;
bottomDiv.onclick = codeBottom;
function codeBottom () {
    if (bottomActive) {
        audioBottom.pause();
        // audioBottom.currentTime = 0;
        bottomActive = false;
    }
    else {
        if (topActive) {
            topActive = false;
            audioTop.pause();
            // audioTop.currentTime = 0;
        }
        bottomActive = true;
        audioBottom.play();
    }
}