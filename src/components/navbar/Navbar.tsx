import { useNavigate } from "react-router-dom";
import { links } from "../../data/links";
import DesktopNav from "./nav-desktop/DesktopNav";
import MobileNav from "./nav-mobile/MobileNav";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <MobileNav links={links} handleLogoClick={() => navigate("/")} />
      <DesktopNav links={links} handleLogoClick={() => navigate("/")} />
    </>
  );
};

export default Navbar;
