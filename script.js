/*     THEMES     */
var current = 0;
var themes = [];
fetch('data.json')
    .then(response => response.json())
    .then(data =>
        {
            themes = data[0];
            if(localStorage.getItem("theme")){current = parseInt(localStorage.getItem("theme"));}else{current = 0;}
            theme();
        }
    );
function theme(){
    document.querySelector(':root').style.setProperty('--pri',themes[current].pri);
    document.querySelector(':root').style.setProperty('--sec',themes[current].sec);
    document.querySelector(':root').style.setProperty('--font',themes[current].font);
}
function changeTheme(){
    if(current==themes.length-1){current=0;}else{current+=1;}
    localStorage.setItem("theme", current);
    theme();
}