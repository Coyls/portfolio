import { headerFooterCreation } from './header_footer.js'
import { carousselAnimation } from '../../globals_assets/js/animation.js'
import { creationAnimation } from '../../globals_assets/js/animation_creation.js'
import { skills } from './skills.js'
import { singleProjectCreation } from '../../globals_assets/js/single_project_creation.js'

headerFooterCreation()

singleProjectCreation("getProjectLoic", "loic")

creationAnimation('.single-project-skills', 'single-project-wrapper', 'p-single-project', skills)
carousselAnimation('p-single-project', '-=', 100)