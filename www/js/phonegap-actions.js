document.addEventListener("deviceready", onDeviceReady, false);
// var tablet;
function onDeviceReady() {

    if (tablet) {
        setScreenOrientation('portrait')
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