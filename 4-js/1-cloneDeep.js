function cloneDeep(obj) {
  let objCopy = {};
  let key;
  for (key in obj) {
    objCopy[key] = obj[key];
  }
  return objCopy;
}
/* 
Не глубокое копирование, но лучше сейчас не сделаю
Создается новый объект и в цикле копируется каждое свойство объекта, 
который подлежит копированию
*/