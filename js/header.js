window.addEventListener("load", (event) => {
    var nodeList = document.querySelectorAll(".has-sub-menu"); //プルダウンメニューのNodeList

    nodeList.forEach(function (children) {
        children.addEventListener("mouseover", function () {
            children.querySelector(".sub-menu").classList.add("sub-menu-active"); //オンマウス時にsub-list-activeクラスを付与
        });

        children.addEventListener("mouseout", function () {
            children.querySelector(".sub-menu").classList.remove("sub-menu-active"); //アウトマウス時にsub-list-activeクラスを削除
        });
    });
});