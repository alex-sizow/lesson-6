function addTask() {
	const input = document.getElementById('myInput').value;

	if (input === '') {
		return;
	}

	
	const idDate = new Date().getTime();

	const button = document.createElement('button');
	const textButton = document.createTextNode('❌');
	button.append(textButton);

	button.addEventListener('click', function () {
		document.getElementById(idDate).remove();
	});

	const li = document.createElement('li');
	const textLi = document.createTextNode(input);
	li.append(textLi);
	li.append(button);

	li.id = idDate;

	document.getElementById('list').append(li);
	document.getElementById('myInput').value = '';
}
