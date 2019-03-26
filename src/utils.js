function smoothScroll(event) {
    event.preventDefault();
    const anchorEl = event.target;
    anchorEl.blur();

    document.querySelector(anchorEl.hash).scrollIntoView({
        behavior: 'smooth'
    });
}

export {
    smoothScroll
}