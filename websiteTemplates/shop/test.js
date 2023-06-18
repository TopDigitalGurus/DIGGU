const air = document.querySelector('.air')
const airMax = document.querySelector('.airMax')
const yeezy = document.querySelector('.yeezy')
const allSection = [air , airMax , yeezy]
const airCardContainer = document.querySelector('.airCardContainer')
const airMaxCardContainer = document.querySelector('.airMaxCardContainer')
const yeezyCardContainer = document.querySelector('.yeezyCardContainer')
const productSection = document.querySelector('.productSection')

////////////navigation
air.addEventListener('click' , ()=>{
    if(air.classList.contains('bigSection')){
        return
    }else{
        air.classList.add('bigSection')
        air.classList.remove('smallSection')
        airMax.classList.remove('bigSection')
        airMax.classList.add('smallSection')
        yeezy.classList.remove('bigSection')
        yeezy.classList.add('smallSection')
        productSection.style.transform = 'translateX(0)'
    }
})
airMax.addEventListener('click' , ()=>{
    if(airMax.classList.contains('bigSection')){
        return
    }else{
        airMax.classList.add('bigSection')
        airMax.classList.remove('smallSection')
        air.classList.remove('bigSection')
        air.classList.add('smallSection')
        yeezy.classList.remove('bigSection')
        yeezy.classList.add('smallSection')
        productSection.style.transform = 'translateX(calc(-100%/1))'
    }
})
yeezy.addEventListener('click' , ()=>{
    if(yeezy.classList.contains('bigSection')){
        return
    }else{
        yeezy.classList.add('bigSection')
        yeezy.classList.remove('smallSection')
        airMax.classList.remove('bigSection')
        airMax.classList.add('smallSection')
        air.classList.remove('bigSection')
        air.classList.add('smallSection')
        productSection.style.transform = 'translateX(calc(-200%/1))'
    }
})
/////////////////////////////navbar display
const hero = document.querySelector('.hero')
window.addEventListener('scroll' , ()=>{
    let heroHeight = hero.clientHeight
    let h3Height = hero.querySelector('h3').clientHeight
    hero.style.top = `${h3Height - heroHeight}px`
    let h3rect = hero.querySelector('h3').getBoundingClientRect()
    console.log(h3rect.top)
    if(h3rect.top <= 0){
        hero.querySelectorAll('h3').forEach((h)=>{
            h.style.opacity = "1"
        })
    }else{
        hero.querySelectorAll('h3').forEach((h)=>{
            h.style.opacity = "0"
        })
    }
})
window.addEventListener('resize' , ()=>{
    let heroHeight = hero.clientHeight
    let h3Height = hero.querySelector('h3').clientHeight
    hero.style.top = `${h3Height - heroHeight}px`
})

