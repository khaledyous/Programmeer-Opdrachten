function ShakeFunctie(woordDatGeschudMoetWorden) {
    const characters = woordDatGeschudMoetWorden.split('');
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    const geschudWoord = characters.join('');
    return geschudWoord;
  }
  
  var woord1 = ShakeFunctie("khaled");
  console.log(woord1);
  
  var woord2 = ShakeFunctie("softwaredeveloper");
  console.log(woord2);

  var woord3 = ShakeFunctie("Amsterdam");
  console.log(woord3);
