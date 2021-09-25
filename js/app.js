const d = document;
const ls = localStorage;
let $selectors = d.querySelectorAll("[data-darkTheme]");

toggle("#toggle","dark__theme");

function toggle(btn, classDark){

    const lightTheme = () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        ls.setItem('theme', "light");
    }
    const darkTheme = () => {
        $selectors.forEach(el => el.classList.add(classDark));
        d.getElementById("toggle").checked = true;
        ls.setItem('theme', "dark");
    }
    
    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            if (d.getElementById("toggle").checked){
                darkTheme();
            }else{
                lightTheme();
            }
        }
    })

    d.addEventListener("DOMContentLoaded", (e) => {
        if(ls.getItem('theme') === null) ls.setItem("theme", "light");
        if(ls.getItem('theme') === "light") lightTheme();
        if(ls.getItem('theme') === "dark") darkTheme();
    });
}