/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
	let numbers = data.split(',')
	numbers.map(el=>{
		return parseInt(el);
	});
	numbers.sort((a,b)=>{
		return a-b;
	});
	return numbers.join(',');
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
	return data.filter(el=>{
		return el <= 100;
	});
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
	let array3 = [];
	for (let i = 0;i<10;i++){
		if(i % 2 == 0){
			array3.push(array1[i/2]);
		}else{
			array3.push(array2[Math.floor(i/2)]);
		}
	}
	return array3;
}
