const websites = {
"google":{"name":"Google", "text":"Google", "icon":"https://www.google.com/favicon.ico"},
"googleClassroom":{"name":"Google Classroom", "text":"Courses", "icon":"https://ssl.gstatic.com/classroom/favicon.png"},
"outlook":{"name":"outlook", "text":"Outlook", "icon":"https://outlook.office365.com/owa/favicon.ico"},
"googleDrive":{"name":"google drive", "text":"My Drive", "icon":"https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png"},
"camMath":{"name":"cambridge math", "text":"Cambridge Essential Math", "icon":"https://emac.hotmaths.com.au/users/branding/emacs/img/favicon.ico"}
}
const parsedData = JSON.parse(websites)
const favicon = document.querySelector('[rel=icon]');

function ask() {
  var site = prompt("Please insert a website (A list of websites can be found on the github page)")
  var ans = site.toLowerCase()

if (site =! null) {
  Object.keys(parsedData).every(function(key) {
      console.log(key)
  })
}
}
