//this is the data for holding which page we are on
let pageNumber = 0

const pages = [
    { copy:"a PDX-based front-end developer with 3+ years industry experience", 
        background: "#ADFFC0",
        circle: "#FFADEC"
    },
    { copy:"a visual artist, musician, and dancer.",
        background:"#FF9500",
        circle: "#006AFF"
    },
    { copy:"a creative with a background in science.",
        background:"#29D2D6",
        circle: "#D62D29",
    },
    { copy:`letting you download her <a href = "./assets/LRS Resume 2023.pdf">resume</a> :) `,
        background:"#0907F8",
        circle: "#F6F807",
    },
]

const nextTag = document.querySelector("footer img.next");
const prevTag = document.querySelector("footer img.prev");
const randomTag = document.querySelector("footer img.random")
const outputTag = document.querySelector("h2");
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")

//random button- pick a random slide
const random = function(){
    pageNumber = Math.floor(Math.random() * pages.length)
    updateSection()
}

// for next buttonincrease page number but restarts to 1 after 10
const next = function(){
    pageNumber = pageNumber +1

    if (pageNumber > pages.length-1){
        pageNumber = 0
    }
    updateSection()
}
//for previeous button- decreases page number restarts back to 10 after we go past 1
const previous = function(){
    pageNumber = pageNumber - 1 

    if(pageNumber<0){
        pageNumber = pages.length-1
    }
    updateSection()
}
//this will update the sections content and style
const updateSection = function(){
    outputTag.innerHTML = pages[pageNumber].copy
    circleTag.style.backgroundColor=pages[pageNumber].circle
    bodyTag.style.backgroundColor = pages[pageNumber].background
}

nextTag.addEventListener("click",function(){
    next()
  
})

prevTag.addEventListener("click", function(){
    previous()
})

randomTag.addEventListener("click", function(){
    random()
})


//when a user presses a key, check for arrow left or right
//and do next or previous corectly

document.addEventListener("keyup", function(event){
    if(event.key == "ArrowRight"){
        next()
    }
    if(event.key == "ArrowLeft"){
        previous()
    }
})