export const convert = (valor: number, baseUnit: string, conversionUnit: string) => {
  if(conversionUnit !== 'metros') return `${conversionUnit} precisa ser passado como "metros"`;
  switch (baseUnit) {
    case 'Quilômetro'.toLowerCase():
      return `${valor}km é igual a ${valor * 1000}m`;
    case 'Hectômetro'.toLowerCase():
      return `${valor}hm é igual a ${valor * 100}m`;
    case 'Decâmetro'.toLowerCase():
      return `${valor}dam é igual a ${valor * 10}m`;    
    case 'Decímetro'.toLowerCase():
      return `${valor}dm é igual a ${valor / 10}m`;  
    case 'Centímetro'.toLowerCase():
      return `${valor}cm é igual a ${valor / 100}m`;
    case 'Milímetro'.toLowerCase():
      return `${valor}mm é igual a ${valor / 1000}m`;
    default:
      break;
  }
};