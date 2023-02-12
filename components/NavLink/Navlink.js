const NavLink = ({text, href}) => {
  const url = window.location.href;

  const navLink = document.createElement('a');
  navLink.classList = `nav-link ${url.includes(href) ? 'selected' : ''}`;
  navLink.innerText = text;
  navLink.href = href;

  return navLink;
}

export default NavLink;