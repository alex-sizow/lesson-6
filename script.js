function addTask() {
	const input = document.getElementById('myInput').value;

	if (input === '') {
		return;
	}

	const li = document.createElement('li');
	const textLi = document.createTextNode(input);

	li.append(textLi);

	document.getElementById('list').append(li);

	document.getElementById('myInput').value = '';
}
