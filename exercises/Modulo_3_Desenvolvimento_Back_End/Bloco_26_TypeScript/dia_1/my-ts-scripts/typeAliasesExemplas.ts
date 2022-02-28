type Bird = {
  wings: string;
  body: string;
  paws: string;
}

const birdPieces = (bird: Bird): void => {
  console.log(`A bird has ${bird.wings}, ${bird.body}, ${bird.paws}`);
}

birdPieces({ wings: 'asas', body: 'tronco', paws: 'patas' });

type Sum = {
  x: number;
  y: number;
}

const printSum = (sum: Sum) => console.log(sum.x + sum.y);

printSum({ x: 10, y: 5});