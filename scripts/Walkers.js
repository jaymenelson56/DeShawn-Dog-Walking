import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const theClick = clickEvent.target

        if (theClick.dataset.type === "walker") {
            window.alert(`This walker works in ${theClick.dataset.city}`)
        }
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}"
                         data-city="${walker.city}"
                         data-type="walker"
                        >${walker.name}
        </li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

