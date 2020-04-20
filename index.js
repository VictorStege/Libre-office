function tyvAlert() {
  if (document.cookie.includes("visited=1")) {alert("Velkommen tilbage")} else {
  if (confirm("Vil du gerne deltage i et spil med chancen for at vinde en tur til LibreOffice? Denne popup kommer kun en gang, men du kan også gå til spillet via menuen.")) {
  open("tyv.html", "Fair nok");}
  document.cookie = "visited=1"
  }
}

tyvAlert()
