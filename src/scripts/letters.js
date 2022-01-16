import { getLetters} from "./dataAccess.js"

// const mainContainer = document.querySelector("#container")

const makeOrderListItem = (letter) => {
    return `<li>
   ${letter}
   </li>`
}

export const Letters = () => {
    const letters = getLetters()

    let html = `
        <ul>
            ${letters.map(makeOrderListItem).join('')}
        </ul>
    `

    return html
}