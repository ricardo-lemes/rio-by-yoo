document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    setScreenOrientation('portrait')
    StatusBar.hide()
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