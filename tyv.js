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
function spil() {
ok = true
while(ok == true) {
felt1 = Math.floor(3*Math.random())
felt2 = Math.floor(3*Math.random())
felt3 = Math.floor(3*Math.random())
hjul1.src = figur(felt1)
hjul2.src = figur(felt2)
hjul3.src = figur(felt3)

gevinst = vaerdi(felt1,felt2,felt3)
if(gevinst == 10) {
  ok = confirm('Tillykke, du har vundet et lod!')
}
else{
  ok = confirm('Desværre, du vandt ikke.')
}


ok = confirm('Din gevinst er '+gevinst+' kr\nDin saldo er '+total+
' kr\nVil du prøve igen?')
}
}
