import { headerFooterCreation } from './header_footer.js'
import { carousselAnimation } from '../../globals_assets/js/animation.js'
import { creationAnimation } from '../../globals_assets/js/animation_creation.js'
import { portfolioCreation } from '../../globals_assets/js/portfolio_creation.js'

import { skills } from './skills.js'

headerFooterCreation()

portfolioCreation("getProjectJeanne" ,"jeanne")


creationAnimation('.portfolio-skills','portfolio-wrapper', 'p-portfolio', skills)
carousselAnimation('p-portfolio','-=',120)









