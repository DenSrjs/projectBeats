
//============================ menu ===================================
const btnMenu = document.querySelector(".gamburger-menu")
const menu = document.querySelector(".screen-menu")
const close = document.querySelector(".close")

btnMenu.addEventListener('click', function(){
    menu.classList.add('active')
})

close.addEventListener('click', function(){
    menu.classList.remove('active')
})

//=================================== slider =============================

const slider = document.querySelector("#slider-list")
const btnPrev = document.querySelector('#prev')
const btnNext = document.querySelector('#next')
const slides = document.querySelectorAll(".slider__item")

const step = 100
let currentStep = 0
let maxLeft = -(slides.length -1) * step

btnNext.addEventListener('click', ()=> {

    if(currentStep > maxLeft){
        currentStep -= step
    }

    slider.style.left = `${currentStep}%`
})

btnPrev.addEventListener('click', ()=> {

    if(currentStep < 0){
        currentStep += step
    }

    slider.style.left = `${currentStep}%`
})

//================================ team ====================================

const teamItem = document.querySelectorAll(".team__item")
const team = document.querySelectorAll(".team__general")
const triangle = document.querySelectorAll(".triangle-popup")

teamItem.forEach(team => {

    team.addEventListener('click', (e)=>{

        let targ = e.target

        if(targ.closest('.team__name')){

            const teamGeneral = team.querySelector(".team__general")
            const triangle = team.querySelector(".triangle-popup")

            if(teamGeneral.classList.contains('select')){

                hiddenGeneral()

            }else{

                hiddenGeneral()

                teamGeneral.classList.add('select')
                triangle.classList.remove('triangle-popup__inactive')
                triangle.classList.add('triangle-popup__active')

            }
        }
    })
})

function hiddenGeneral(){

    for(let i = 0; i < team.length; i++){

        if(team[i].classList.contains('select')){
            team[i].classList.remove('select')
        }

        if(triangle[i].classList.contains('triangle-popup__active')){
            triangle[i].classList.remove('triangle-popup__active')
            triangle[i].classList.add('triangle-popup__inactive')
        }
    }
}

//================================ feedback ====================================

const users = document.querySelectorAll(".user-avatar__item")

users.forEach(user => {

    user.addEventListener('click', (e)=>{

        let data = e.target.dataset

        if(!user.classList.contains('user-avatar__item--active')){
            hiddenActive(data.id)
            userVisible(data.id)
            user.classList.add('user-avatar__item--active')
        }else if(user.classList.contains('user-avatar__item--active')){
            return;
        }
    })
})

function hiddenActive(){

    const users = document.querySelectorAll(".user-avatar__item")

    for(let i = 0; i < users.length; i++){

        if(users[i].classList.contains('user-avatar__item--active')){
            users[i].classList.remove('user-avatar__item--active')
        }
    }
}

function userVisible(id){

    const feedbackUser = document.querySelectorAll('.feedback__item')

    feedbackUser.forEach(user => {

        if(user.classList.contains('feedback__active')){
            user.classList.remove('feedback__active')
        }

    })

    feedbackUser[id - 1].classList.add('feedback__active')
}

//========================================= form ================================

const myForm = document.querySelector('#my-form')

myForm.addEventListener('submit', (e)=>{

    e.preventDefault()

    if(valideteForm(myForm)){

        const data = {
            name: myForm.elements.name.value,
            phone: myForm.elements.phone.value,
            comment: myForm.elements.comment.value,
            to: myForm.elements.to.value,
        }

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', ()=>{
            let data = JSON.parse(xhr.response)
            if(data.status){
                showModal(data.message)
            }else{
                showModal(data.message)
            }
        })
    }
})

function valideteForm(form){

    let value = true

    if(!validateField(form.elements.name)){
        value = false
    }

    if(!validateField(form.elements.phone)){
        value = false
    }

    if(!validateField(form.elements.comment)){
        value = false
    }

    return value;
}

function validateField(field){
    field.nextElementSibling.textContent = field.validationMessage
    return field.checkValidity()
}

function showModal(text){
    const modal = document.querySelector('#message')
    modal.classList.add('modal-js-visible')

    const messageStatus = modal.querySelector('.message__text')
    messageStatus.textContent = text

    const close = modal.querySelector('#closeModal')
    close.addEventListener('click', ()=>{
        modal.classList.remove('modal-js-visible')
    })
}
