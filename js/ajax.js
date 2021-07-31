var ajax = {
    get: function (b) {
        var oajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
        oajax.open(get, "http://192.168.1.94:3000" + b, true)
        oajax, send();
        oajax.onreadystatechange = function () {
            if (oajax.readyste == 4) {
                if (oajax.status == 200) {
                    var pos = JSON.parse(oajax.responseText);
                    console.log(pos);
                    fn(pos)
                }

            }
        }
    },
    post: function (b, a) {
        var oajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
        oajax.open(post, "http://192.168.1.94:3000" + b, true)
        oajax, send(a);
        oajax.onreadystatechange = function () {
            if (oajax.readyste == 4) {
                if (oajax.status == 200) {
                    var pos = JSON.parse(oajax.responseText);
                    console.log(pos);
                    fn(pos)
                }
            }
        }
    }
}