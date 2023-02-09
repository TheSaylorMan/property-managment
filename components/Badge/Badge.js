const Badge = (text, theme = "neutral") => {
    const div = document.createElement('div');
    div.classList = `badge ${theme}`;
    div.innerText = text;

    return div;
};

export default Badge;