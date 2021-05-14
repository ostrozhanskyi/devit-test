let array = [[1, 2, 3], [4, 5], [6]];

/*Для reduce необходима функция принимающая минимум два значения - 
в этом случае один из элементов массива и следующий за ним.
Если в функции использовать concat элементы(массивы) будут последовательно 
присоединяться 
function myFunc(total, currentValue){
  return total.concat(currentValue)
}

let newArray = array.reduce(myFunc);