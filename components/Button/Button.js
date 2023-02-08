const Button = (text, classes = "") => {
    const button = document.createElement("button");
    button.classList = `btn btn-primary ${classes}`;
    button.innerText = text;

    return button;
}

export default Button;