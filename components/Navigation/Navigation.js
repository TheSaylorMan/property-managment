import NavLink from "../NavLink/NavLink.js";

const Navigation = (navigationLinks) => {
  const navigation = document.createElement('nav');
  navigation.classList = 'navigation';

  navigationLinks.forEach((navLink) => {
    navigation.appendChild(NavLink({...navLink}));
  })

  return navigation;
}

export default Navigation;