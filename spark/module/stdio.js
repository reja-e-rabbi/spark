'use strict';
export { stdio };
class stdio{
    url = new URLSearchParams(document.location.search);
    test() {
        console.log('stdio is active');
    }
    ajax(obj) {
      var output;
      var xmlhttp = new XMLHttpRequest();
    var out = xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        output= JSON.stringify(this.responseText);
      } else if (xmlhttp.status == 400) {
        output =0;
      }else if (xmlhttp.status == 403) {
        output =0;
      }else if (xmlhttp.status == 404) {
        output =0;
      }
        return output;
    };
    xmlhttp.open(obj.method, obj.link, true);
    if (obj.method == "GET") {
      xmlhttp.send();
    } else{
      xmlhttp.send("id="+obj);
    }
    return out;
  }
    cookies (n,v){
    document.cookie = n + "=" + v;
  }
    setCookies(cname, cvalue, exdays) {
      console.log("set cookies is define");
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/; SameSite = Lax;"; 
      return 0;
  }
    getCookies(cname) {
    var out = 0;
    console.log("cookie return");
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        out = c.substring(name.length, c.length);
      }
    }
    return out;
    }
    urlDefine() {
        var wl = window.location;
        var url = window.location.href;
        var obj = {
            "url": url,
            "protocol": wl.protocol,
            "host": wl.host,
            "hostName": wl.hostname,
            "port": wl.port,
            "path": wl.pathname,
            "origin": wl.origin,
            "hashtag": wl.hash
        }
        return obj;
    }
}