const CircleButton = (icon, badgeCount) => {
  const circleBtn = document.createElement('button');
  circleBtn.classList = 'circle-btn';

  const buttonIcon = document.createElement('i');
  buttonIcon.classList = icon;

  circleBtn.appendChild(buttonIcon);

  if (badgeCount) {
    const badge = document.createElement('div');
    badge.classList = 'badge-count';
    badge.innerText = badgeCount;

    circleBtn.appendChild(badge);
  }

  return circleBtn;
}

export default CircleButton;