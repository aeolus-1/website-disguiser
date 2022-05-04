const websites = {
    "google":{"name":"google", "text":"Google", "icon":"https://www.google.com/favicon.ico"},
    "googleclassroom":{"name":"google classroom", "text":"Courses", "icon":"https://ssl.gstatic.com/classroom/favicon.png"},
    "outlook":{"name":"outlook", "text":"Outlook", "icon":"https://outlook.office365.com/owa/favicon.ico"},
    "googledrive":{"name":"google drive", "text":"My Drive", "icon":"https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png"},
    "cambridgemath":{"name":"cambridge math", "text":"Cambridge Essential Math", "icon":"https://emac.hotmaths.com.au/users/branding/emacs/img/favicon.ico"}
    "newtab":{name:"New Tab", text:"New Tab", icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFTmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuOWNjYzRkZTkzLCAyMDIyLzAzLzE0LTE0OjA3OjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI0NiIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjM4IiBleGlmOlVzZXJDb21tZW50PSJTY3JlZW5zaG90IiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNS0wNFQxMToxODozNCsxMDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDUtMDRUMTE6MjA6MTYrMTA6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDUtMDRUMTE6MjA6MTYrMTA6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmYwMDVhN2MyLWYyZDAtNDM1YS1iOTM0LTVhN2E1NDFhZmM2YSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmMDA1YTdjMi1mMmQwLTQzNWEtYjkzNC01YTdhNTQxYWZjNmEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmMDA1YTdjMi1mMmQwLTQzNWEtYjkzNC01YTdhNTQxYWZjNmEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMDA1YTdjMi1mMmQwLTQzNWEtYjkzNC01YTdhNTQxYWZjNmEiIHN0RXZ0OndoZW49IjIwMjItMDUtMDRUMTE6MjA6MTYrMTA6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy4zIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptlnd8wAAAO/SURBVEiJrVZdSBRRFD4O4u2hWQVXsbZAInAhm8ifFTOKdgsswoeixMmXDBTLba2NXfrREreENbIlKVrIIGrEwqAlf8JfRPvZ/lBcGKHCcNeKFHTWh6YXe3DuNnudWXfL72nOufeeb+6553z3xi0uLkI0qLLYTN+m/XlCcF4nimISAABCaE6rTfUlJ6dMNLucfdHEiYtEeMXRmPbO+9osBOfTJRerMpUDAKDpxEmDIf/W5UvnvsdMWFJ6/GQgMFUQgUQNHE0nTnZ42i9GRVjnuJ42PDxQI6UtVrIQKUJozmgstJ63mX+pEjY4b63p6np27z+IlhGbTIVWeYrDCA8WHb4qBOcvrBQkFkaE0FxPd8cpbMfLB7du2/5gZHgwHZbvkEMoYYFhctxabYqPTFMsWHaGCsXCMUxWS7RlvxIoAIDyyuoi7Gh9eP+2bJwr2LmndrXIAKSU8vx4MQB4sHPTps0vvnz5BLm5+Tca6i9+xn5ztc3E875DuPEBAPT6zDb3nZuhtVUWm2ls7EOZEtnQQO+xuFOnz5nGxj6Wkb1z+EjJhfYnrdewLRVUOiicL7l2X+GBu6L4u5ycxzBZLdTs7EwGALDB4Hy61VaTjUflZOWVliIVMsBrzdX23djBMDlupXnfpqfyqJmZH9uwQy0VPO8rViELBeP58aPY0GpTfKDQPkJQ0FGi+HstdoiimCQvoFggP1e1thFFMSme8LE8Pw4gK6DVBoVQwgLpLCk9flJuK835FyCE5igNnfSV8LOBwFRBneN6GnZkZGQ+hsiSxun1mW3YKK+0KB6LVpvqo9at171RCMZ6va/M2Gh2Ofs0tMavQsrRtMYv78XpgD8PFNonOTllgmp2NSqqCFnqzz1P7Xr9ljaJlIMlfXUzTFZLh+epHc+z2muzZRd2GJpdzr54AAANrfELQYEcZ0dH38P5Gsf3hvpLEwAA7jsuD6xQUG+9L88q7A7opQwtaWmOIb8JlNPFjgwP1lrtfwUhEtTODgA4g2FHE4DstljhScHRdOKkTrfxjfysSOzas/eRwnqOpjV+nPaw60lFA8MWy42hgd5j+FtNaxFKcPd0d1Zgm5IPGo37LWRQAiwOKG+DK47GNDVhl2KGEKY0kiSd6O/vWpAkT1E/yTZ4531tJuZyCCUsGI37LaTMhe0Qk/Z0d1ZE6jtcAABLdyTRBpxOt3Gkp7uzQklTo3gIvzojBIUNkoulaY1T3ndSoYR2bjDsaPqnhzCJKovNNDv7M4Nhslrwn1vttdnTgam8WJ76fwCc6sMGtGh2GwAAAABJRU5ErkJggg=="},   
}
    document.head = document.head || document.getElementsByTagName('head')[0];
    
    function changeFavicon(src) {
     var link = document.createElement('link'),
         oldLink = document.getElementById('dynamic-favicon');
     link.id = 'dynamic-favicon';
     link.rel = 'shortcut icon';
     link.href = src;
     if (oldLink) {
      document.head.removeChild(oldLink);
     }
     document.head.appendChild(link);
    }
    
    const favicon = document.querySelector('[rel=icon]');
    const amountOfSites = 5
    var count = 0
    function ask() {
        var text = "Please insert a website:",
            sites = Object.keys(websites)

        for (let i = 0; i < sites.length; i++) {
            const site = sites[i];
            text += `${site}\n`
        }


      var site = prompt(text)
      var ans = site.toLowerCase()
      console.log(ans, site)
    if (site =! null) {
      Object.keys(websites).every(function(key) {
          if (websites[key].name == ans) {
            alert("Site found! disguising site...")
            changeFavicon(websites[key].icon)
            document.title = websites[key].text
            return false
          } else {
           count++
           if (count == amountOfSites) {
           alert("couldnt find site")
    }
            return true
          }
          
      })
    }
    }
    
    ask()
