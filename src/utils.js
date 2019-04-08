function smoothScroll(event) {
    event.preventDefault();
    const anchorEl = event.target;
    anchorEl.blur();

    if (anchorEl.hash === "") {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    } else {
        document.querySelector(anchorEl.hash).scrollIntoView({
            behavior: "smooth"
        });
    }
}

export {
    smoothScroll
}