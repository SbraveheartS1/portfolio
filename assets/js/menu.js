document.addEventListener("DOMContentLoaded", (event) => {

    let button = document.querySelector(".layout__menu-toggle");
    let aside = document.querySelector(".layout__aside");

    let icon = document.querySelector(".menu-toggle__icon");
    console.log(icon);
    button.addEventListener("click", (event) => {
        let visible = document.querySelector(".layout__aside--visible");

        if(!visible){
            aside.classList.add("layout__aside--visible");

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        }else{
            aside.classList.remove("layout__aside--visible");
            
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    })

    window.addEventListener("resize", (event) => {
        let size = parseInt(document.body.clientWidth);
        
        if(size <= 1060){
            aside.classList.remove("layout__aside--visible");
            icon.classList.remove("fa-xmark");
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-bars");
        }
    })
})