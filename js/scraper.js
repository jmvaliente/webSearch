const cheerio = require ('cheerio')
const fetch = require('node-fetch')

let cont = 0

if (cont === 0) {

    async function main() {
        let res = await fetch('URL')
        let text = await res.text()

        let $ = cheerio.load(text)
        console.log(text)
        let data = {
            name: $('#atributo').text(),
            review: $('#atributo').text(),
            offer : $('#atributo').text(),
            normal: $('#atributo').text(),
            delivery: $('#atributo atributo').text(),
            deliveryFast: $('#atributo').text()
        }
        console.log(data)
    }
    
    main()
    cont++
}
