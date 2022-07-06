function darkmode(){
    var SetTheme = document.body;
    SetTheme.classList.toggle("dark-mode")
    var theme;
    if(SetTheme.classList.contains("dark-mode")){
        theme = "DARK";
    }else{
        theme = "LIGHT";
    }
    // save to localStorage
    localStorage.setItem("PageTheme", JSON.stringify(theme));
    // ensure you convert to JSON like i have done -----JSON.stringify(theme)
}

setInterval(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    if(GetTheme === "DARK"){
        document.body.classList = "dark-mode";
        document.getElementById("dmodebutton").style.color = "white"
        document.getElementById("dmodebutton").innerHTML = "☀️"
    }else{
        document.body.classList = "";
        document.getElementById("dmodebutton").style.color = "black"
        document.getElementById("dmodebutton").innerHTML = "🌙"
    }
}, 5);

