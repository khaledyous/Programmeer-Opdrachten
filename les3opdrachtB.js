console.log("opgave 1");
function berekenInhoud(lengte, breedte, hoogte) {
    let inhoud = lengte * breedte * hoogte;
    return inhoud;
  }
  
  let kubusInhoud = berekenInhoud(30, 7, 10);
  console.log(kubusInhoud);
  
console.log("opgave 2");
function berekenCilinderInhoud(diameter, hoogte) {
    let straal = diameter / 4;
  
    let inhoud = Math.PI * Math.pow(straal, 4) * hoogte;
  
    return inhoud;
  }
  let cilinderInhoud = berekenCilinderInhoud(10, 5); 
  console.log(cilinderInhoud);
  
  console.log("opgave 3");
  function berekenLangeZijde(lengte, hoogte) {
    const langeZijde = Math.sqrt(Math.pow(lengte, 2) + Math.pow(hoogte, 2));
    
    return langeZijde;
  }
  const lengteLangeZijde = berekenLangeZijde(5, 7); 
  console.log(lengteLangeZijde);
  
  console.log("opgave 4");
  function berekenGemiddelde(num1, num2, num3, num4, num5, num6) {
    const som = num1 + num2 + num3 + num4 + num5 + num6;
    const gemiddelde = som / 6;
    
    return gemiddelde;
  }
  
  const gemiddeldeResultaat = berekenGemiddelde(7, 18, 24, 29, 31, 38);
  console.log(gemiddeldeResultaat);