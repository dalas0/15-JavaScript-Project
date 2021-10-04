const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const btn = document.querySelector('button')

let img = document.querySelector('img')
let name = document.querySelector('h2')
let profession = document.querySelector('h3')
let about = document.querySelector('p')

//klasa przechowująca wartości osób
const person = {
    name : ['Houcine Ahey', 'Kelly Alsen', 'Peter Jones'],
    img : ['img/houcine.jpg', 'img/kelly.jpg', 'img/peter.jpg'],
    profession : ['WEB DEWELOPER', 'INTERN', 'UX DESIGNER'],
    about : ['Mauris risus nulla, finibus nec sollicitudin non, vestibulum quis urna. Pellentesque rhoncus feugiat nibh, et consequat leo euismod eu. Fusce ut libero urna', 'Nullam mollis placerat neque at lobortis.', 'Donec condimentum tempor lectus at faucibus. Etiam accumsan nibh ligula, vitae placerat erat cursus a.']
}

//zmienna przechowujaca numer osoby
let number = 0

// funkcja zmieniajaca wartośc danych w zależnosci od nuemru osoby
const changePerson = () => {
    about.textContent = person.about[number]
    profession.textContent = person.profession[number]
    name.textContent = person.name[number]
    img.src = person.img[number]

}
//przejscie do anstępnej osoby (zwiększenie numeru osoby o 1)
const nextPerson = () => {
    number++
    if (number >= person.about.length) {
        number = 0
    }
    changePerson()
}

//powrót do poprzedniej osoby (zmniejszenie numeru osoby o 1)
const prevPerson = () => {
    number--
    if (number < 0) {
        number = person.name.length-1
    }
    changePerson()
}

//losowanie numeru osoby
const randomPerson = () => {
    number = Math.floor(Math.random()*person.name.length)
    changePerson()
}

//nasłuchiwanie strzałek oraz przycisku
next.addEventListener('click', nextPerson)
prev.addEventListener('click', prevPerson)
btn.addEventListener('click', randomPerson)
