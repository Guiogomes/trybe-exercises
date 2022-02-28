enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];
const unauthorized = StatusCodes.Unauthorized;
const payment = StatusCodes.PaymentRequired;
const forbidden = StatusCodes.Forbidden;
const notFound = StatusCodes.NotFound;


console.log(ok); //saída: 200
console.log(indiceOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest
console.log(unauthorized); //saída: 401
console.log(payment); //saída: 402
console.log(forbidden); //saída: 403
console.log(notFound); //saída: 404

