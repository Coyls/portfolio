import { headerFooterCreation } from './header_footer.js'
import { requestServer } from './request.js'

headerFooterCreation()

requestServer('getUserChloe').then(response => {

console.log(response.data)

let bio = response.data.bio

const bioParagraph = document.getElementById('bio-paragraph')

bioParagraph.innerHTML = bio

/* let formation = "Le Bachelor Designer Web et Mobile en 3 ans aux Gobelins m’a fait acquérir de multiples capacités tel que : le motion design, la déclinaison de design, le montage vidéo, l’UX et l’UI, la création de visuels graphiques (charte graphique, logos, icônes...), la culture (design, jeux-vidéos, générale, ...), ...etc"
const formationParagraph = document.getElementById('formation-paragraph')
formationParagraph.innerHTML = formation */


})