function figur(nr) {
if(nr == 0) {
return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/LibreOffice_4.0_Impress_Icon.svg/1200px-LibreOffice_4.0_Impress_Icon.svg.png"
}
else if(nr == 1) {
return "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/LibreOffice_Calc_icon_3.3.1_48_px.svg/1200px-LibreOffice_Calc_icon_3.3.1_48_px.svg.png"
}
else if(nr == 2) {
return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/LibreOffice_6.1_Writer_Icon.svg/1200px-LibreOffice_6.1_Writer_Icon.svg.png"
}
}

function vaerdi(felt1,felt2,felt3) {
if(felt1 == 0 && felt2 == 0 && felt3 == 0) {
  return 10
}
else if(felt1 == 1 && felt2 == 1 && felt3 == 1) {
  return 10
}
else if (felt1 == 2 && felt2 == 2 && felt3 == 2) {
  return 10
}
else {
  return 0
}
}

function getCount() {
  if (document.cookie.includes("count=")) {
    var cstring = document.cookie
    var n = cstring.search("count=")
    var counter = parseInt(cstring.substring(n+6,n+8))
    document.getElementById("forsoeg").innerHTML = counter
    return counter
  } else {
    document.cookie = "count=3"
    return 3;
  }
}

function countdown() {
  newCount = String(getCount()-1)
  document.cookie = "count=" + newCount
  document.getElementById("forsoeg").innerHTML = newCount;
}

function spil() {

if (getCount() > 0) {
ok = true
while(ok == true) {
felt1 = Math.floor(3*Math.random())
felt2 = Math.floor(3*Math.random())
felt3 = Math.floor(3*Math.random())
hjul1.src = figur(felt1)
hjul2.src = figur(felt2)
hjul3.src = figur(felt3)
countdown()
gevinst = vaerdi(felt1,felt2,felt3)

if(gevinst == 10) {
  document.cookie = "count=0"
  Alert('Tillykke, du har vundet et lod i konkurrencen om at besøge LibreOffice!')
  ok = false
}
else{
  if (getCount() > 0) {
  ok = confirm('Desværre, du vandt ikke. Tryk OK for at spille igen.')}
  else {
    ok = false
    alert('Desværre, du vandt ikke, og du er løbet tør for forsøg.')
  }
}

}
} else {
  alert("Du har desværre ikke flere forsøg")
}
}


getCount()
