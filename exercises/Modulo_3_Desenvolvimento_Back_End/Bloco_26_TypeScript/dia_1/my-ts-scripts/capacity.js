"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const convert = (valor, baseUnit, conversionUnit) => {
    if (conversionUnit !== 'litros')
        return `${conversionUnit} precisa ser passado como "litros"`;
    switch (baseUnit) {
        case 'Quilolitro'.toLowerCase():
            return `${valor}${baseUnit} é igual a ${valor * 1000}${conversionUnit}`;
        case 'Hectolitro'.toLowerCase():
            return `${valor}${baseUnit} é igual a ${valor * 100}${conversionUnit}`;
        case 'Decalitro'.toLowerCase():
            return `${valor}${baseUnit} é igual a ${valor * 10}${conversionUnit}`;
        case 'Litro'.toLowerCase():
            return `${valor}${baseUnit} é igual a ${valor * 1}${conversionUnit}`;
        case 'Decílitro'.toLowerCase():
            return `${valor}${baseUnit} é igual a ${valor / 10}${conversionUnit}`;
        case 'Centilitro'.toLowerCase():
            return `${valor}${baseUnit} é igual a ${valor / 100}${conversionUnit}`;
        case 'Mililitro'.toLowerCase():
            return `${valor}${baseUnit} é igual a ${valor / 1000}${conversionUnit}`;
        default:
            break;
    }
};
exports.convert = convert;
