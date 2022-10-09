defaultTime = [01, 10];
document.querySelector('#topTimerText').innerHTML = defaultTime[0]+':'+defaultTime[1];
document.querySelector('#bottomTimerText').innerHTML = defaultTime[0]+':'+defaultTime[1];


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
        topDiv.innerHTML = "";
    }
    else {
        if (bottomActive) {
            bottomActive = false;
            audioBottom.pause();
            clearInterval(bottomTimerInterval);
            // audioBottom.currentTime = 0;
        }
        topTimer();
        bottomDiv.innerHTML = "";
        topDiv.innerHTML = "<span class='icon-clock'></span>";
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
        audioBottom.currentTime = 0;
        bottomActive = false;
        bottomDiv.innerHTML = "";
    }
    else {
        if (topActive) {
            topActive = false;
            audioTop.pause();
            clearInterval(topTimerInterval);
            // audioTop.currentTime = 0;
        }
        bottomTimer();
        topDiv.innerHTML = "";
        bottomDiv.innerHTML = "<span class='icon-clock'></span>";
        bottomActive = true;
        audioBottom.play();
    }
}

let stopButton = document.querySelector("#stop");
let stopActive = true;;
stopButton.onclick = stopcode;
function stopcode () {
    window.location.reload();
}

let topTimerInterval;
let currentTopTimeMin = defaultTime[0];
let currentTopTimeSec = defaultTime[1];

function topTimer(){
    var min = currentTopTimeMin;
    var sec = currentTopTimeSec;
    // document.querySelector('#topTimerText').innerHTML=min+':'+sec;
    topTimerInterval = setInterval(function(){
        sec--;
        currentTopTimeMin = min;
        currentTopTimeSec = sec;
        if (sec < 00 && min <= 00) {
            clearInterval(topTimerInterval);
        }
        else if (sec < 00 && min > 00) {
            sec = sec + 60;
            min--;
        }
        document.querySelector('#topTimerText').innerHTML=min+':'+sec;
    }, 1000);
}

let bottomTimerInterval;
let currentBottomTimeMin = defaultTime[0];
let currentBottomTimeSec = defaultTime[1];

function bottomTimer(){
    var min = currentBottomTimeMin;
    var sec = currentBottomTimeSec;
    // document.querySelector('#topTimerText').innerHTML=min+':'+sec;
    bottomTimerInterval = setInterval(function(){
        sec--;
        currentBottomTimeMin = min;
        currentBottomTimeSec = sec;
        if (sec < 00 && min <= 00) {
            clearInterval(bottomTimerInterval);
        }
        else if (sec < 00 && min > 00) {
            sec = sec + 60;
            min--;
        }
        document.querySelector('#bottomTimerText').innerHTML=min+':'+sec;
    }, 1000);
}

let switchButton = document.querySelector("#switch");
let switches = 0;
switchButton.onclick = function() {
    if (switches % 2 == 0) {
        topDiv.style.backgroundColor = "#24273a";
        bottomDiv.style.backgroundColor = "#5b6078";
        topDiv.style.color = "#5b6078";
        bottomDiv.style.color = "#24273a";
        switches++;
    }
    else {
        topDiv.style.backgroundColor = "#5b6078";
        bottomDiv.style.backgroundColor = "#24273a";
        topDiv.style.color = "#24273a";
        bottomDiv.style.color = "#5b6078";
        switches++;
    }
}
