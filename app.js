const friends = ['Joe', 'Clara', 'Ana', 'Ella', 'Andrea']
const button = document.createElement('button')
const buttonText = document.createTextNode('Sing!')
button.appendChild(buttonText)


const handleClick = () => {
    for (friend of friends) {

        // create div class friend
        const div = document.createElement('div')
        div.className = 'friend'

        // h3 with friend name
        const h3 = document.createElement('h3')
        const h3Text = document.createTextNode(`${friend}`)
        h3.appendChild(h3Text)
        div.appendChild(h3)

        // a paragraph for each line in friend div
        for (let i = 0; i < 99; i++) {
            const p = document.createElement('p')
            let pText
            if (i == 98) {
                pText = document.createTextNode(`${99 - i} line of code in the file, ${99 - i} line of code; ${friend} strikes one out, clears it all out, no more lines of code in the file.`)
            } else {
                pText = document.createTextNode(`${99 - i}lines of code in the file,${99 - i}lines of code; ${friend} strikes one out, clears it all out, `)
            }

            p.appendChild(pText)
            div.appendChild(p)
        }
        document.body.appendChild(div)
    }
}

window.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(button)
    button.addEventListener('click', handleClick)
})
