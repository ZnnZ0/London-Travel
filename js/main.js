//メイン画像の自動切り替え
var imgCounter = 0; //切り替え用変数
var interval = 5000; //切り替え間隔

function readyImg() {
    var src = ["harryPotterTour", "historyTour", "natureTour"];
    var num = [3, 3, 3]; //切り替え画像数
    setInterval(function () { changeImg(src, num) }, interval);
}

function changeImg(src, num) {
    src.forEach(function (obj, idx) {
        var img = document.getElementById(obj + "_main");
        var imgIdx = imgCounter % num[idx] + 1;
        var imgUrl = "img/" + obj + "_main" + imgIdx + ".jpg";
        img.src = imgUrl;
    });

    imgCounter++;
}