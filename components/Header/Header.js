import { navigationLinks, appIcons } from "/assets/js/data.js";

import Logo from "../Logo/Logo.js";
import Navigation from "../Navigation/Navigation.js";
import CircleButton from "../CircleButton/CircleButton.js";
import ProfileButton from "../ProfileButton/ProfileButton.js";

const Header = () => {
  const header = document.createElement('div');
  header.classList = 'header';

  header.appendChild(Logo());
  
  header.appendChild(Navigation(navigationLinks));
  
  const helperWrapper = document.createElement('div');
  helperWrapper.classList = 'header-right-wrapper';

  helperWrapper.appendChild(CircleButton(appIcons.notifications, 4));
  helperWrapper.appendChild(ProfileButton());

  header.appendChild(helperWrapper);

  return header;
}

export default Header;