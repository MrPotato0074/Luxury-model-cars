const slide = document.querySelectorAll(".slide img")
let slideNum = 0
const prices = ["Price: $300","Price: $500","Price: $450"];
const priceText = document.getElementById("price-text");
document.addEventListener("DOMContentLoaded", ()=>{
    if(slide.length>0){
        slide[slideNum].classList.add("sliderStyle")
        setInterval(next, 5000)
}
})

const slideShower= (index)=>{
    if(index >= slide.length){
        slideNum = 0
    }
    else if(index < 0){
        slideNum = slide.length - 1
    }
    slide.forEach(slides=>{
        slides.classList.remove("sliderStyle")
    })
    slide[slideNum].classList.add("sliderStyle")
    priceText.textContent = prices[slideNum];
}

const next = ()=>{
    slideNum++
    slideShower(slideNum)
}

const back = ()=>{
    slideNum--
    slideShower(slideNum)
}
document.getElementById("next").addEventListener("click",next)
document.getElementById("back").addEventListener("click",back)