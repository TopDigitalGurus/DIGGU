const A = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan"]
const B = ["Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi"]
const C = ["Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo,republic of congo,republic of the congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia"]
const D = ["Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic"]
const E = ["Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia"]
const F = ["Fiji", "Finland", "France"]
const G = ["Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana"]
const H = ["Haiti", "Honduras", "Hungary"]
const I = ["Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory coast"]
const J = ["Jamaica", "Japan", "Jordan"]
const K = ["Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan"]
const L = ["Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg"]
const M = ["Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar"]
const N = ["Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway"]
const O = ["Oman"]
const P = ["Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal"]
const Q = ["Qatar"]
const R = ["Romania", "Russia", "Rwanda"]
const S = ["Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "SriLanka,sri lanka,sri-lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria"]
const T = ["Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste,timor leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu"]
const U = ["Uganda", "Ukraine", "United Arab Emirate,UAE", "United Kingdom,uk", "United States of America,united states american,usa", "Uruguay", "Uzbekistan"]
const V = ["Vanuatu", "Vatican City", "Venezuela", "Vietnam"]
const Y = ["Yemen"]
const Z = ["Zambia", "Zimbabwe"]
const countries = {
    a:A, b:B, c:C, d:D, e:E, f:F, g:G, h:H, i:I, j:J, k:K, l:L, m:M, n:N, o:O, p:P, q:Q, r:R, s:S, t:T, u:U, v:V, y:Y, z:Z
}
const guesses = {
    a:[], b:[], c:[], d:[], e:[], f:[], g:[], h:[], i:[], j:[], k:[], l:[], m:[], n:[], o:[], p:[], q:[], r:[], s:[], t:[], u:[], v:[], y:[], z:[]
}

/////////////////////////////////////////////////////////
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const table = document.querySelector('.table')
const input = document.querySelector('input')
const buttons = document.querySelectorAll('.btn-primary')
const revealAllBtn = document.querySelector('.revealAll')
const revealOneBtn = document.querySelector('.revealOne')
let letter;
// buttons click listener
buttons.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        buttons.forEach((b)=>{b.classList.remove('active')})
        btn.classList.add('active')
        letter = btn.classList[1][0];
        deleteRows()
        showItems()
        guessedRow()
        checkInput()
        checkWon()
    })
})
// hide dom elements
function hideItems(){
    h1.classList.add('hide')
    h2.classList.add('hide')
    input.classList.add('hide')
    table.classList.add('hide')
    revealAllBtn.classList.add('hide')
    revealOneBtn.classList.add('hide')
    deleteRows()
}
// show dom elements
function showItems(){
    let array = countries[letter]
    h1.classList.remove('hide')
    h1.textContent = `Name all Countries starting with ${letter.toUpperCase()}`
    input.classList.remove('hide')
    input.focus()
    h2.classList.remove('hide')
    h2.textContent =  `0 / ${array.length}`
    revealAllBtn.classList.remove('hide')
    revealOneBtn.classList.remove('hide')
    table.classList.remove('hide')
    addRows(array)
}
// delete table rows
function deleteRows(){
    let rows = document.querySelectorAll('.tblRow')
    rows.forEach((row)=>{
        table.removeChild(row)
    })
}
// add table rows
function addRows(array){
    array.forEach((country)=>{
        let row = document.createElement('div')
        row.classList.add('tblRow')
        table.appendChild(row)
    })
}
// user input checker
function checkInput(){
    let cArray = countries[letter]
    let rows = document.querySelectorAll('.tblRow')
    input.addEventListener('keyup', ()=>{
        let value = input.value.toLowerCase()
        let i = 0;
        cArray.forEach((country)=>{
            country = country.toLowerCase()
            country = country.split(',')
            if(value === country[0] || value === country[1] || value === country[2]){
                let lArray = guesses[letter]
                if(!lArray.includes(i)){
                    lArray.push(i)
                    lArray.sort(function(a, b){return a - b})
                    input.value = '';
                }
                guessedRow()
                checkWon()
            }
            i++
        })
    })
}
// guessed country display
function guessedRow(){
    let lArray = guesses[letter]
    let rows = document.querySelectorAll('.tblRow');
    let cArray = countries[letter]
    console.log(lArray)
    lArray.forEach((g)=>{
        rows[g].textContent = cArray[g].split(',')[0];
        rows[g].classList.add('green')
    })
    h2.textContent = `${lArray.length} / ${cArray.length}`
}
// check if letter is completed
function checkWon(){
    let lArray = guesses[letter]
    let cArray = countries[letter]
    if(lArray.length == cArray.length){
        buttons.forEach((btn)=>{
            if(btn.classList.contains(`${letter}btn`)){
                btn.classList.add('green')
            }
        })
        input.classList.add('hide')
        h2.textContent += '  good job!'
        revealAllBtn.classList.add('hide')
        revealOneBtn.classList.add('hide')
    }
}

//reveal all button
revealAllBtn.addEventListener('click' , ()=>{
    cArray = countries[letter]
    lArray = guesses[letter]
    let i = 0 ;
    cArray.forEach(()=>{
        if(lArray[i] !== i){
            lArray.push(i)
            lArray.sort(function(a, b){return a - b})
        }
        i++
    })
    guessedRow()
    checkWon()
})
//reveal one button
revealOneBtn.addEventListener('click' , ()=>{
    cArray = countries[letter]
    lArray = guesses[letter]
    lLength = lArray.length
    let i = 0 ;
    cArray.forEach(()=>{
        if(lArray[i] !== i){
            if(lArray.length == lLength){
                lArray.push(i)
                lArray.sort(function(a, b){return a - b})
            }
        }
        i++
    })
    guessedRow()
    checkWon()
})
//////////////////////////////// change theme
const lightTheme = document.querySelector('.light')
const darkTheme = document.querySelector('.dark')
const themeBtn = document.querySelector('.dropdown-toggle')
const ddUl = document.querySelector('.dd-ul')
darkTheme.addEventListener('click', ()=>{
    body.classList.add('dark')
    ddUl.classList.toggle('hide')
})
lightTheme.addEventListener('click', ()=>{
    body.classList.remove('dark')
    ddUl.classList.toggle('hide')
})
themeBtn.addEventListener('click',()=>{
    ddUl.classList.toggle('hide')
})
body.classList.add('dark')