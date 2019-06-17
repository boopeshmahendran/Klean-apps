function smoothScroll(anchorEl) {
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