document.addEventListener("DOMContentLoaded", () => {
    document.getElementsByClassName("navbar-toggler")[0].click(() => {
        document.getElementsByTagName("body")[0].classList.toggle("noscroll");
    });
});

window.onscroll = () => {
    if (window.scrollY >= 80) {
        document.getElementById("site-header").classList.add("nav-fixed");
    } else {
        document.getElementById("site-header").classList.remove("nav-fixed");
    }
};

document.getElementsByClassName("navbar-toggler")[0].onclick = function () {
    document.getElementsByTagName("header")[0].classList.add("active");
};
document.onreadystatechange = () => {
    if (window.innerWidth > 991) {
        document.getElementsByTagName("header")[0].classList.remove("active");
    }
    window.onresize = () => {
        if (window.innerWidth > 991) {
            document.getElementsByTagName("header")[0].classList.remove("active");
        }
    };
};
