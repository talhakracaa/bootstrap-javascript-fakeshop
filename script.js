// fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(json => console.log(json))

//! async await

const row = document.querySelector('.row')
let sepet = []
// console.log(row)

async function fetchData() {
    try {
        let response = await fetch('https://fakestoreapi.com/products')
        let data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

fetchData()
    .then(data => {

        console.log(data)

        // for (let i = 0; i < data.length; i++) {
        //     console.log(data[i].title)
        // }




        data.forEach((urun) => {
            console.log(urun.category.image)
            // if (urun.images.length == 1) {
            //     console.log('wow')
            // }
            const col = document.createElement('div')
            col.classList.add('col')
            col.style.width = '250px'
            // col.style.height = '400px'

            const card = document.createElement('div')
            card.style.width = '100%'
            card.style.height = '100%'
            card.style.border = "1px solid black"
            card.style.background = 'white'

            const imgDiv = document.createElement('div')
            imgDiv.style.width = "100%"
            imgDiv.style.height = '250px'

            const img = document.createElement('img')
            img.src = urun.image
            img.style.width = '100%'
            img.style.height = '100%'

            const cardBody = document.createElement('div')
            cardBody.style.width = "100%"
            cardBody.style.height = "250px"

            const baslik = document.createElement('h5')
            baslik.textContent = urun.title

            const aciklama = document.createElement('p')
            aciklama.textContent = `${urun.price}$`

            const btn = document.createElement('button')
            btn.classList.add('btn', 'btn-warning')
            btn.textContent = "Sepete Ekle"


            btn.addEventListener('click', () => {
                console.log(urun)

                sepet.push(urun)


                sepet.forEach(urun => {

                    const parentDiv = document.createElement('div')
                    parentDiv.style.width = '100%'
                    parentDiv.style.border = "1px solid black"
                    parentDiv.style.borderRadius = "10px"
                    parentDiv.style.display = 'flex'
                    parentDiv.style.justifyContent = 'space-between'
                    parentDiv.style.alignItems = 'center'
                    parentDiv.style.marginTop = "10px"

                    const imgDiv = document.createElement('div')
                    imgDiv.style.width = '25%'
                    imgDiv.style.height = '80px'
                    imgDiv.style.overflow = "hidden"

                    const img = document.createElement('img')
                    img.src = urun.image
                    img.style.width = '100%'
                    img.style.height = '100%'
                    img.style.borderRadius = "10px"

                    const baslik = document.createElement('p')
                    baslik.textContent = urun.title
                    baslik.style.fontSize = "12px"
                    baslik.style.marginTop = "18px"

                    const fiyat = document.createElement('p')
                    fiyat.textContent = urun.price + '$'
                    fiyat.style.fontSize = '15px'
                    fiyat.style.fontWeight = 'bold'
                    fiyat.style.marginTop = "18px"



                    const silmeBtn = document.createElement('i')
                    silmeBtn.classList.add('fa-solid', 'fa-trash')


                    silmeBtn.addEventListener('click', function () {
                        console.log(this.parentElement)
                        let gorseldenSilme = this.parentElement
                        gorseldenSilme.remove()


                        console.log(normalSepet.indexOf(urun))

                        let urunIndex = normalSepet.indexOf(urun)

                        console.log(normalSepet.splice(urunIndex, 1))
                        console.log(normalSepet)

                        let normalSepetJson = JSON.stringify(normalSepet)
                        localStorage.setItem('sepet', normalSepetJson)

                    })



                    imgDiv.append(img)

                    parentDiv.append(imgDiv)
                    parentDiv.append(baslik)
                    parentDiv.append(fiyat)
                    parentDiv.append(silmeBtn)

                    cart.append(parentDiv)
                })

                let sepetJSON = JSON.stringify(sepet)
                console.log(sepetJSON)

                localStorage.setItem('sepet', sepetJSON)

                console.log(sepet)

            })





            cardBody.append(baslik)
            cardBody.append(aciklama)
            cardBody.append(btn)

            imgDiv.append(img)

            card.append(imgDiv)
            card.append(cardBody)

            col.appendChild(card)

            row.appendChild(col)
        })


    })

// localStorage.clear()

//! Shopping cartı çekiyoruz
const cartIcon = document.querySelector('.fa-cart-shopping')
const cart = document.querySelector('#sepet')

cartIcon.addEventListener('click', () => {
    cart.classList.toggle('aktif')
})


let localSepet = localStorage.getItem('sepet')
let normalSepet = JSON.parse(localSepet)

console.log(normalSepet)

normalSepet.forEach(urun => {

    const parentDiv = document.createElement('div')
    parentDiv.style.width = '100%'
    parentDiv.style.border = "1px solid black"
    parentDiv.style.borderRadius = "10px"
    parentDiv.style.display = 'flex'
    parentDiv.style.justifyContent = 'space-between'
    parentDiv.style.alignItems = 'center'
    parentDiv.style.marginTop = "10px"

    const imgDiv = document.createElement('div')
    imgDiv.style.width = '25%'
    imgDiv.style.height = '80px'
    imgDiv.style.overflow = "hidden"

    const img = document.createElement('img')
    img.src = urun.image
    img.style.width = '100%'
    img.style.height = '100%'
    img.style.borderRadius = "10px"

    const baslik = document.createElement('p')
    baslik.textContent = urun.title
    baslik.style.fontSize = "12px"
    baslik.style.marginTop = "18px"

    const fiyat = document.createElement('p')
    fiyat.textContent = urun.price + '$'
    fiyat.style.fontSize = '15px'
    fiyat.style.fontWeight = 'bold'
    fiyat.style.marginTop = "18px"



    const silmeBtn = document.createElement('i')
    silmeBtn.classList.add('fa-solid', 'fa-trash')


    silmeBtn.addEventListener('click', function () {
        console.log(this.parentElement)
        let gorseldenSilme = this.parentElement
        gorseldenSilme.remove()


        console.log(normalSepet.indexOf(urun))

        let urunIndex = normalSepet.indexOf(urun)

        console.log(normalSepet.splice(urunIndex, 1))
        console.log(normalSepet)

        let normalSepetJson = JSON.stringify(normalSepet)
        localStorage.setItem('sepet', normalSepetJson)

    })



    imgDiv.append(img)

    parentDiv.append(imgDiv)
    parentDiv.append(baslik)
    parentDiv.append(fiyat)
    parentDiv.append(silmeBtn)

    cart.append(parentDiv)
})


//! git add .
//! git commit -m "mesaj"
//! git push