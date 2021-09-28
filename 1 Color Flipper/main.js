const body = document.body
const btn = document.querySelector('button')
const nameColor = document.querySelector('.nameColor')
const selectionSystem = document.querySelectorAll('.selectionSystem')

//rodzaj systemu wedlug ktorego wybierany jest kolor (simple lub hex)
let typeSystem = 'simple'

//zmiana koloru tła oraz teksu
const changeColor = () => {
    let color;
    //program losuje 3 liczy od 0 do 255 i tworzy rgb
    if (typeSystem === 'simple') {
        let number1 = Math.floor(Math.random() * 256)
        let number2 = Math.floor(Math.random() * 256)
        let number3 = Math.floor(Math.random() * 256)
        color = `rgb(${number1}, ${number2}, ${number3})`
    // program losuje 6 znaków z tavlicy systemColor i tworzy #
    } else if (typeSystem === 'hex') {
        const systemColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        color = '#'
        for (let i = 0; i < 6; i++) {
            let number = Math.floor(Math.random() * 16)
            color += systemColor[number]
        }
    }
    body.style.backgroundColor = color
    nameColor.textContent = color
}

//podprogram, który dodaje i susuwa klase wybranego systemu oraz zmienia zmienną typeSystem
const chooseSystem = (e) => {
    selectionSystem.forEach((selection) => {
        selection.classList.remove('chooseSystem')
    })
    e.target.classList.add('chooseSystem')
    typeSystem = e.target.dataset.system
}

//przycisk nasłuchujący button
btn.addEventListener('click', changeColor)

//nasłuchiwanie, który przycisk jest kliknięty 
selectionSystem.forEach((selection) => {
    selection.addEventListener('click',chooseSystem)
})

