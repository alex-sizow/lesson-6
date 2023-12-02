console.log('HELLO');

function addText(text) {
	let input = document.getElementById('myInput').value;
	let text = document.createTextNode(input);
	let li = document.createElement('li');
	li.append(text);

	document.getElementById('list').append(li);

	document.getElementById('myInput').value = '';
}
