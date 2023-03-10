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
    async fetchData(url,data) {
      var reqType;
        let options = {
          method: 'GET',
          headers:{
            'Content-Type': 'Applications/json'
          }
        }
        if ((data == undefined) || (data == null)) {
          reqType = options;
        }else{
          if ((data.headers['content-type']== undefined) || (data.headers['content-type']== null)) {
            data.headers['content-type']= 'Applications/json';
          }
          if ((data.method == undefined) || (data.method == null)) {
            data.method = 'GET';
          }
          reqType = data;
        }
        return fetch(url,reqType)
        .then(response => response.json())
        .then(data => {
          return data; // return the data
        })
        .catch(error => console.log(error));
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
    hasAtt(att,data_id){
      var tagAll, Data={}, dataAtt=[];
      tagAll = document.querySelectorAll(att);
      Data.result = {};
      Data.valid = false;
      switch (tagAll.length) {
        case 0:
          Data.valid = false;
          Data.message = 'tag not found';
          break;
        default:
          Data.valid = true;
          for (let i = 0; i < tagAll.length; i++) {
            if (tagAll[i].getAttribute(data_id)) {
              dataAtt.push(tagAll[i].getAttribute(data_id));
            }
          }
          Data.result.total = dataAtt.length;
          Data.result[data_id] = dataAtt;
          break;
      }
      return Data;
    }
    addScript(url) {
      var script = document.createElement('script');
      script.type = 'application/javascript';
      script.src = url;
      document.head.appendChild(script);
    }
    addCss(url) {
      var css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = url;
      document.head.appendChild(css);
    }
}

/*
const url = '/recive.json';
  const dataPromise = fetchData(url);
  dataPromise.then(data => {
    // use the fetched data here
    console.log(data);
  });

*/