# website-disguiser
disguise any website by injecting this script 

now you might be thinking "bUt HoW wIlL iT dIsGuIsE iT" it will change the favicon (the little icon on the tab) and the name of the tab to any of the selected websites down below

paste this into the console to inject the script. keep in mind some websites will not let you inject scripts

```js
fetch("https://raw.githubusercontent.com/LX8369/website-disguiser/main/script.js").then((r)=>{r.text().then((d)=>{eval(d)})})
```
List of sites:

Google

Google Drive

Google Classroom

Outlook

Cambridge Math

Feel free to create a pull request if you want to add more sites
