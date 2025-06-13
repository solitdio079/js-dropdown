import "./style.css"
import downArrow from "./down.svg"
import upArrow from "./up.svg"
const dropdownBtns = document.querySelectorAll(".dropdown-btn")

const dropdownBtnArray = [...dropdownBtns]

dropdownBtnArray.forEach(btn => {
    btn.style.setProperty("--data-arrow", `url("${downArrow}")`)
    const target = document.querySelector(`#${btn.getAttribute("data-toggle")}`) 
    if(target.classList.contains("hidden")){
        btn.style.setProperty("--data-arrow", `url("${downArrow}")`)
    }else{
        btn.style.setProperty("--data-arrow", `url("${upArrow}")`)
    }
    btn.addEventListener("click",() => {
        target.classList.toggle("hidden")
        if(target.classList.contains("hidden")){
            btn.style.setProperty("--data-arrow", `url("${downArrow}")`)
        }else{
            btn.style.setProperty("--data-arrow", `url("${upArrow}")`)
        }


    })
})

/*   */
const pagination = document.querySelector(".pagination")
const slides = document.querySelectorAll("img.slides")
const slidesArray = [...slides]
let currentSlide = 0
const prevBtn = document.querySelector(".prevBtn")
const nextBtn = document.querySelector(".nextBtn")

// add pagination circles
const renderPagination = () => {
    pagination.innerHTML = ""
    slidesArray.forEach((item,index) => {
    const paginationSpan = document.createElement("span")
    if(currentSlide === index)
        paginationSpan.style.background = "#010506"
    paginationSpan.setAttribute("data-target", index)
    pagination.appendChild(paginationSpan)

    paginationSpan.addEventListener("click", (e) => {
        console.log(e.target.getAttribute("data-target"))
        console.log(currentSlide)
        sendToTarget(e.target.getAttribute("data-target"))
    })
})
}
renderPagination()


prevBtn.addEventListener("click", bactractCarousel)



function advanveCarousel (){
    slidesArray.forEach(item => {
        //console.log(item.style.translate)
        if(currentSlide < slidesArray.length-1){
            item.style.translate = `calc(${item.style.translate||"0px"} - 100vw) 0`
            
        }
        
    })
    if(currentSlide < slidesArray.length-1)
        currentSlide++
    renderPagination()

}

function bactractCarousel() {
    slidesArray.forEach((item) => {
        //console.log(item.style.translate)
        if(currentSlide > 0){
            item.style.translate = `calc(${item.style.translate||"0px"} + 100vw) 0`
          
        }
       
    })
    if(currentSlide > 0)
        currentSlide--
    renderPagination()

}

setInterval(autoPlay, 5000)

function sendToTarget(target){
    console.log((parseInt(target) + currentSlide)*100)
    slidesArray.forEach((item) => {
        item.style.translate = `calc(-1 * ${(parseInt(target) + currentSlide)*100}vw - ${item.style.translate||"0px"}) 0`

    })
   
    currentSlide = +target
    renderPagination()

}

function autoPlay(){
    if(currentSlide < slidesArray.length-1) {
      advanveCarousel()
    }else{
        sendToTarget(0)
    }
}

nextBtn.addEventListener("click", advanveCarousel)



