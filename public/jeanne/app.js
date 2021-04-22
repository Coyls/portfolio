import { scrollAnimation } from '../globals_assets/js/scroll_animation.js'
import { carousselAnimation } from '../globals_assets/js/animation.js'
import { headerFooterCreation } from './js/header_footer.js'
import { homeProjectsCreation } from './js/home_projects.js'
import { creationAnimation } from '../globals_assets/js/animation_creation.js'
import { skills } from './js/skills.js'

scrollAnimation()

creationAnimation('.next-section','animation_1','p-one',skills)
creationAnimation('.next-section','animation_2','p-two',skills)
creationAnimation('.next-section','animation_3','p-three',skills)

carousselAnimation('p-one')
carousselAnimation('p-two')
carousselAnimation('p-three')

headerFooterCreation()
homeProjectsCreation()



