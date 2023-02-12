import { appIcons } from "/assets/js/data.js";

const ProfileButton = () => {
  const profileBtn = document.createElement('button');
  profileBtn.classList = 'profile-btn';

  const profileAvatar = document.createElement('img');
  profileAvatar.src = '/assets/img/user.jpeg';
  profileAvatar.alt = 'User Avatar';

  const profileIcon = document.createElement('i');
  profileIcon.classList = appIcons.menuIcon;

  profileBtn.appendChild(profileAvatar);
  profileBtn.appendChild(profileIcon);

  return profileBtn;
}

export default ProfileButton;