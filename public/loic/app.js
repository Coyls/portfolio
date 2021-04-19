import { scrollAnimation } from './js/scroll_animation.js'
import { carousselAnimation } from './js/animation.js'
import { headerFooterCreation } from './js/header_footer.js'
import { homeProjectsCreation } from './js/home_projects.js'
import { creationAnimation } from './js/animationCreation.js'


scrollAnimation()

creationAnimation('.next-section', 'animation_1', 'p-one')
creationAnimation('.next-section', 'animation_2', 'p-two')
creationAnimation('.next-section', 'animation_3', 'p-three')

carousselAnimation('animation_1','p-one')
carousselAnimation('animation_2','p-two')
carousselAnimation('animation_3','p-three')

headerFooterCreation()
homeProjectsCreation()



