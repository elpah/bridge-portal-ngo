import { links } from '../../data/links'
import DesktopNav from './nav-desktop/DesktopNav'
import MobileNav from './nav-mobile/MobileNav'

const Navbar = () => {
  return (
	<>
	<MobileNav links={links}/>
	<DesktopNav links={links}/>
	</>
  )
}

export default Navbar