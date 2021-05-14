function MultiplicatorUnitFailure() {}
function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}
function reliableMultiply(a, b) {
  let res;
  try {
    res = primitiveMultiply(a, b);
  }
  catch(err) {
    res = reliableMultiply(a, b);
  }
  
  return res;
}
/*Функция будет рекурсивно вызываться, пока catch не перестанет ловить
ошибки. Можно ещё заключить try-catch в while:
function reliableMultiply(a, b) {
  let res;
  let ifError;
  do{
    ifError = 0;
    try {
      res = primitiveMultiply(a, b);
    }
    catch(err) {
      ifError = 1;
    }
  } while(ifError == 1);
  
  return res;
}
*/
console.log(reliableMultiply(8, 8));