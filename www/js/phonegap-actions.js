document.addEventListener("deviceready", onDeviceReady, false);
var tablet;
function onDeviceReady() {
    var deviceType = (navigator.userAgent.match(/iPad/i)) == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i)) == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
    var w, h;
    w = window.innerWidth
    h = window.innerHeight

    tablet = deviceType == "iPad" ? true : (w > 736 || h > 736) ? true : false
    if (tablet) {
        setScreenOrientation('landscape')
    } else {
        setScreenOrientation('portrait')
        StatusBar.hide()
    }
}
var setScreenOrientation = function (position, callback) {
    //alert('aqui')
    screen.orientation.lock(position)
    if (callback) {
        setTimeout(function () {
            callback()
        }, 600)
    }
}