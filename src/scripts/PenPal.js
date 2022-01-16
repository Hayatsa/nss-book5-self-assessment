import { LetterForm} from "./letterForm.js"
import { Letters } from "./letters.js"

export const PenPal = () => {
    return `
    <h1>Pen Pal Society</h1>
    <section class="letterForm">
        ${LetterForm()}
    </section>
    
    <section class="sentLetters">
        <h2>Letters</h2>
        ${Letters()}
    </section>
    `
}


