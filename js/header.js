window.addEventListener("load", (event) => {
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