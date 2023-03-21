window.addEventListener("load", function () {
    var nodeList = document.querySelectorAll(".has-sub-menu");

    nodeList.forEach(function (children) {
        children.addEventListener("mouseover", function () {
            children.querySelector(".sub-menu").classList.add("sub-menu-active");
        });

        children.addEventListener("mouseout", function () {
            children.querySelector(".sub-menu").classList.remove("sub-menu-active");
        });
    });
});

window.addEventListener("scroll", function () {
    var header = document.getElementById("header-menu");
    if (100 < document.documentElement.scrollTop) {
        header.classList.add("header-transparent");
    } else {
        header.classList.remove("header-transparent");
    }
});