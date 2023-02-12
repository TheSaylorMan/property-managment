const Badge = (text, theme = "info") => {
  const badge = document.createElement('div');
  badge.classList = `badge ${theme}`;
  badge.innerText = text;

  return badge;
}

export default Badge;