//////////////////////////////cards images display
let airCardImgs = document.querySelectorAll('.airCardContainer .card .imgContainer')
let airCardIndex = 0
airCardImgs.forEach((img) => {
    airCardIndex++
    img.style.backgroundImage = `url("assets/air/air-${airCardIndex}/imgOne.png")`
})
let airMaxCardImgs = document.querySelectorAll('.airMaxCardContainer .card .imgContainer')
let airMaxCardIndex = 0
airMaxCardImgs.forEach((img) => {
    airMaxCardIndex++
    img.style.backgroundImage = `url("assets/airMax/airMax-${airMaxCardIndex}/imgOne.png")`
})
let yeezyCardImgs = document.querySelectorAll('.yeezyCardContainer .card .imgContainer')
let yeezyCardIndex = 0
yeezyCardImgs.forEach((img) => {
    yeezyCardIndex++
    img.style.backgroundImage = `url("assets/yeezy/yeezy-${yeezyCardIndex}/imgOne.png")`
})
//////////////////////////////modal images rotation
const imgOne = document.querySelector('.imgOne')
const imgTwo = document.querySelector('.imgTwo')
const imgThree = document.querySelector('.imgThree')
imgOne.addEventListener('click' , ()=>{
    if(imgOne.classList.contains('mainImg')){
        return
    }else{
        imgOne.classList.add('mainImg')
        imgOne.classList.remove('leftImg')
        imgOne.classList.remove('rightImg')

        imgTwo.classList.remove('mainImg')
        imgTwo.classList.remove('rightImg')
        imgTwo.classList.add('leftImg')

        imgThree.classList.remove('mainImg')
        imgThree.classList.remove('leftImg')
        imgThree.classList.add('rightImg')
    }
})
imgTwo.addEventListener('click' , ()=>{
    if(imgTwo.classList.contains('mainImg')){
        return
    }else{
        imgTwo.classList.add('mainImg')
        imgTwo.classList.remove('leftImg')
        imgTwo.classList.remove('rightImg')

        imgThree.classList.remove('mainImg')
        imgThree.classList.remove('rightImg')
        imgThree.classList.add('leftImg')

        imgOne.classList.remove('mainImg')
        imgOne.classList.remove('leftImg')
        imgOne.classList.add('rightImg')
    }
})
imgThree.addEventListener('click' , ()=>{
    if(imgThree.classList.contains('mainImg')){
        return
    }else{
        imgThree.classList.add('mainImg')
        imgThree.classList.remove('leftImg')
        imgThree.classList.remove('rightImg')

        imgOne.classList.remove('mainImg')
        imgOne.classList.remove('rightImg')
        imgOne.classList.add('leftImg')

        imgTwo.classList.remove('mainImg')
        imgTwo.classList.remove('leftImg')
        imgTwo.classList.add('rightImg')
    }
})
//////////////////////////////modal display
const modal = document.querySelector('.modal')
const seeMore = document.querySelectorAll('.seeMore')
const bodyBefore = document.querySelector('.bodyBefore')
seeMore.forEach((button) =>{
    button.setAttribute('onclick' , 'displayModal(this)')
})
function displayModal(button){
    modal.style.display = 'grid'
    document.body.style.overflow = 'hidden'
    bodyBefore.style.bottom = '0'
    //item main images
    let card = button.parentElement.parentElement.parentElement
    let folderName = card.getAttribute('id')
    let FA = folderName.split('-')
    let FA1 = parseInt(FA[1])
    imgOne.style.backgroundImage = `url("./assets/${FA[0]}/${folderName}/imgOne.png")`
    imgTwo.style.backgroundImage = `url("./assets/${FA[0]}/${folderName}/imgTWo.png")`
    imgThree.style.backgroundImage = `url("./assets/${FA[0]}/${folderName}/imgThree.png")`
    //related images
    let totCard = card.parentElement.querySelectorAll('.card').length
    let relImg1 = modal.querySelector('.relImg1')
    let relImg2 = modal.querySelector('.relImg2')
    let relImg3 = modal.querySelector('.relImg3')
    if(FA1 < totCard - 2){
        relImg1.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+(FA1+1)}/imgOne.png')`
        relImg2.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+(FA1+2)}/imgOne.png')`
        relImg3.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+(FA1+3)}/imgOne.png')`
    }else if(FA1 == totCard - 2){
        relImg1.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+(FA1+1)}/imgOne.png')`
        relImg2.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+(FA1+2)}/imgOne.png')`
        relImg3.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+1}/imgOne.png')`
    }else if(FA1 == totCard - 1){
        relImg1.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+(FA1+1)}/imgOne.png')`
        relImg2.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+1}/imgOne.png')`
        relImg3.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+2}/imgOne.png')`
    }else if(FA1 == totCard){
        relImg1.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+1}/imgOne.png')`
        relImg2.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+2}/imgOne.png')`
        relImg3.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+3}/imgOne.png')`
    }
    relImg1.addEventListener('click' , ()=>{
        FA1++
        if(FA1 > totCard){
            FA1 = FA1 - totCard
        }
        iterateModal(totCard, FA, FA1, imgOne, imgThree , imgTwo, modal, relImg1, relImg2, relImg3)
    })
    relImg2.addEventListener('click' , ()=>{
        FA1++
        FA1++
        if(FA1 > totCard){
            FA1 = FA1 - totCard
        }
        iterateModal(totCard, FA, FA1, imgOne, imgThree , imgTwo, modal, relImg1, relImg2, relImg3)
    })
    relImg3.addEventListener('click' , ()=>{
        FA1++
        FA1++
        FA1++
        if(FA1 > totCard){
            FA1 = FA1 - totCard
        }
        iterateModal(totCard, FA, FA1, imgOne, imgThree , imgTwo, modal, relImg1, relImg2, relImg3)
    })
    //text content
    modal.querySelector('h1').textContent = card.querySelector('h1').textContent
    modal.querySelector('h2').textContent = card.querySelector('h2').textContent
    modal.querySelector('.modalPrice').textContent = card.querySelector('.price').textContent
    modal.querySelector('.modalPrice').style.backgroundColor = window.getComputedStyle( card.querySelector('.price') ,null).getPropertyValue('background-color')
    modal.setAttribute('selectionColor' , window.getComputedStyle( card.querySelector('.price') ,null).getPropertyValue('background-color')) 
    //back button function
    let showLess = modal.querySelector('.showLess')
    showLess.addEventListener('click' , ()=>{
        modal.style.display = 'none'
        bodyBefore.style.bottom = 'unset'
        document.body.style.overflow = 'unset'
    })
    bodyBefore.addEventListener('click' , ()=>{
        modal.style.display = 'none'
        bodyBefore.style.bottom = 'unset'
        document.body.style.overflow = 'unset'
    })
}
function iterateModal(totCard, FA, FA1, imgOne, imgThree , imgTwo, modal, relImg1, relImg2, relImg3){
    imgOne.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+(FA1)}/imgOne.png')`
    imgTwo.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+(FA1)}/imgTwo.png')`
    imgThree.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+(FA1)}/imgThree.png')`
    let relatedCard = document.getElementById(FA[0]+"-"+(FA1))
    modal.querySelector('h1').textContent = relatedCard.querySelector('h1').textContent
    modal.querySelector('h2').textContent = relatedCard.querySelector('h2').textContent
    if(FA1 < totCard - 2){
        relImg1.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+(FA1+1)}/imgOne.png')`
        relImg2.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+(FA1+2)}/imgOne.png')`
        relImg3.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+(FA1+3)}/imgOne.png')`
    }else if(FA1 == totCard - 2){
        relImg1.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+(FA1+1)}/imgOne.png')`
        relImg2.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+(FA1+2)}/imgOne.png')`
        relImg3.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+1}/imgOne.png')`
    }else if(FA1 == totCard - 1){
        relImg1.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+(FA1+1)}/imgOne.png')`
        relImg2.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+1}/imgOne.png')`
        relImg3.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+2}/imgOne.png')`
    }else if(FA1 == totCard){
        relImg1.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+1}/imgOne.png')`
        relImg2.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+2}/imgOne.png')`
        relImg3.style.backgroundImage = `url('assets/${FA[0]}/${FA[0]+"-"+3}/imgOne.png')`
    }
}
//////////////////////////////air size picker
sizeType = document.getElementById('sizeType')
seeMore.forEach((button) => {
    button.addEventListener('click', () => {
        let value = sizeType.options[sizeType.selectedIndex].value;
        if (value == 'eu'){
            addEuSizes()
        }else if (value == 'us'){
            addUsSizes()
        }else if (value == 'uk'){
            addUkSizes()
        }else if (value == 'cm'){
            addCmSizes()
        }else if (value == 'in'){
            addInSizes()
        }
    })
})
sizeType.addEventListener('change' , ()=>{
    let value = sizeType.options[sizeType.selectedIndex].value;
    if (value == 'eu'){
        addEuSizes()
    }else if (value == 'us'){
        addUsSizes()
    }else if (value == 'uk'){
        addUkSizes()
    }else if (value == 'cm'){
        addCmSizes()
    }else if (value == 'in'){
        addInSizes()
    }
})
function addEuSizes(){
    let sizeValue = document.getElementById('sizeValue')
    let options = sizeValue.querySelectorAll('option')
    options.forEach((option)=>{
        option.remove()
    })
    for (let i = 37 ; i < 46 ; i++){
        let option = document.createElement('option')
        option.textContent = i
        sizeValue.appendChild(option)
    }
}
function addUsSizes(){
    let sizeValue = document.getElementById('sizeValue')
    let options = sizeValue.querySelectorAll('option')
    options.forEach((option)=>{
        option.remove()
    })
    for (let i = 4 ; i < 11.5 ; i = i + 0.5){
        let option = document.createElement('option')
        option.textContent = i
        sizeValue.appendChild(option)
    }
}
function addUkSizes(){
    let sizeValue = document.getElementById('sizeValue')
    let options = sizeValue.querySelectorAll('option')
    options.forEach((option)=>{
        option.remove()
    })
    for (let i = 3.5 ; i < 11 ; i = i + 0.5){
        let option = document.createElement('option')
        option.textContent = i
        sizeValue.appendChild(option)
    }
}
function addCmSizes(){
    let sizeValue = document.getElementById('sizeValue')
    let options = sizeValue.querySelectorAll('option')
    options.forEach((option)=>{
        option.remove()
    })
    for (let i = 0 ; i < 9 ; i++){
        let option = document.createElement('option')
        let values = [22.9,23.8,24.8,25.4,25.8,26.7,27.3,27.9,29.2]
        option.textContent = values[i]
        sizeValue.appendChild(option)
    }
}
function addInSizes(){
    let sizeValue = document.getElementById('sizeValue')
    let options = sizeValue.querySelectorAll('option')
    options.forEach((option)=>{
        option.remove()
    })
    for (let i = 9 ; i < 11.6 ; i = i + 0.25){
        let option = document.createElement('option')
        option.textContent = i
        sizeValue.appendChild(option)
    }
}
