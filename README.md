# website-disguiser
disguise any website by injecting this script 

paste this into the console to inject the script

```js
fetch("https://raw.githubusercontent.com/LX8369/website-disguiser/main/script.js").then((r)=>{r.text().then((d)=>{eval(d)})})
```
