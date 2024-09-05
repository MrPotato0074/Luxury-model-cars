const slides = document.querySelectorAll(".slides img")
let slideNum = 0
const oldPrices = [100, 89, 120]
const prices = [79.99, 67, 99.99]
const models = ["Bentley Continental GT", "Mercedes-AMG C 63", "Bugatti Chiron Super Sport"]
const priceText = document.getElementById("price-text");
const oldPriceText = document.getElementById("old-price-text")
const discountText = document.getElementById("discount")
const carModel = document.getElementById("model")

document.addEventListener("DOMContentLoaded", ()=>{
    if(slides.length>0){
        slides[slideNum].classList.add("sliderStyle")
        setInterval(next, 5000)
}
})
const calculateDiscount = (oldPrice, newPrice)=>{
    const discount = Math.floor(((oldPrice - newPrice)/oldPrice) *100)
    discountText.innerText = `${discount}% off`
}

const slideShower= (index)=>{
    if(index >= slides.length){
        slideNum = 0
    }
    else if(index < 0){
        slideNum = slides.length - 1
    }
    slides.forEach(slide=>{
        slide.classList.remove("sliderStyle")
    })
    slides[slideNum].classList.add("sliderStyle")
    calculateDiscount(oldPrices[slideNum], prices[slideNum])
    oldPriceText.innerText = `Was: €${oldPrices[slideNum].toFixed(2)}`
    priceText.innerText = `Now: €${prices[slideNum].toFixed(2)}`;
    carModel.innerText = models[slideNum]
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