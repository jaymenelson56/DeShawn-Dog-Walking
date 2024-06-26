import { getPets, getWalkers } from "./database.js"

const pets = getPets()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        const walkerId = clickTarget.dataset.wfk
        const walkers = getWalkers()
        for (const walker of walkers) {
            if(walker.id === parseInt(walkerId)){
                window.alert(`This pet is being walked by ${walker.name}`)
            }
            
        }
    }
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li data-wfk="${pet.walkerId}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

