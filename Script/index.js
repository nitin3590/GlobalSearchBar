function setHours(){
    if(localStorage.getItem("hour24")=="true"){
        localStorage.setItem("hour24","false");
    }else{
        localStorage.setItem("hour24","true");
    }
}

function setSeconds(){
    if(localStorage.getItem("seconds")=="true"){
        localStorage.setItem("seconds","false");
    }else{
        localStorage.setItem("seconds","true");
    }
}


function showTime() {
    var date = new Date();
    var h = date.getHours(); //0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    if(localStorage.getItem("hour24")=="true"){
        if(localStorage.getItem("seconds")=="true"){
            var time = h + ":" + m + ":" + s;
        }else{
            var time = h + ":" + m ;
        }
    }else{
        if (h == 0) {
            h = 12;
        }
    
        if (h > 12) {
            h = h - 12;
            session = "PM";
        }
    
        if (h == 12) {
            session = "PM";
        }
    
        if(localStorage.getItem("seconds")=="true"){
            var time = h + ":" + m + ":" + s + " " + session;
        }else{
            var time = h + ":" + m + " " + session;
        }
    }

    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    setTimeout(showTime, 500);
}

showTime();

var sEngine = localStorage.getItem("engine");

function searchEngineChecker(s_Engine) {
    if (s_Engine == "google") {
        document.getElementById("sDuck").style.opacity = 0.5;
        document.getElementById("sYahoo").style.opacity = 0.5;
        document.getElementById("sBing").style.opacity = 0.5;
    } else if (s_Engine == "duck") {
        document.getElementById("sGoogle").style.opacity = 0.5;
        document.getElementById("sYahoo").style.opacity = 0.5;
        document.getElementById("sBing").style.opacity = 0.5;
    } else if (s_Engine == "yahoo") {
        document.getElementById("sDuck").style.opacity = 0.5;
        document.getElementById("sGoogle").style.opacity = 0.5;
        document.getElementById("sBing").style.opacity = 0.5;
    } else if (s_Engine == "bing") {
        document.getElementById("sDuck").style.opacity = 0.5;
        document.getElementById("sYahoo").style.opacity = 0.5;
        document.getElementById("sGoogle").style.opacity = 0.5;
    }
}
searchEngineChecker(sEngine);

document.getElementById("mainSearch").addEventListener("input", function (e) {
    sessionStorage.setItem("search", e.target.value);
    $("#google").attr("href", "https://www.google.com/search?q=" + sessionStorage.getItem('search'));
    $("#duck").attr("href", "https://duckduckgo.com/?q=" + sessionStorage.getItem('search'));
    $("#bing").attr("href", "https://www.bing.com/search?q=" + sessionStorage.getItem('search'));
    $("#yahoo").attr("href", "https://search.yahoo.com/search?p=" + sessionStorage.getItem('search'));
});
$("#google").attr("href", "https://www.google.com/search?q=" + sessionStorage.getItem('search'));
$("#duck").attr("href", "https://duckduckgo.com/?q=" + sessionStorage.getItem('search'));
$("#bing").attr("href", "https://www.bing.com/search?q=" + sessionStorage.getItem('search'));
$("#yahoo").attr("href", "https://search.yahoo.com/search?p=" + sessionStorage.getItem('search'));

if (localStorage.getItem("engine") == null) {
    localStorage.setItem("engine", "google");
}

function setEngine(param3) {
    localStorage.setItem("engine", param3);
    document.getElementById("sGoogle").style.opacity = 0.8;
    document.getElementById("sDuck").style.opacity = 0.8;
    document.getElementById("sYahoo").style.opacity = 0.8;
    document.getElementById("sBing").style.opacity = 0.8;

    searchEngineChecker(param3);
}

document.getElementById("mainSearch").addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        document.getElementById(localStorage.getItem("engine")).click();
    }
});

function hours() {
    if (localStorage.getItem("hour24") == "true") {
        localStorage.setItem("hour24", false);
    } else if (localStorage.getItem("hour24") == "false") {
        localStorage.setItem("hour24", true);
    }
}

function seconds() {
    if (localStorage.getItem("clock") == "true") {
        localStorage.setItem("clock", false);
    } else if (localStorage.getItem("clock") == "false") {
        localStorage.setItem("clock", true);
    }
}

$(document).mouseup(function (e) {
    if ($(e.target).closest("#changer").length === 0) {
        $("#highlight").slideUp();
    }
});