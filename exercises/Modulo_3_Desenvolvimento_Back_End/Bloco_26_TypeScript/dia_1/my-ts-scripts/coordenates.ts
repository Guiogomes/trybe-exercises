enum coordenates {
  N = 'norte',
  S = 'sul',
  L = 'leste',
  O = 'oeste',
};

Object.values(coordenates)
  .forEach((coordenate) =>
    console.log(coordenate));
