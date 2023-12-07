function addTask() {
	const input = document.getElementById('myInput').value;
	if (input === '') {
		console.log('Ты дурак?');
		return;
	}

	const button = document.createElement('button');
	const textButton = document.createTextNode('❌');
	button.append(textButton);

	button.addEventListener('click', function () {
		document.getElementById(idDate).remove();
	});

	const textLi = document.createTextNode(input);
	const li = document.createElement('li');
	li.append(textLi);
	li.append(button);

	const idDate = new Date().getTime();
	li.id = idDate;

	document.getElementById('list').append(li);

	document.getElementById('myInput').value = '';
}
