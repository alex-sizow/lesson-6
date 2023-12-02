const deleteText = id => {
	let element = document.getElementById(id);
	console.log(num);
	element.remove();
};
// функция удаления

function addText() {
	const input = document.getElementById('myInput').value;
	// здесь извлекаем текст из input по id

	if (input === '') {
		return;
	}
	// не выводится элемент если нет текста в input

	const textLi = document.createTextNode(input);
	// полготавливаем текст для записи в li
	const li = document.createElement('li');
	// создаем элемент li
	li.append(textLi);
	// добавляем текст в элемент li выше
	const idDate = new Date().getTime();
	// уникальный id по дате

	li.id = idDate;
	// добавляем уникальный id с помощью даты

	const button = document.createElement('button');
	// создаю элемент button
	const textButton = document.createTextNode('❌');
	// создаю крестик для кнопки
	button.append(textButton);
	// добавляю смайлик крестика в кнопку

	button.addEventListener('click', function () {
		deleteText(idDate);
	});
	// добавляем функцию удаления

	li.append(button);

	document.getElementById('list').append(li);
	// добавляем элемент li в список по id list

	document.getElementById('myInput').value = '';
}
