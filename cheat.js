function g() {
  var a = new Array()
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.includes(document.getElementsByClassName("syllable")[0].textContent)){ a.push(word)}
  }
  console.log(a.sort((a,b)=>{return Math.sign(a.length-b.length)}))
}
setInterval(g, 1500)