"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const convert = (valor, baseUnit, conversionUnit) => {
    if (conversionUnit !== 'gramas')
        return `${conversionUnit} precisa ser passado como "gramas"`;
    switch (baseUnit) {
        case 'Quilograma'.toLowerCase():
            return `${valor}kg é igual a ${valor * 1000}g`;
        case 'Hectograma'.toLowerCase():
            return `${valor}hg é igual a ${valor * 100}g`;
        case 'Decagrama'.toLowerCase():
            return `${valor}dag é igual a ${valor * 10}g`;
        case 'Grama'.toLowerCase():
            return `${valor}g é igual a ${valor * 1}g`;
        case 'Decígrama'.toLowerCase():
            return `${valor}dg é igual a ${valor / 10}g`;
        case 'Centigrama'.toLowerCase():
            return `${valor}cg é igual a ${valor / 100}g`;
        case 'Miligrama'.toLowerCase():
            return `${valor}mg é igual a ${valor / 1000}g`;
        default:
            break;
    }
};
exports.convert = convert;
