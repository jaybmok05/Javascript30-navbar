const navMenu = document.querySelector("#header-nav");
const navToggler = document.querySelector(".top-navToggler");

navToggler.addEventListener("click", () => {

    let visibleMenu = navMenu.getAttribute("data-visible");

    if(visibleMenu === "false"){
        navMenu.setAttribute("data-visible", true);
        navToggler.setAttribute("aria-expanded", true);  
    } 

    else if (visibleMenu === "true"){
        navMenu.setAttribute("data-visible", false);
        navToggler.setAttribute("aria-expanded", false);
    }

})

const header = document.querySelector("h1");
const mark = document.querySelector(".yellow-text");
console.log(mark.style.color);


 