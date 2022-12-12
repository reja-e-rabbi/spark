// JavaScript source code version 1.05
'use strect';
export { Connection };
class Connection{
    test(){
        console.log('connection success');
    }
    getUser() {
        var obj, agend;
        agend = navigator.userAgent;
        (agend == undefined) ? obj = {
            "success": [false, "theche your browser version minimum 2021 softwer version"]
        } : obj = {
            "success": [true, "data callection success"],
            "language": navigator.languages,
            "browser": agend.match(/firefox|chrome|opera|Safari|AppleWebKit|Edg|edge|tor|brave/i)[0],
            "device": agend.match(/windows|Android|BlackBerry|iPhone|iPad|iPod|Mack|linux|ubuntu|deven|kali|sentos/i)[0],
            "platform": navigator.platform,
            "cookie": navigator.cookieEnabled
        };
        return obj;
    }
}
