export {stdio};
class stdio{
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
  static cookies (n,v){
    document.cookie = n + "=" + v;
  }
  static setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  static getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}