const fetch = require('node-fetch');

fetch("http://wcfsecurity.homedns.org/t4c/Content/AjaxRequest.aspx?Module=53&PageNo=1&MaxParams=9&0=2&1=1&MultiSort=2:1:1|&2=&3=&4=&5=&6=&7=&8=10%2C0&urq=0.6199352018307362")
.then(x => x.text())
.then(x => {
    console.log("did the thing")
    return x
})
.then(x => console.log(x))