var arr = [1, 2, 3];

Array.prototype.append = function (val) {
  this.push(val); // Добавление элемента в конец массива
  let i;
  for (i = 0; i < this.length - 1; i++) {
    this.push(this.shift()); // Перемещение поочередно каждого элемента
//с начала в конец
  } 
}

arr.append(0);