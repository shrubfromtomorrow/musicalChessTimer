defaultTime = ["01", "10"];
if (defaultTime[0].length < 2 && defaultTime[1].length < 2) {
            document.querySelector('#topTimerText').innerHTML="0"+defaultTime[0]+':'+"0"+defaultTime[1];
        }
        else if (defaultTime[0].length < 2) {
            document.querySelector('#topTimerText').innerHTML=defaultTime[0]+':'+"0"+defaultTime[1];
        }
        else if (defaultTime[1].length < 2) {
            document.querySelector('#topTimerText').innerHTML="0"+defaultTime[0]+':'+defaultTime[1];
        }
        else {
            document.querySelector('#topTimerText').innerHTML=defaultTime[0]+':'+defaultTime[1];
        }
if (defaultTime[0].length < 2 && defaultTime[1].length < 2) {
            document.querySelector('#bottomTimerText').innerHTML="0"+defaultTime[0]+':'+"0"+defaultTime[1];
        }
        else if (defaultTime[0].length < 2) {
            document.querySelector('#bottomTimerText').innerHTML=defaultTime[0]+':'+"0"+defaultTime[1];
        }
        else if (defaultTime[1].length < 2) {
            document.querySelector('#bottomTimerText').innerHTML="0"+defaultTime[0]+':'+defaultTime[1];
        }
        else {
            document.querySelector('#bottomTimerText').innerHTML=defaultTime[0]+':'+defaultTime[1];
        }

let topDiv = document.querySelector("#top");
let topActive = false;
let audioTop = document.getElementById("audioTop");
audioTop.loop = true;
topDiv.onclick = codeTop;
function codeTop () {
    if (topActive) {
        return
    }
    if (bottomActive) {
        bottomActive = false;
        audioBottom.pause();
        clearInterval(topTimerInterval);
        // audioBottom.currentTime = 0;
    }
    bottomTimer();
    bottomDiv.innerHTML = "<span class='icon-clock'></span>";
    topActive = true;
    topDiv.innerHTML = "";
    audioTop.play();
}

let bottomDiv = document.querySelector("#bottom");
let bottomActive = false;
let audioBottom = document.getElementById("audioBottom");
audioBottom.loop = true;
bottomDiv.onclick = codeBottom;
function codeBottom () {
    if (bottomActive) {
        return
    }
    if (topActive) {
        topActive = false;
        audioTop.pause();
        clearInterval(bottomTimerInterval);
        // audioTop.currentTime = 0;
    }
    topTimer();
    topDiv.innerHTML = "<span class='icon-clock'></span>";
    bottomDiv.innerHTML = "";
    bottomActive = true;
    audioBottom.play();
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
            audioBottom.pause();
            audioBottom.currentTime = 0;
        }
        else if (sec <= 00 && min > 00) {
            sec = sec + 60;
            min--;
        }
        if (currentTopTimeMin.toString().length < 2 && currentTopTimeSec.toString().length < 2) {
            document.querySelector('#topTimerText').innerHTML="0"+currentTopTimeMin+':'+"0"+currentTopTimeSec;
        }
        else if (currentTopTimeMin.toString().length < 2) {
            document.querySelector('#topTimerText').innerHTML="0"+currentTopTimeMin+':'+currentTopTimeSec;
        }
        else if (currentTopTimeSec.toString().length < 2) {
            document.querySelector('#topTimerText').innerHTML=currentTopTimeMin+':'+"0"+currentTopTimeSec;
        }
        else {
            document.querySelector('#topTimerText').innerHTML=currentTopTimeMin+':'+currentTopTimeSec;
        }
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
            audioTop.pause();
            audioTop.currentTime = 0;
        }
        else if (sec <= 00 && min > 00) {
            sec = sec + 60;
            min--;
        }
        if (currentBottomTimeMin.toString().length < 2 && currentBottomTimeSec.toString().length < 2) {
            document.querySelector('#bottomTimerText').innerHTML="0"+currentBottomTimeMin+':'+"0"+currentBottomTimeSec;
        }
        else if (currentBottomTimeMin.toString().length < 2) {
            document.querySelector('#bottomTimerText').innerHTML="0"+currentBottomTimeMin+':'+currentBottomTimeSec;
        }
        else if (currentBottomTimeSec.toString().length < 2) {
            document.querySelector('#bottomTimerText').innerHTML=currentBottomTimeMin+':'+"0"+currentBottomTimeSec;
        }
        else {
            document.querySelector('#bottomTimerText').innerHTML=currentBottomTimeMin+':'+currentBottomTimeSec;
        }
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
