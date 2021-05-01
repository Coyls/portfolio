import { headerFooterCreation } from './header_footer.js'
import { carousselAnimation } from '../../globals_assets/js/animation.js'
import { creationAnimation } from '../../globals_assets/js/animation_creation.js'
import { headerAnimationLogo } from '../../globals_assets/js/header_animation_logo.js'
import { portfolioCreation } from '../../globals_assets/js/portfolio_creation.js'
import { skills } from './skills.js'


headerFooterCreation()
headerAnimationLogo('.logo','https://portfoliob1.herokuapp.com/loic/animations/animation_logo_loic.json')

portfolioCreation("getProjectLoic", "loic")

creationAnimation('.portfolio-skills','portfolio-wrapper', 'p-portfolio', skills)
carousselAnimation('p-portfolio','-=',100)








