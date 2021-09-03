//Local Storage

let maincolor = localStorage.getItem('color_option');

console.log(maincolor);

if (maincolor !== null) {
    console.log("it's not empty");

    document.documentElement.style.setProperty('--main-color', maincolor)

    document.querySelectorAll('.color-list li').forEach(element => {

        element.classList.remove('active');

        if(element.dataset.color === maincolor){
            element.classList.add('active');
        }
    });

    
}



//make setting btn work

let gearBtn = document.querySelector('.settbtn');
let divSett = document.querySelector('.setting-box');
let showDiv = document.querySelector('.sett-overlay');


gearBtn.onclick = function (){
    divSett.classList.toggle('open');
    this.classList.toggle('fa-spin');
    showDiv.classList.toggle('showing')

    showDiv.onclick = function (){
        if(divSett.classList.contains('open')){

            divSett.classList.remove('open');
            gearBtn.classList.toggle('fa-spin')
            showDiv.classList.remove('showing')
        }
    }
}








//switch color
const colorLi = document.querySelectorAll(".color-list li")

colorLi.forEach(li => {

    li.addEventListener("click", (e) => {

        //set color on root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)

        //full local storage

        localStorage.setItem("color_option", e.target.dataset.color);

        //remove active
        e.target.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active')
        });


        e.target.classList.add("active")

    })
})




//random background
let backgroundImge = true;

//var to controle the interval

let backgroundInterval;
//check if there background
let mainbackground = localStorage.getItem('background_option');

if(mainbackground !== null){

    if(mainbackground === 'true'){

        backgroundImge = true;

    }else{
        backgroundImge = false;
    }
    console.log(mainbackground)
}

//remove active class



//random background
const backgroundLi = document.querySelectorAll(".random-background span");


backgroundLi.forEach(span => {

    span.addEventListener("click", (e) => {

        //remove active
        e.target.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active');
        });

        //add active class
        e.target.classList.add("active");


        if(e.target.dataset.background === "yes"){
        
            backgroundImge = true;

            randomizeImg();
        
            localStorage.setItem('background_option', true)
            
        } else {
            backgroundImge = true;
            clearInterval(backgroundInterval)
            localStorage.setItem('background_option', true)
        }

    })
})


//select landing page elemnet
let landPage = document.querySelector('.landing-page');


//Get Array Of Imgs

let imgArray = ["01.jpg", "02.jpg", "03.jpg"];



function randomizeImg() {

    if (backgroundImge ===true){

        backgroundInterval = setInterval (() => {

            //get random number
            let randomNun = Math.floor(Math.random() * imgArray.length);
        
            //change the background
            landPage.style.backgroundImage = 'url("images/' + imgArray[randomNun] + '")';
        }, 5000);
    }
}

randomizeImg();



// span transition

let ourskills = document.querySelector('.skills')


window.onscroll = function () {

    //skills offset top

    let skillsOffTop = ourskills.offsetTop;

    //skills outer height
    let skillsoutheight = ourskills.offsetHeight;

    //widndow height

    let windowHeight = this.innerHeight;

    //window scrool top

    let windowscroll = this.pageYOffset + .000000001;

if(windowscroll > (skillsOffTop + skillsoutheight - windowHeight)){

    let allSkills = document.querySelectorAll('.skills-box .skill-prograss span');

    allSkills.forEach(skill => {
        skill.style.width = skill.dataset.progress;
        skill.innerHTML = `${skill.dataset.progress}`;
    })
    
}
}




//our gallary

let ourGallary = document.querySelectorAll('.gallary img')

ourGallary.forEach(img =>{
    img.addEventListener('click', (e) =>{

        //creat over lay element

        let overlay = document.createElement('div')
        
        //add class to overlay

        overlay.className = 'popup-overlay';

        //append overlay to body
        document.body.appendChild(overlay);

        overlay.innerHTML = "hello hoso"

        //creat the popup

        let popupbox = document.createElement('div')

        //add class to the popup

        popupbox.className = 'popup-box';

        //create img
        let popupImg = document.createElement('img')

        //set img source
        popupImg.src = img.src;

        //creat p 
        let popupP = document.createElement("p");
        popupP.innerHTML = img.dataset.original;

        popupP.className = 'popup-p'
        
        console.log(img.dataset.original);

        //adding 

        overlay.appendChild(popupbox);
        overlay.appendChild(popupP);
        popupbox.appendChild(popupImg);

        overlay.onclick = (e) => {
            e.target.style.display = "none"
        }
    })
})



//bullets

//select all bullet
const allBulls = document.querySelectorAll('.nav-bullet .bullet');

//select all links 

const alllinks = document.querySelectorAll('.links a');

function scrolling(elements){
    elements.forEach(ele => {
        ele.addEventListener('click', (e) =>{
    
            e.preventDefault();
    
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}
scrolling(allBulls);
scrolling(alllinks);

//bullet display

let bullSpan = document.querySelectorAll('.bullet-option span');

let bullDiv = document.querySelector('.nav-bullet');

let mainBull = localStorage.getItem('show_option')

if(mainBull !== null){

    bullSpan.forEach(span => {
        span.classList.remove('active');
    });

    if(mainBull === "block") {

        bullDiv.style.display = "block"
        document.querySelector('.bullet-option .yes').classList.add("active")


    }else{

        bullDiv.style.display = "none"
        document.querySelector('.bullet-option .no').classList.add("active")


    }

}

bullSpan.forEach(span => {

    span.addEventListener('click', (e) =>{

        e.target.parentElement.querySelectorAll('.active').forEach(span => {
            span.classList.remove('active');
        });

        //add active class
        e.target.classList.add("active");

        //set local storage



        if(span.dataset.display === 'show'){

            bullDiv.style.display = 'block';

            localStorage.setItem("show_option", "block");


        }else{

            localStorage.setItem("show_option", "none");

            bullDiv.style.display = 'none';

        }
    })
})

//reset button 

document.querySelector(".reset-btn").onclick = function () {

    localStorage.clear();
    //localStorage.removeItem('show_option');
    //localStorage.removeItem('color_option');
    //localStorage.removeItem('background_option');

    //window reloaded

    window.location.reload();
    
};


//toggle menu

let toggleBtn = document.querySelector('.menu-btn');
let tLinks = document.querySelector('.links');
let linkSpans = document.querySelectorAll('.menu-btn span')
console.log(linkSpans)


toggleBtn.onclick = function (e) {

    e.stopPropagation();

    this.classList.toggle('rotat');

    tLinks.classList.toggle('open');
    
};

//click any way to close the menu bar

document.addEventListener("click", (e) => {
    if(e.target !== toggleBtn && e.target !== tLinks){

        //check if the menu is open
        if(tLinks.classList.contains("open")){
            toggleBtn.classList.toggle('rotat')
            tLinks.classList.toggle('open')
        }

    }else{
        console.log('thisis not the span')
    }
})


//stop the propagation of li

tLinks.onclick = function (e) {
    e.stopPropagation();
}