function tyvAlert() {
  if (document.cookie == "value=1") {alert("Velkommen tilbage")} else {
  if (confirm("Vil du gerne deltage i et spil med chancen for at vinde en tur til LibreOffice? Denne popup kommer kun en gang, men du kan også gå til spillet via menuen.")) {
  open("tyv.html", "Fair nok");}
  document.cookie = "value=1"
  }
}

tyvAlert()
