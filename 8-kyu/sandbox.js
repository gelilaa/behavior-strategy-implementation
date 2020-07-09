function getPlanetName(i){
    return (['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'])[i-1];
  }

  function getPlanetName(id){  
    switch(id){
      case 1:
        return "Mercury";
      case 2:
        return "Venus";
      case 3:
        return "Earth";
      case 4:
        return "Mars";
      case 5:
        return "Jupiter";
      case 6:
        return "Saturn";
      case 7:
        return "Uranus";
      case 8:
        return "Neptune";
      default:
        return "invalid planet id in function getPlanetName()";
    }
  }

const planet =6;
const planet6 = getPlanetName(planet);
console.log(planet6); // 'Saturn'

