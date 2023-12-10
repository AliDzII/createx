document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector(".header")
    window.addEventListener("scroll", function (){
        let scrollPossition = window.scrollY
        if(scrollPossition > 900){
            header.style.background = "#white"
        }
        else{
            header.style.background = "#ffdad5"
        }
    })
})